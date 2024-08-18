// app/Empires/History/page.tsx

"use client"; // Ensure this is a Client Component

import React from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

// Define the data for each empire
const empireData: Record<string, { logo: string, text: string }> = {
    empire1: {
        logo: '/empire1-logo.png',
        text: 'Empire 1 was known for its vast territories and advanced architecture. Its influence spread across many regions during its peak.'
    },
    empire2: {
        logo: '/empire2-logo.png',
        text: 'Empire 2 was famous for its rich cultural heritage and military prowess. It played a significant role in shaping historical events.'
    },
    empire3: {
        logo: '/empire3-logo.png',
        text: 'Empire 3 was famous for its rich cultural heritage and military prowess. It played a significant role in shaping historical events.'
    },
    // Add more empires as needed
};

const EmpireHistory: React.FC = () => {
    const searchParams = useSearchParams();
    const empireKey = searchParams.get('page') || '';
    const empire = empireData[empireKey] || { logo: '', text: 'No history available for this empire.' };

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Empire Details</h1>
            <div className="flex flex-col items-center">
                <Image 
                    src={empire.logo}
                    alt="Empire Logo" 
                    width={600} 
                    height={600} 
                    className="object-cover mb-4"
                />
                <p className="text-lg text-secondary">{empire.text}</p>
            </div>
        </div>
    );
};

export default EmpireHistory;
