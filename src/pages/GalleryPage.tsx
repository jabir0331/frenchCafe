import React, { useState } from 'react';
import { X, Camera, Heart, Star, Award } from 'lucide-react';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      url: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Warm café interior with vintage charm',
      category: 'Interior'
    },
    {
      url: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Artisanal coffee and fresh pastries',
      category: 'Specialties'
    },
    {
      url: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Freshly baked golden croissants',
      category: 'Pastries'
    },
    {
      url: 'https://images.pexels.com/photos/1833586/pexels-photo-1833586.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Perfect latte art masterpiece',
      category: 'Coffee'
    },
    {
      url: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Charming outdoor café terrace',
      category: 'Ambiance'
    },
    {
      url: 'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Decadent chocolate éclair',
      category: 'Desserts'
    },
    {
      url: 'https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Authentic Parisian café atmosphere',
      category: 'Ambiance'
    },
    {
      url: 'https://images.pexels.com/photos/1788414/pexels-photo-1788414.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Artisanal pastry display',
      category: 'Pastries'
    },
    {
      url: 'https://images.pexels.com/photos/1415555/pexels-photo-1415555.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Intimate dining moments',
      category: 'Experience'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cafe-cream via-white to-cafe-cream/50 py-24 relative overflow-hidden">
      {/* Enhanced Decorative Background */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-cafe-gold/10 to-cafe-wine/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-br from-cafe-wine/8 to-cafe-navy/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-cafe-gold/5 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-cafe-wine/20 to-cafe-gold/20 px-8 py-4 rounded-full mb-8 border border-cafe-wine/30 shadow-lg">
            <Camera className="h-6 w-6 text-cafe-wine" />
            <span className="font-sans font-bold text-cafe-navy text-lg">Visual Journey</span>
          </div>
          <h1 className="font-serif text-6xl md:text-7xl font-bold text-cafe-navy mb-8 relative leading-tight">
            Gallery
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-2 bg-gradient-to-r from-cafe-gold via-cafe-wine to-cafe-gold rounded-full shadow-lg"></div>
          </h1>
          <p className="font-sans text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Immerse yourself in the unique atmosphere of Café Lumière through our curated collection 
            of moments, flavors, and experiences
          </p>
        </div>

        {/* Enhanced Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group cursor-pointer relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-6 hover:rotate-1 border-4 border-white/50"
              onClick={() => setSelectedImage(image.url)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-80 object-cover group-hover:scale-125 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cafe-navy/80 via-cafe-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-cafe-gold/30">
                  <span className="font-sans text-sm font-bold text-cafe-navy">{image.category}</span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-8 group-hover:translate-y-0">
                  <div className="bg-white/95 backdrop-blur-md px-8 py-4 rounded-2xl shadow-2xl border-2 border-cafe-gold/30 text-center">
                    <Camera className="h-8 w-8 text-cafe-wine mx-auto mb-2" />
                    <span className="font-sans text-cafe-navy font-bold text-lg block">View Larger</span>
                    <span className="font-sans text-cafe-navy/70 text-sm">{image.alt}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="relative max-w-6xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-20 right-0 text-white hover:text-cafe-gold transition-colors duration-300 bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/20 hover:border-cafe-gold/50 shadow-xl"
              >
                <X className="h-8 w-8" />
              </button>
              <div className="relative">
                <img
                  src={selectedImage}
                  alt="Enlarged gallery image"
                  className="max-w-full max-h-[85vh] object-contain rounded-3xl shadow-3xl border-4 border-white/20"
                />
                <div className="absolute inset-0 rounded-3xl shadow-inner"></div>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Description Section */}
        <div className="mt-32 bg-gradient-to-br from-white via-cafe-cream/30 to-white rounded-3xl shadow-3xl p-16 md:p-20 text-center border-2 border-cafe-cream/50 hover:shadow-4xl transition-shadow duration-700 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-cafe-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-cafe-wine/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-cafe-navy/20 to-cafe-wine/20 px-8 py-4 rounded-full mb-8 border border-cafe-navy/30 shadow-lg">
              <Heart className="h-6 w-6 text-cafe-wine" />
              <span className="font-sans font-bold text-cafe-navy text-lg">The French Art of Living</span>
            </div>
            <h2 className="font-serif text-5xl font-bold text-cafe-navy mb-10 relative">
              Experience Authentic Paris
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-cafe-gold via-cafe-wine to-cafe-gold rounded-full shadow-lg"></div>
            </h2>
            <p className="font-sans text-2xl text-gray-700 leading-relaxed max-w-5xl mx-auto font-light">
              Every corner of our café tells a story. From walls adorned with local art to aged wooden tables, 
              every detail has been thoughtfully designed to create an authentically Parisian atmosphere. 
              Our pastries are displayed like works of art, and every cup of coffee is served 
              with the passion that characterizes French café culture.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="bg-gradient-to-br from-cafe-gold/30 to-cafe-wine/20 p-6 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-cafe-navy mb-2">Artistic Ambiance</h3>
                <p className="font-sans text-gray-600">Curated local artwork and vintage décor</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-cafe-wine/30 to-cafe-gold/20 p-6 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🥐</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-cafe-navy mb-2">Artisan Pastries</h3>
                <p className="font-sans text-gray-600">Handcrafted daily by master bakers</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-cafe-navy/30 to-cafe-wine/20 p-6 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <span className="text-2xl">☕</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-cafe-navy mb-2">Perfect Coffee</h3>
                <p className="font-sans text-gray-600">Expertly roasted beans from around the world</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;