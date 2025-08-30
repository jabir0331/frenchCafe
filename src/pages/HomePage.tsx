import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Heart, Coffee, Award, Users } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1920")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cafe-navy/70 via-cafe-navy/50 to-cafe-wine/60"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-cafe-gold/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-cafe-wine/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="mb-8 animate-slide-up">
            <Coffee className="h-16 w-16 text-cafe-gold mx-auto mb-6" />
          </div>
          <h1 className="font-serif text-6xl md:text-8xl font-bold mb-8 animate-slide-up bg-gradient-to-r from-white via-cafe-cream to-white bg-clip-text text-transparent leading-tight">
            Café Lumière
          </h1>
          <p className="font-sans text-2xl md:text-3xl mb-4 text-cafe-cream/95 max-w-3xl mx-auto leading-relaxed font-light">
            Authentic French Café Experience
          </p>
          <p className="font-sans text-lg md:text-xl mb-12 text-cafe-cream/80 max-w-2xl mx-auto leading-relaxed">
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
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-cafe-gold/20 to-cafe-wine/20 px-6 py-3 rounded-full mb-8 border border-cafe-gold/30">
              <Award className="h-5 w-5 text-cafe-wine" />
              <span className="font-sans font-semibold text-cafe-navy">Premium Experience</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-cafe-navy mb-6 leading-tight">
              Why Choose Café Lumière?
            </h2>
            <p className="font-sans text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              An authentic French experience with premium quality ingredients, artisanal craftsmanship, 
              and an atmosphere that transports you to the heart of Paris
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-cafe-gold via-cafe-wine to-cafe-gold mx-auto mt-8 rounded-full shadow-lg"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group relative">
              <div className="relative mb-8">
                <div className="bg-gradient-to-br from-cafe-cream via-cafe-gold/30 to-cafe-wine/20 p-10 rounded-3xl w-28 h-28 mx-auto flex items-center justify-center group-hover:from-cafe-gold/40 group-hover:via-cafe-wine/30 group-hover:to-cafe-gold/20 transition-all duration-700 shadow-2xl group-hover:shadow-3xl transform group-hover:scale-125 group-hover:rotate-6 border-4 border-white/50">
                  <Star className="h-12 w-12 text-cafe-wine group-hover:text-cafe-gold transition-colors duration-500" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-cafe-gold/20 to-cafe-wine/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              <h3 className="font-serif text-3xl font-bold text-cafe-navy mb-6 group-hover:text-cafe-wine transition-colors duration-500">Premium Quality</h3>
              <p className="font-sans text-gray-600 leading-relaxed text-lg">Artisanal coffees and fresh pastries prepared every morning with the finest imported ingredients and traditional French techniques</p>
              <div className="absolute inset-0 bg-gradient-to-t from-cafe-cream/30 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 shadow-2xl"></div>
            </div>

            <div className="text-center group relative">
              <div className="relative mb-8">
                <div className="bg-gradient-to-br from-cafe-cream via-cafe-wine/30 to-cafe-gold/20 p-10 rounded-3xl w-28 h-28 mx-auto flex items-center justify-center group-hover:from-cafe-wine/40 group-hover:via-cafe-gold/30 group-hover:to-cafe-wine/20 transition-all duration-700 shadow-2xl group-hover:shadow-3xl transform group-hover:scale-125 group-hover:-rotate-6 border-4 border-white/50">
                  <Clock className="h-12 w-12 text-cafe-gold group-hover:text-cafe-wine transition-colors duration-500" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-cafe-wine/20 to-cafe-gold/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              <h3 className="font-serif text-3xl font-bold text-cafe-navy mb-6 group-hover:text-cafe-wine transition-colors duration-500">Swift Service</h3>
              <p className="font-sans text-gray-600 leading-relaxed text-lg">Efficient service without compromising traditional French quality and attention to detail that makes every visit memorable</p>
              <div className="absolute inset-0 bg-gradient-to-t from-cafe-cream/30 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 shadow-2xl"></div>
            </div>

            <div className="text-center group relative">
              <div className="relative mb-8">
                <div className="bg-gradient-to-br from-cafe-cream via-cafe-gold/30 to-cafe-navy/20 p-10 rounded-3xl w-28 h-28 mx-auto flex items-center justify-center group-hover:from-cafe-navy/40 group-hover:via-cafe-wine/30 group-hover:to-cafe-gold/20 transition-all duration-700 shadow-2xl group-hover:shadow-3xl transform group-hover:scale-125 group-hover:rotate-6 border-4 border-white/50">
                  <Heart className="h-12 w-12 text-cafe-navy group-hover:text-cafe-gold transition-colors duration-500" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-cafe-navy/20 to-cafe-wine/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              <h3 className="font-serif text-3xl font-bold text-cafe-navy mb-6 group-hover:text-cafe-wine transition-colors duration-500">Warm Atmosphere</h3>
              <p className="font-sans text-gray-600 leading-relaxed text-lg">An authentic Parisian setting perfect for all your precious moments, business meetings, and intimate gatherings</p>
              <div className="absolute inset-0 bg-gradient-to-t from-cafe-cream/30 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 shadow-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Items Preview */}
      <section className="py-32 bg-gradient-to-br from-cafe-navy/5 via-white to-cafe-wine/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cafe-cream/20 via-transparent to-cafe-cream/20"></div>
        
        {/* Floating decorative coffee beans */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-cafe-wine rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-40 right-40 w-3 h-3 bg-cafe-gold rounded-full opacity-30 animate-bounce delay-500"></div>
        <div className="absolute bottom-32 left-32 w-5 h-5 bg-cafe-navy rounded-full opacity-15 animate-bounce delay-1000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-cafe-wine/20 to-cafe-gold/20 px-6 py-3 rounded-full mb-8 border border-cafe-wine/30">
              <Coffee className="h-5 w-5 text-cafe-wine" />
              <span className="font-sans font-semibold text-cafe-navy">Signature Collection</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-cafe-navy mb-6 leading-tight">
              Our Signature Specialties
            </h2>
            <p className="font-sans text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our most beloved creations, crafted with passion and French tradition, 
              each telling its own delicious story
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-cafe-gold via-cafe-wine to-cafe-gold mx-auto mt-8 rounded-full shadow-lg"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 border-4 border-white/50">
              <div className="absolute inset-0 bg-gradient-to-br from-cafe-gold/20 to-cafe-wine/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img
                src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Fresh Croissants"
                className="w-full h-80 object-cover group-hover:scale-125 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cafe-navy/90 via-cafe-navy/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-20">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="font-serif text-2xl font-bold mb-3 text-cafe-gold">Artisan Croissants</h3>
                  <p className="font-sans text-sm opacity-95 mb-4 leading-relaxed">Buttery, flaky perfection baked fresh daily using traditional French techniques and premium European butter</p>
                  <div className="flex items-center justify-between">
                    <div className="inline-block bg-gradient-to-r from-cafe-gold to-cafe-gold/80 px-4 py-2 rounded-full text-sm font-bold text-cafe-navy shadow-lg">
                      From $2.80
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-cafe-gold fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 hover:-rotate-1 border-4 border-white/50">
              <div className="absolute inset-0 bg-gradient-to-br from-cafe-wine/20 to-cafe-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img
                src="https://images.pexels.com/photos/1833586/pexels-photo-1833586.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Signature Latte"
                className="w-full h-80 object-cover group-hover:scale-125 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cafe-navy/90 via-cafe-navy/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-20">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="font-serif text-2xl font-bold mb-3 text-cafe-gold">Signature Latte</h3>
                  <p className="font-sans text-sm opacity-95 mb-4 leading-relaxed">Perfect espresso blend with silky steamed milk, topped with our signature latte art by master baristas</p>
                  <div className="flex items-center justify-between">
                    <div className="inline-block bg-gradient-to-r from-cafe-gold to-cafe-gold/80 px-4 py-2 rounded-full text-sm font-bold text-cafe-navy shadow-lg">
                      From $4.20
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-cafe-gold fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 border-4 border-white/50">
              <div className="absolute inset-0 bg-gradient-to-br from-cafe-navy/20 to-cafe-wine/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img
                src="https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="French Pastries"
                className="w-full h-80 object-cover group-hover:scale-125 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cafe-navy/90 via-cafe-navy/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-20">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="font-serif text-2xl font-bold mb-3 text-cafe-gold">French Pastries</h3>
                  <p className="font-sans text-sm opacity-95 mb-4 leading-relaxed">Delicate éclairs and traditional desserts crafted by our master pastry chef using authentic French recipes</p>
                  <div className="flex items-center justify-between">
                    <div className="inline-block bg-gradient-to-r from-cafe-gold to-cafe-gold/80 px-4 py-2 rounded-full text-sm font-bold text-cafe-navy shadow-lg">
                      From $4.80
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-cafe-gold fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cafe-cream/30 via-transparent to-cafe-wine/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl font-bold text-cafe-navy mb-6">
              What Our Guests Say
            </h2>
            <p className="font-sans text-xl text-gray-600 max-w-2xl mx-auto">
              Authentic experiences shared by our valued customers
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cafe-gold to-cafe-wine mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-cafe-cream/30 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-cafe-gold/20">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-cafe-gold fill-current" />
                ))}
              </div>
              <p className="font-sans text-gray-700 italic mb-6 text-lg leading-relaxed">
                "The most authentic French café experience outside of Paris. The croissants are absolutely divine!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cafe-gold to-cafe-wine rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <div>
                  <p className="font-sans font-semibold text-cafe-navy">Sarah Johnson</p>
                  <p className="font-sans text-sm text-gray-500">Regular Customer</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-cafe-cream/30 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-cafe-wine/20">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-cafe-gold fill-current" />
                ))}
              </div>
              <p className="font-sans text-gray-700 italic mb-6 text-lg leading-relaxed">
                "Perfect atmosphere for business meetings. The coffee is exceptional and the service is impeccable."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cafe-wine to-cafe-navy rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <div>
                  <p className="font-sans font-semibold text-cafe-navy">Michael Chen</p>
                  <p className="font-sans text-sm text-gray-500">Business Executive</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-cafe-cream/30 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-cafe-navy/20">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-cafe-gold fill-current" />
                ))}
              </div>
              <p className="font-sans text-gray-700 italic mb-6 text-lg leading-relaxed">
                "A hidden gem! The pastries are works of art and the ambiance transports you straight to Paris."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cafe-navy to-cafe-gold rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">E</span>
                </div>
                <div>
                  <p className="font-sans font-semibold text-cafe-navy">Emma Rodriguez</p>
                  <p className="font-sans text-sm text-gray-500">Food Blogger</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-gradient-to-br from-cafe-navy via-cafe-navy/95 to-cafe-wine/90 relative overflow-hidden">
        {/* Enhanced Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 border-2 border-cafe-gold rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 border-2 border-cafe-wine rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-cafe-gold/50 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-cafe-gold/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-cafe-wine/20 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Users className="h-5 w-5 text-cafe-gold" />
              <span className="font-sans font-semibold text-cafe-cream">Join Our Community</span>
            </div>
          </div>
          <h2 className="font-serif text-6xl md:text-7xl font-bold text-cafe-cream mb-10 leading-tight">
            Reserve Your Table
          </h2>
          <p className="font-sans text-2xl text-cafe-cream/95 mb-16 leading-relaxed max-w-4xl mx-auto font-light">
            Secure your spot in our authentic French café. Perfect for a peaceful breakfast, 
            productive business lunch, or romantic evening with someone special.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link
              to="/reservation"
              className="group inline-flex items-center space-x-4 bg-gradient-to-r from-cafe-wine via-cafe-wine to-cafe-wine/90 hover:from-cafe-wine/90 hover:via-cafe-wine hover:to-cafe-wine text-white px-16 py-6 rounded-full font-sans font-bold text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-3xl shadow-2xl border-2 border-white/20 hover:border-cafe-gold/50"
            >
              <span>Make a Reservation</span>
              <ArrowRight className="h-7 w-7 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            <Link
              to="/menu"
              className="group inline-flex items-center space-x-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-16 py-6 rounded-full font-sans font-bold text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-3xl shadow-2xl border-2 border-white/30 hover:border-cafe-gold/70"
            >
              <span>View Full Menu</span>
              <Coffee className="h-7 w-7 group-hover:rotate-12 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;