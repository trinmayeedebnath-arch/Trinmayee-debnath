import React, { useState, useEffect } from 'react';
import { Triangle, Menu, X } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Insights', href: '#insights' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-brand-bg/90 backdrop-blur-md border-brand-border py-4' : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="relative flex items-center justify-center w-8 h-8">
            <Triangle className="w-6 h-6 text-white fill-white transition-transform group-hover:rotate-180 duration-500" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">True Aves</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Button variant="primary">Start Project</Button>
          </div>
          
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-bg border-b border-brand-border p-6 flex flex-col gap-4 shadow-2xl animate-fade-in-up">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-medium text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-brand-border">
            <Button variant="primary" className="w-full justify-center">Start Project</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;