import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { ArrowRight, Star, Clock, Heart, Users } from 'lucide-react';

const HomePage = () => {

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Slow down to 50% speed
    }
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            // backgroundImage: 'url("https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1920")',
            backgroundImage: 'url("/images/heroVideo.mp4")',
          }}
        >
          
          <div className="absolute inset-0 bg-black/25"></div>
        </div> */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-cafe-gold/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-cafe-wine/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">

          <h1 className="font-serif md:text-8xl font-bold mt-20 mb-5 animate-slide-up bg-gradient-to-r from-white via-cafe-cream to-white bg-clip-text text-transparent leading-tight">
            Cafe Lumière
          </h1>
          <p className="font-sans text-2xl md:text-3xl mb-4 text-cafe-cream/95 max-w-3xl mx-auto leading-relaxed font-light">
            Authentic French Cafe Experience
          </p>
          <p className="font-sans text-lg md:text-xl mb-12 text-cafe-cream/80 max-w-4xl mx-auto leading-relaxed">
            Where every cup tells a story and every moment becomes a cherished memory
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/menu"
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-cafe-wine via-cafe-wine to-cafe-wine/90 hover:from-cafe-wine/90 hover:via-cafe-wine hover:to-cafe-wine text-white px-12 py-5 rounded-full font-sans font-semibold text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl shadow-xl border-2 border-white/20 hover:border-cafe-gold/50"
            >
              <span>Explore Our Menu</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/reservation"
              className="group inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-12 py-5 rounded-full font-sans font-semibold text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl shadow-xl border-2 border-white/30 hover:border-cafe-gold/70"
            >
              <span>Reserve Table</span>
              <Users className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gradient-to-br from-white via-cafe-cream/30 to-white relative overflow-hidden">
        {/* Enhanced Decorative Elements */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-cafe-gold/20 to-cafe-wine/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-cafe-wine/15 to-cafe-gold/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-cafe-navy/5 rounded-full blur-2xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-20">

            <h2 className="font-serif md:text-4xl font-bold text-cafe-navy mb-2 leading-tight">
              Why Choose Cafe Lumière?
            </h2>
            <p className="font-sans text-xl text-gray-600 max-w-5xl leading-relaxed">
              An authentic French experience that transports you to the heart of Paris
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group relative border border-cafe-gold/10 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-500">
              <div className="relative mb-8">
                <div className="bg-gradient-to-br from-cafe-cream via-cafe-gold/30 to-cafe-wine/20 p-10 rounded-3xl w-28 h-28 mx-auto flex items-center justify-center group-hover:from-cafe-gold/40 group-hover:via-cafe-wine/30 group-hover:to-cafe-gold/20 transition-all duration-700 shadow-2xl group-hover:shadow-3xl transform group-hover:scale-125 group-hover:rotate-6 border-4 border-white/50">
                  <Star className="h-12 w-12 text-cafe-wine group-hover:text-cafe-gold transition-colors duration-500" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-cafe-gold/20 to-cafe-wine/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-cafe-navy mb-6 group-hover:text-cafe-wine transition-colors duration-500">Premium Quality</h3>
              <p className="font-sans text-gray-600 leading-relaxed text-md">Artisanal coffees and fresh pastries prepared every morning with the traditional French techniques</p>
              <div className="absolute inset-0 bg-gradient-to-t from-cafe-cream/30 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 shadow-2xl"></div>
            </div>

            <div className="text-center group relative border border-cafe-wine/10 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-500">
              <div className="relative mb-8">
                <div className="bg-gradient-to-br from-cafe-cream via-cafe-wine/30 to-cafe-gold/20 p-10 rounded-3xl w-28 h-28 mx-auto flex items-center justify-center group-hover:from-cafe-wine/40 group-hover:via-cafe-gold/30 group-hover:to-cafe-wine/20 transition-all duration-700 shadow-2xl group-hover:shadow-3xl transform group-hover:scale-125 group-hover:-rotate-6 border-4 border-white/50">
                  <Clock className="h-12 w-12 text-cafe-gold group-hover:text-cafe-wine transition-colors duration-500" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-cafe-wine/20 to-cafe-gold/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-cafe-navy mb-6 group-hover:text-cafe-wine transition-colors duration-500">Swift Service</h3>
              <p className="font-sans text-gray-600 leading-relaxed text-md">Efficient service without compromising quality and attention to detail that makes every visit memorable</p>
              <div className="absolute inset-0 bg-gradient-to-t from-cafe-cream/30 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 shadow-2xl"></div>
            </div>

            <div className="text-center group relative border border-cafe-navy/10 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-500">
              <div className="relative mb-8">
                <div className="bg-gradient-to-br from-cafe-cream via-cafe-gold/30 to-cafe-navy/20 p-10 rounded-3xl w-28 h-28 mx-auto flex items-center justify-center group-hover:from-cafe-navy/40 group-hover:via-cafe-wine/30 group-hover:to-cafe-gold/20 transition-all duration-700 shadow-2xl group-hover:shadow-3xl transform group-hover:scale-125 group-hover:rotate-6 border-4 border-white/50">
                  <Heart className="h-12 w-12 text-cafe-navy group-hover:text-cafe-gold transition-colors duration-500" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-cafe-navy/20 to-cafe-wine/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-cafe-navy mb-6 group-hover:text-cafe-wine transition-colors duration-500">Warm Atmosphere</h3>
              <p className="font-sans text-gray-600 leading-relaxed text-md">An authentic Parisian setting perfect for all your precious moments, business meetings, and intimate gatherings</p>
              <div className="absolute inset-0 bg-gradient-to-t from-cafe-cream/30 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 shadow-2xl"></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;