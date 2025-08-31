import { Coffee, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cafe-navy text-cafe-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-cafe-gold" />
              <span className="font-serif text-2xl font-bold">Café Lumière</span>
            </div>
            <p className="text-cafe-cream/80 font-sans leading-relaxed mb-6">
              Experience the authentic French cafe culture in the heart of Colombo. 
              Savor our artisanal specialties in a warm and welcoming atmosphere.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/lumierecafe_broadway/?hl=en" className="text-cafe-cream hover:text-cafe-gold transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/p/Lumiere-Cafe-100087144402162/" className="text-cafe-cream hover:text-cafe-gold transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://x.com/lumierechelt" className="text-cafe-cream hover:text-cafe-gold transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-cafe-gold">Quick Links</h3>
            <ul className="space-y-2 font-sans">
              <li><a href="/" className="text-cafe-cream/80 hover:text-cafe-gold transition-colors duration-300">Home</a></li>
              <li><a href="/menu" className="text-cafe-cream/80 hover:text-cafe-gold transition-colors duration-300">Menu</a></li>
              <li><a href="/about" className="text-cafe-cream/80 hover:text-cafe-gold transition-colors duration-300">About</a></li>
              <li><a href="/gallery" className="text-cafe-cream/80 hover:text-cafe-gold transition-colors duration-300">Gallery</a></li>
              <li><a href="/reservation" className="text-cafe-cream/80 hover:text-cafe-gold transition-colors duration-300">Reservations</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-cafe-gold">Contact Us</h3>
            <div className="space-y-5 font-sans">
              <div className="flex items-center space-x-4">
                  <MapPin size ={28}/>
                  <span className="text-cafe-cream/80">
                    No. 12, Alfred House Avenue,
                    Colombo 03
                  </span>
                
              </div>
              <div className="flex items-center space-x-4">
                  <Phone size ={20}/>
                  <span className="text-cafe-cream/80">+94 75 746 42 09</span>
                
              </div>
              <div className="flex items-center space-x-4">
                  <Mail size ={20}/>
                  <span className="text-cafe-cream/80">info@cafelumiere.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cafe-gold/20 mt-8 pt-8 text-center">
          <p className="text-cafe-cream/60 font-sans">
            © 2025 Cafe Lumière. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;