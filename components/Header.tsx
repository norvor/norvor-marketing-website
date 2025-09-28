
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'login' | 'signup') => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
           <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
           <button onClick={() => onNavigate('home')} className="text-2xl font-bold text-white focus:outline-none">Norvorx</button>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#platform" className="text-gray-300 hover:text-indigo-400 transition-colors">Platform</a>
          <a href="#testimonials" className="text-gray-300 hover:text-indigo-400 transition-colors">Testimonials</a>
          <a href="#pricing" className="text-gray-300 hover:text-indigo-400 transition-colors">Pricing</a>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <button onClick={() => onNavigate('login')} className="text-gray-300 hover:text-indigo-400 font-bold py-2 px-4 rounded-lg transition-colors">
            Login
          </button>
          <button onClick={() => onNavigate('signup')} className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
