import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Coffee, Sparkles } from 'lucide-react';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Add this hook
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Remove the activeItem state - we'll use location.pathname instead

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reservations', path: '/reservation' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
          ? 'bg-cafe-navy/95 backdrop-blur-md shadow-4xl'
          : 'bg-gradient-to-r from-cafe-navy/80 via-cafe-navy/70 to-cafe-navy/60 backdrop-blur-sm'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center group">
            <div className="flex items-center space-x-3 cursor-pointer transform hover:scale-105 transition-all duration-300">
              <div className="relative">
                <Coffee className="h-10 w-10 text-cafe-gold-light group-hover:rotate-12 transition-transform duration-300" />
                <Sparkles className="h-4 w-4 text-cafe-gold absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-cafe-cream group-hover:text-cafe-gold-light transition-colors duration-300">
                  Cafe Lumière
                </span>
                <span className="font-sans text-xs text-cafe-gold/80 tracking-widest uppercase">
                  Premium Coffee Experience
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`font-sans text-sm font-medium transition-all duration-300 hover:text-cafe-gold-light relative ${location.pathname === item.path
                    ? 'text-cafe-gold-light'
                    : 'text-cafe-cream'
                  }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cafe-gold-light"></span>
                )}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-3 text-cafe-cream hover:text-cafe-gold-light transition-all duration-300 hover:bg-cafe-gold/10 rounded-lg"
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
                <X className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="px-2 pt-4 pb-6 space-y-2 bg-gradient-to-b from-cafe-navy/90 to-cafe-navy/95 backdrop-blur-md rounded-b-2xl mt-2">
            {navItems.map((item, index) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`block w-full text-left px-6 py-4 text-base font-medium transition-all duration-300 rounded-xl transform hover:scale-105 hover:translate-x-2 ${location.pathname === item.path
                    ? 'text-cafe-navy bg-gradient-to-r from-cafe-gold-light to-cafe-gold shadow-lg'
                    : 'text-cafe-cream hover:text-cafe-gold-light hover:bg-cafe-gold/20'
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-3">
                  <span className={`w-2 h-2 rounded-full transition-all duration-300 ${location.pathname === item.path
                      ? 'bg-cafe-navy animate-pulse'
                      : 'bg-cafe-gold/40'
                    }`}></span>
                  <span>{item.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Animated bottom border */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cafe-gold via-cafe-gold-light to-cafe-wine opacity-80"></div>
      </div>

      {/* Coffee bean decorative elements */}
      <div className="absolute top-2 left-1/4 w-1 h-1 bg-cafe-gold/30 rounded-full animate-pulse"></div>
      <div className="absolute top-4 right-1/3 w-1 h-1 bg-cafe-wine/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-2 left-2/3 w-1 h-1 bg-cafe-gold-light/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
    </nav>
  );
};

export default Navigation;