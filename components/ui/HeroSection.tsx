'use client';
import { useState } from 'react';
import LoadingScreen from './LoadingScreen';
import ContactModal from './ContactModal';


export default function HeroSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <LoadingScreen />
      <section className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between py-20">
            {/* Left Side - Coach Info */}
            <div className="md:w-1/2 space-y-6">
              <h1 className="font-cinzel text-5xl font-bold text-gray-900 leading-tight">
                Master the Art of
                <span className="block text-red-800">Self-Defense</span>
              </h1>
              <h2 className="text-3xl font-semibold text-gray-800">
                with Chandra Kumar Sahu
              </h2>
              <p className="text-xl text-gray-600 max-w-lg">
                Transform your life through discipline, strength, and dedication. Join our academy
                to learn from a master with over 15 years of experience in martial arts.
              </p>
              <button onClick={() => setIsContactModalOpen(true)} className="bg-red-800 text-white px-8 py-4 rounded-lg text-lg font-semibold 
                             hover:bg-red-900 transition-colors duration-300">
                Start Your Journey
              </button>
            </div>

            {/* Right Side - Kicking Image */}
            <div className="md:w-1/2 mt-10 md:mt-0">
              <div className="relative h-[600px] w-full">
                {/* image of chandra sahu here */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  )
}