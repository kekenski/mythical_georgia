// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-accent py-4">
      <div className="container pt-4 mx-auto flex justify-between items-center px-4">
        {/* Copyright Text */}
        <p className="text-sm">&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>

        {/* Privacy Policy Link */}
        <a href="/privacy-policy" className="text-sm hover:underline">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
