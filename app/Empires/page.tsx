// app/Empires/page.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const EmpireLogos: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Empires Logos</h1>
            <div className="flex flex-wrap gap-6">
                {/* Logo 1 */}
                <Link href="/Empires/History?page=empire1">
                    <div className="relative group cursor-pointer">
                        <Image 
                            src="/empire1-logo.png" // Path to the image for Empire 1
                            alt="Empire 1 Logo" 
                            width={300} 
                            height={300} 
                            className="object-cover group-hover:opacity-80"
                        />
                        <span className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Empire 1
                        </span>
                    </div>
                </Link>
                
                {/* Logo 2 */}
                <Link href="/Empires/History?page=empire2">
                    <div className="relative group cursor-pointer">
                        <Image 
                            src="/empire2-logo.png" // Path to the image for Empire 2
                            alt="Empire 2 Logo" 
                            width={300} 
                            height={300} 
                            className="object-cover group-hover:opacity-80"
                        />
                        <span className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Empire 2
                        </span>
                    </div>
                </Link>

                {/* Logo 3 */}
                <Link href="/Empires/History?page=empire3">
                    <div className="relative group cursor-pointer">
                        <Image 
                            src="/empire3-logo.png" // Path to the image for Empire 3
                            alt="Empire 3 Logo" 
                            width={300} 
                            height={300} 
                            className="object-cover group-hover:opacity-80"
                        />
                        <span className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Empire 3
                        </span>
                    </div>
                </Link>
                {/* Add more logos as needed */}
            </div>
        </div>
    );
};

export default EmpireLogos;
