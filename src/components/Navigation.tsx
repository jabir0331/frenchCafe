import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Coffee } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reservations', path: '/reservation' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-cafe-navy shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 text-cafe-cream hover:text-cafe-gold-light transition-colors duration-300">
              <Coffee className="h-8 w-8" />
              <span className="font-serif text-xl font-bold">Café Lumière</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-sans text-sm font-medium transition-all duration-300 hover:text-cafe-gold-light relative ${
                  location.pathname === item.path 
                    ? 'text-cafe-gold-light' 
                    : 'text-cafe-cream'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cafe-gold-light"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-cafe-cream hover:text-cafe-gold-light transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-cafe-navy border-t border-cafe-gold/20 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-300 hover:text-cafe-gold-light ${
                    location.pathname === item.path 
                      ? 'text-cafe-gold-light bg-cafe-gold/10' 
                      : 'text-cafe-cream'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;