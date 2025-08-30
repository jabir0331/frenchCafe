import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cafe-cream via-white to-cafe-cream py-24 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-cafe-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cafe-wine/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-6xl font-bold text-cafe-navy mb-8 relative">
            Contact & Location
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-cafe-gold to-cafe-wine rounded-full"></div>
          </h1>
          <p className="font-sans text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Come visit us in our charming corner of Paris
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-10">
            <div className="bg-white rounded-3xl shadow-2xl p-10 border border-cafe-cream/50">
              <h2 className="font-serif text-3xl font-bold text-cafe-navy mb-8 relative">
                Contact Information
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-cafe-gold to-cafe-wine rounded-full"></div>
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="bg-gradient-to-br from-cafe-cream to-cafe-gold/20 p-4 rounded-2xl group-hover:from-cafe-gold/30 group-hover:to-cafe-wine/20 transition-all duration-300 shadow-lg">
                      <p>Saturday - Sunday: 8:00 AM - 7:00 PM</p>
                    <MapPin className="h-6 w-6 text-cafe-wine" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-cafe-navy mb-1">Adresse</h3>
                    <p className="font-sans text-gray-600">
                      123 Rue de la Paix<br />
                      75001 Paris, France
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-cafe-cream p-3 rounded-full">
                    <Phone className="h-6 w-6 text-cafe-wine" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-cafe-navy mb-1">Téléphone</h3>
                    <p className="font-sans text-gray-600">+33 1 42 86 87 88</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-cafe-cream p-3 rounded-full">
                    <Mail className="h-6 w-6 text-cafe-wine" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-cafe-navy mb-1">Email</h3>
                    <p className="font-sans text-gray-600">hello@cafelumiere.fr</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-cafe-cream p-3 rounded-full">
                    <Clock className="h-6 w-6 text-cafe-wine" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-cafe-navy mb-1">Horaires d'Ouverture</h3>
                    <div className="font-sans text-gray-600 space-y-1">
                      <p>Lundi - Vendredi: 7h00 - 18h00</p>
                      <p>Samedi - Dimanche: 8h00 - 19h00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="font-serif text-2xl font-bold text-cafe-navy mb-6">
                Follow Us
              </h2>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-cafe-cream hover:bg-cafe-gold/20 p-4 rounded-full transition-colors duration-300 group"
                >
                  <Instagram className="h-6 w-6 text-cafe-navy group-hover:text-cafe-gold" />
                </a>
                <a 
                  href="#" 
                  className="bg-cafe-cream hover:bg-cafe-gold/20 p-4 rounded-full transition-colors duration-300 group"
                >
                  <Facebook className="h-6 w-6 text-cafe-navy group-hover:text-cafe-gold" />
                </a>
                <a 
                  href="#" 
                  className="bg-cafe-cream hover:bg-cafe-gold/20 p-4 rounded-full transition-colors duration-300 group"
                >
                  <Twitter className="h-6 w-6 text-cafe-navy group-hover:text-cafe-gold" />
                </a>
              </div>
              <p className="font-sans text-gray-600 mt-4">
                Discover our latest creations and daily café atmosphere
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-cafe-navy p-6 text-center">
                <h2 className="font-serif text-2xl font-bold text-cafe-cream">
                  Our Location
                </h2>
              </div>
              <div className="p-2">
                <div className="bg-gray-200 h-80 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-12 w-12 mx-auto mb-4" />
                    <p className="font-sans">Carte Google Maps</p>
                    <p className="font-sans text-sm">123 Lumière Street, Downtown District</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Transportation */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="font-serif text-2xl font-bold text-cafe-navy mb-6">
                How to Find Us
              </h2>
              <div className="space-y-4 font-sans text-gray-600">
                <div>
                  <span className="font-semibold text-cafe-navy">Metro:</span> Central Station (Lines 1, 2, 3)
                </div>
                <div>
                  <span className="font-semibold text-cafe-navy">Bus:</span> Routes 15, 22, 35, 48
                </div>
                <div>
                  <span className="font-semibold text-cafe-navy">Parking:</span> City Center Garage (5 min walk)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;