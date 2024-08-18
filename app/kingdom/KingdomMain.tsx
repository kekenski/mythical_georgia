"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const KingdomMain = () => {
    const imageWidth = 500; // Width of the image in pixels
    const imageHeight = 400; // Height of the image in pixels

    // State to manage search query and results
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<string[]>([]);

    // Mock data for demonstration purposes
    const mockData = ['medieval', 'castle', 'dragon', 'knight', 'quest', 'legend'];

    // Handle search logic
    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();
        const filteredResults = mockData.filter(item =>
            item.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filteredResults);
    };

    return (
        <div className="relative p-4 flex flex-col items-center justify-center">
            {/* Mobile and Tablet View: Image below text */}
            <div className="flex flex-col items-center md:hidden">
                <h1 className='text-secondary text-3xl md:text-4xl font-semibold mb-6 text-center'>
                    Embark on a journey through medieval realms & tales!
                </h1>
                <div className="relative w-[300px] h-[250px] mb-6">
                    <Image
                        src="/oldmen.png"
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Desktop and Tablet View: Text on left, Image on right */}
            <div className="hidden md:flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mx-auto mb-6">
                <div className="flex flex-1 flex-col justify-center px-4 md:px-8 lg:px-16">
                    <h1 className='text-secondary text-4xl md:text-5xl font-bold mb-4'>
                        Embark on a journey through medieval realms & tales!
                    </h1>
                    <p className="text-accent text-lg md:text-xl leading-relaxed mb-6">
                        Dive into the mythical and explore the grandeur of the medieval world through captivating tales and adventures. Discover hidden realms and legendary stories like never before.
                    </p>
                </div>
                <div className="flex flex-1 items-center justify-center relative w-[400px] h-[320px] md:w-[500px] md:h-[400px] lg:w-[600px] lg:h-[500px]">
                    <div className="relative w-full h-full">
                        <Image
                            src="/oldmen.png"
                            alt="Background"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Search Bar Section */}
            <div className="w-full flex flex-col items-center mt-6 px-4">
                <form onSubmit={handleSearch} className="relative w-full max-w-lg">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search..."
                        className="w-full py-3 px-5 text-lg rounded-lg border border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-accent transition duration-300"
                    />
                    <button
                        type="submit"
                        className="absolute inset-y-0 right-0 flex items-center pr-4"
                    >
                        <Image
                            src="/search.png"
                            alt="Search Icon"
                            width={24}
                            height={24}
                        />
                    </button>
                </form>

                {/* Display Search Results */}
                {results.length > 0 && (
                    <ul className="mt-4 w-full max-w-lg border border-gray-300 rounded-lg bg-white shadow-lg">
                        {results.map((result, index) => (
                            <li key={index} className="py-2 px-4 border-b last:border-b-0 hover:bg-gray-100">
                                {result}
                            </li>
                        ))}
                    </ul>
                )}
                {results.length === 0 && query && (
                    <p className="mt-4 text-gray-500">No results found.</p>
                )}
            </div>
        </div>
    );
};

export default KingdomMain;
