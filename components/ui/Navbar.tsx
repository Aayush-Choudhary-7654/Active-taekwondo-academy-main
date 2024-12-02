'use client';

import React, { useState } from 'react';
import Link from "next/link";
import ContactModal from './ContactModal';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-between flex-1 ml-10">
              {/* Left Nav Items */}
              <div className="flex space-x-8">
                <Link 
                  href="/About" 
                  className="text-gray-800 hover:text-red-800 font-medium transition-colors">
                  About
                </Link>
                <Link 
                  href="/programs" 
                  className="text-gray-800 hover:text-red-800 font-medium transition-colors">
                  Programs
                </Link>
              </div>
              {/* Logo - Always Visible */}
              <div className="flex-shrink-0">
                <Link href="/" className="flex flex-col items-center">
                  <span className="font-cinzel text-xl font-bold text-red-800">
                    Active Taekwondo Academy
                  </span>
                </Link>
              </div>

              {/* Right Nav Items */}
              <div className="flex space-x-8">
                <Link 
                  href="/schedule" 
                  className="text-gray-800 hover:text-red-800 font-medium transition-colors">
                  Schedule
                </Link>
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="text-gray-800 hover:text-red-800 font-medium transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Mobile menu button with animation */}
            <div className="md:hidden flex justify-between items-center p-10">
              <div className="flex-shrink-0">
                <Link href="/" className="flex flex-col items-center">
                  <span className="font-cinzel text-xl font-bold text-red-800">
                    Active Taekwondo Academy
                  </span>
                </Link>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative w-10 h-10 rounded-md text-gray-800 hover:text-red-800 
                  focus:outline-none transition-colors duration-200"
                aria-label="Toggle menu"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100 text-black'
                  }`}>
                    <Menu className="h-6 w-6 " />
                  </div>
                  <div className={`absolute transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0 text-black'
                  }`}>
                    <X className="h-6 w-6 text-black" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu with smooth animation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
             backdrop-blur-sm
            ${isMobileMenuOpen ? 'max-h-64 border-t border-red-400' : 'max-h-0'}`}
        >
          <div className={`px-2 py-3 transform transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
          }`}>
            {/* Menu Items */}
            <div className="space-y-1">
              <Link 
                href="/About"
                className="block px-3 py-2 text-base font-medium text-gray-800 
                  hover:text-red-800 hover:bg-white/80 rounded-md
                  transition-all duration-200 backdrop-blur-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/programs"
                className="block px-3 py-2 text-base font-medium text-gray-800 
                  hover:text-red-800 hover:bg-white/80 rounded-md
                  transition-all duration-200 backdrop-blur-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Programs
              </Link>
              <Link 
                href="/schedule"
                className="block px-3 py-2 text-base font-medium text-gray-800 
                  hover:text-red-800 hover:bg-white/80 rounded-md
                  transition-all duration-200 backdrop-blur-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Schedule
              </Link>
              <button 
                onClick={() => {
                  setIsContactModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium 
                  text-gray-800 hover:text-red-800 hover:bg-white/80 rounded-md
                  transition-all duration-200 backdrop-blur-sm"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
}
