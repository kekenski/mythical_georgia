import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const Models: React.FC = () => {
    return (
        <>
            <div className='text-secondary p-4'>
                <h1 className='text-center text-lg md:text-xl lg:text-3xl font-extrabold tracking-wider'>
                    Explore Other 3D Models
                </h1>
            </div>
            <div className='flex flex-wrap md:flex-nowrap justify-center items-center gap-6 p-4'>
                {/* Image 1 */}
                <div className='flex flex-col items-center md:w-1/3'>
                    <div className='group border-4 border-accent rounded-xl overflow-hidden shadow-2xl bg-white transition-transform duration-300 transform hover:scale-105'>
                        <Image 
                            src={"/3D.png"}
                            alt='3D Castle'
                            width={300}
                            height={300}
                            className='object-cover'
                        />
                        <div className='p-4 bg-black'>
                            <h3 className='text-center text-secondary group-hover:text-amber-500 font-extrabold text-lg'>
                                Village Life
                            </h3>
                            <p className='text-center text-secondary group-hover:text-amber-500 text-sm md:text-base'>
                                Discover the daily life in a medieval village with thatched roofs and cobblestone streets.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Image 2 */}
                <div className='flex flex-col items-center md:w-1/3'>
                    <div className='group border-4 border-accent rounded-xl overflow-hidden shadow-2xl bg-white transition-transform duration-300 transform hover:scale-105'>
                        <Image 
                            src={"/3DD.png"}
                            alt='3D Castle'
                            width={300}
                            height={300}
                            className='object-cover'
                        />
                        <div className='p-4 bg-black'>
                            <h3 className='text-center text-secondary group-hover:text-amber-500 font-extrabold text-lg'>
                                Castle and Moat
                            </h3>
                            <p className='text-center text-secondary group-hover:text-amber-500 text-sm md:text-base'>
                                Explore the intricacies of a medieval castle surrounded by a protective moat.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Image 3 */}

                <div className='flex flex-col items-center md:w-1/3'>
                    <div className='group border-4 border-accent rounded-xl overflow-hidden shadow-2xl bg-white transition-transform duration-300 transform hover:scale-105'>
                       <Link href="/Model"><Image 
                            src={"/3DDD.png"}
                            alt='3D Castle'
                            width={300}
                            height={300}
                            className='object-cover'
                        />
                       
                        <div className='p-4  bg-black'>
                            <h3 className='text-center text-secondary group-hover:text-amber-500 font-extrabold text-lg'>
                                Battlefields
                            </h3>
                            <p className='text-center text-secondary group-hover:text-amber-500 text-sm md:text-base'>
                                Experience the intensity of medieval battles with knights and siege engines.
                            </p>
                        </div> 
                        </Link> 
                    </div>
                </div>
            </div>
        </>
    );
};

export default Models;