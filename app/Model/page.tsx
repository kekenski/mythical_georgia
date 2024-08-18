import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const Castles: React.FC = () => {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Cinzel&family=Uncial+Antiqua&display=swap" rel="stylesheet" />
            </Head>
            <div className=" min-h-screen py-8">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="bg-[#f4e5c3] border-4 border-[#c2a772] rounded-xl p-8 mb-8 shadow-xl animate-unfurl">
                        <h1 className="text-center text-3xl md:text-5xl font-extrabold font-cinzel text-[#3e2c1c]">
                            Ancient Castles
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-[#5b4735]">
                            Discover the rich history and magnificent architecture of ancient castles.
                        </p>
                    </div>

                    <div className="bg-[#f4e5c3] border-4 border-[#c2a772] rounded-xl p-8 mb-8 shadow-xl animate-unfurl">
                        <h2 className="text-center text-2xl md:text-4xl font-extrabold font-uncial text-[#3e2c1c]">
                            Castle History
                        </h2>
                        <p className="mt-4 text-lg md:text-xl text-[#5b4735]">
                            Explore the fascinating past of medieval fortresses, their construction, and their role in history.
                        </p>
                    </div>

                    <div className="bg-[#f4e5c3] border-4 border-[#c2a772] rounded-xl p-8 shadow-xl animate-unfurl">
                        <h2 className="text-center text-2xl md:text-4xl font-extrabold font-uncial text-[#3e2c1c]">
                            Architectural Marvels
                        </h2>
                        <p className="mt-4 text-lg md:text-xl text-[#5b4735]">
                            Learn about the architectural features that made castles impregnable, including moats, drawbridges, and towers.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Castles;
