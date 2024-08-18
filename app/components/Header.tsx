"use client"; // Make sure this file is treated as a Client Component

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary p-4 flex justify-between items-center font-extrabold">
        <Link href={"/"}><h1 className="text-secondary text-3xl font-bold mr-8">MythicalKingdom</h1></Link>
      {/* Desktop version: menu and buttons */}
      <div className="hidden md:flex flex-grow justify-between items-center">
        <div className="flex space-x-8">
          <Link href="/" className="text-secondary text-lg hover:text-accent transition duration-300">Home</Link>
          <Link href="/Empires" className="text-secondary text-lg hover:text-accent transition duration-300">Empires</Link>
          <Link href="/Wars" className="text-secondary text-lg hover:text-accent transition duration-300">Wars</Link>
          <Link href="/Territory3D" className="text-secondary text-lg hover:text-accent transition duration-300">Territory 3D</Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/Login" className="text-secondary text-lg border border-secondary px-2 py-1 rounded-lg hover:bg-secondary hover:text-primary transition duration-300">
            Log in
          </Link>
          <Link href="/Signup" className="text-secondary text-lg border border-secondary px-2 py-1 rounded-lg hover:bg-secondary hover:text-primary transition duration-300">
            Sign up
          </Link>
        </div>
      </div>

      {/* Mobile version: hamburger menu */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="focus:outline-none"
        >
          <Image
            src="/icons.png"
            alt="Hamburger Menu"
            width={34}
            height={34}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-primary flex flex-col items-center justify-center space-y-4 z-50 p-4">
          <Link href="/" className="text-secondary text-xl hover:text-accent transition duration-300">Home</Link>
          <Link href="/Empires" className="text-secondary text-xl hover:text-accent transition duration-300">Empires</Link>
          <Link href="/Wars" className="text-secondary text-xl hover:text-accent transition duration-300">Wars</Link>
          <Link href="/Territory3D" className="text-secondary text-xl hover:text-accent transition duration-300">Territory 3D</Link>
          <Link href="/Login" className="text-secondary text-xl hover:text-accent transition duration-300">Log in</Link>
          <Link href="/Signup" className="text-secondary text-xl hover:text-accent transition duration-300">Sign up</Link>
          <button
            onClick={toggleMenu}
            className="text-white text-xl mt-4 border border-white px-4 py-2 rounded-lg hover:bg-secondary hover:text-primary transition duration-300"
          >
            Close
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
