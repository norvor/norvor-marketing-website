import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page: 'home' | 'login' | 'signup') => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  return (
    <div className="bg-slate-900 text-gray-100 min-h-screen font-sans">
      <Header onNavigate={navigateTo} />
      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <Features />
            <Testimonials />
            <Pricing />
            <CTA />
          </>
        )}
        {currentPage === 'login' && <LoginPage onNavigate={navigateTo} />}
        {currentPage === 'signup' && <SignUpPage onNavigate={navigateTo} />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
