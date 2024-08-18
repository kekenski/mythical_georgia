"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Models from './Models';

const Territory: React.FC = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<string[]>([]);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const dummyResults = ['Castle 1', 'Castle 2', 'Castle 3']; 
        const filteredResults = dummyResults.filter(item =>
            item.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filteredResults);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <>
        <div className="flex flex-col items-center justify-center bg-primary py-8 px-4">
            {/* Image Slider using react-slick */}
            <div className="w-full max-w-screen-xl px-4">
                <Slider {...settings}>
                    <div className="px-4 flex justify-center items-center">
                        <div className="relative rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200">
                            <Image 
                                src="/castle2.png"
                                alt="Castle 1"
                                width={500} // Adjust width to fit the container
                                height={300} // Set a fixed height for all images
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white">
                                <h2 className="text-xl font-semibold">Castle 1</h2>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 flex justify-center items-center">
                        <div className="relative rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200">
                            <Image 
                                src="/castle2.png"
                                alt="Castle 2"
                                width={500}
                                height={300}
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white">
                                <h2 className="text-xl font-semibold">Castle 2</h2>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 flex justify-center items-center">
                        <div className="relative rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200">
                            <Image 
                                src="/castle2.png"
                                alt="Castle 3"
                                width={500}
                                height={300}
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white">
                                <h2 className="text-xl font-semibold">Castle 3</h2>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>

            {/* Search Bar Section */}
            <div className="w-full flex flex-col items-center mt-8 px-4">
                <form onSubmit={handleSearch} className="relative w-full max-w-lg">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for historical events or locations"
                        className="w-full py-3 px-5 text-sm rounded-lg border border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-accent transition duration-300"
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
         <Models />
        </>
    );
};

export default Territory;   