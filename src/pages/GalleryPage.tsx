import { useState } from 'react';
import { X, Camera} from 'lucide-react';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      url: 'images/gallery/interior.jpg',
      alt: 'Warm café interior with vintage charm',
      category: 'Interior'
    },
    {
      url: 'images/gallery/exterior.jpg',
      alt: 'Charming outdoor café terrace',
      category: 'Exterior'
    },
    {
      url: 'images/gallery/kitchen.jpg',
      alt: 'Freshly baked golden croissants',
      category: 'Behind the Scenes'
    },
    {
      url: 'images/gallery/seasonalDeco.jpg',
      alt: 'Festive seasonal decorations with cozy lights',
      category: 'Seasonal Specials'
    },
    {
      url: 'images/gallery/eventsAndGathering.jpg',
      alt: 'Guests enjoying a lively café gathering',
      category: 'Events & Gatherings'
    },
    {
      url: 'images/gallery/happyCustomer.jpg',
      alt: 'Happy customer savoring a coffee moment',
      category: 'Customer Moments'
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
        <div className="text-left mt-10 mb-10">

          <h1 className="font-serif text-4xl md:text-4xl font-bold text-cafe-navy mb-2 relative leading-tight">
            Gallery
          </h1>
          <p className="font-sans text-xl text-gray-600 max-w-6xl leading-relaxed font-light">
            Immerse yourself in the unique atmosphere of Café Lumière through our curated collection
            of moments
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

      </div>
    </div>
  );
};

export default GalleryPage;