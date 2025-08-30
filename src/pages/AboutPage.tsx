import React from 'react';
import { Award, Heart, Users, Coffee, Star, Crown } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cafe-cream via-white to-cafe-cream py-24 relative overflow-hidden">
      {/* Enhanced Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cafe-gold/10 to-cafe-wine/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-cafe-wine/8 to-cafe-navy/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cafe-gold/5 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-cafe-navy/20 to-cafe-wine/20 px-8 py-4 rounded-full mb-8 border border-cafe-navy/30 shadow-lg">
            <Crown className="h-6 w-6 text-cafe-wine" />
            <span className="font-sans font-bold text-cafe-navy text-lg">Our Heritage</span>
          </div>
          <h1 className="font-serif text-6xl md:text-7xl font-bold text-cafe-navy mb-8 relative leading-tight">
            About Café Lumière
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-2 bg-gradient-to-r from-cafe-gold via-cafe-wine to-cafe-gold rounded-full shadow-lg"></div>
          </h1>
          <p className="font-sans text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            The story of a French passion for coffee and the timeless art of café living
          </p>
        </div>

        {/* Enhanced Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-10">
            <div className="bg-gradient-to-r from-cafe-navy/10 to-cafe-wine/10 p-2 rounded-3xl">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h2 className="font-serif text-4xl font-bold text-cafe-navy mb-6 flex items-center space-x-3">
                  <Coffee className="h-8 w-8 text-cafe-wine" />
                  <span>Our Story</span>
                </h2>
                <p className="font-sans text-gray-700 leading-relaxed text-xl mb-6">
                  Founded in 1987 by Marie and Pierre Dubois, Café Lumière was born from a simple dream: 
                  to recreate the authentic atmosphere of traditional Parisian cafés. Inspired by 
                  their travels throughout France, they wanted to share this unique café culture 
                  that makes Paris so enchanting.
                </p>
                <p className="font-sans text-gray-700 leading-relaxed text-xl">
                  Today, our passionate team continues this tradition by selecting the finest 
                  coffee beans from around the world and preparing our pastries daily according to family 
                  recipes passed down through generations of French bakers.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-cafe-navy/10 via-cafe-wine/5 to-cafe-gold/10 p-10 rounded-3xl border-l-8 border-cafe-gold shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cafe-wine/10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-cafe-wine p-3 rounded-full">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-cafe-navy">Our Mission</h3>
                </div>
                <p className="font-sans italic text-cafe-navy text-xl leading-relaxed mb-6">
                  "Our mission is to offer you a moment of escape in the heart of the city, 
                  where every cup of coffee tells a story and every pastry is a work of art."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cafe-gold to-cafe-wine rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">MD</span>
                  </div>
                  <div>
                    <p className="font-sans text-lg text-cafe-wine font-bold">Marie Dubois</p>
                    <p className="font-sans text-cafe-navy/70">Founder & Master Pastry Chef</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cafe-gold/30 to-cafe-wine/30 rounded-3xl blur-xl"></div>
            <img
              src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Café interior"
              className="relative rounded-3xl shadow-3xl w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-700 border-4 border-white"
            />
            <div className="absolute -bottom-12 -right-12 bg-gradient-to-r from-cafe-wine via-cafe-wine to-cafe-wine/90 text-white p-8 rounded-3xl shadow-3xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <p className="font-serif text-3xl font-bold">Since 1987</p>
              <p className="font-sans text-lg opacity-90">38 Years of Excellence</p>
              <div className="flex space-x-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-cafe-gold fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Values Section */}
        <div className="bg-gradient-to-br from-white via-cafe-cream/20 to-white rounded-3xl shadow-3xl p-16 md:p-20 border-2 border-cafe-cream/50 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-cafe-gold/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-cafe-wine/10 to-transparent rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="font-serif text-5xl font-bold text-cafe-navy text-center mb-20 relative">
              Our Core Values
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-cafe-gold via-cafe-wine to-cafe-gold rounded-full shadow-lg"></div>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="text-center group relative">
                <div className="relative mb-10">
                  <div className="bg-gradient-to-br from-cafe-cream via-cafe-gold/30 to-cafe-wine/20 p-12 rounded-3xl w-32 h-32 mx-auto flex items-center justify-center group-hover:from-cafe-gold/40 group-hover:via-cafe-wine/30 group-hover:to-cafe-gold/20 transition-all duration-700 shadow-2xl group-hover:shadow-3xl transform group-hover:scale-125 group-hover:rotate-12 border-4 border-white/70">
                    <span className="text-5xl group-hover:scale-110 transition-transform duration-500">🇫🇷</span>
                  </div>
                  <div className="absolute -inset-6 bg-gradient-to-r from-cafe-gold/20 to-cafe-wine/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
                <h3 className="font-serif text-3xl font-bold text-cafe-navy mb-6 group-hover:text-cafe-wine transition-colors duration-500">French Tradition</h3>
                <p className="font-sans text-gray-600 leading-relaxed text-lg">Respect for artisanal methods and authentic flavors passed down through generations of French master craftsmen</p>
              </div>

              <div className="text-center group relative">
                <div className="relative mb-10">
                  <div className="bg-gradient-to-br from-cafe-cream via-cafe-wine/30 to-cafe-gold/20 p-12 rounded-3xl w-32 h-32 mx-auto flex items-center justify-center group-hover:from-cafe-wine/40 group-hover:via-cafe-gold/30 group-hover:to-cafe-wine/20 transition-all duration-700 shadow-2xl group-hover:shadow-3xl transform group-hover:scale-125 group-hover:-rotate-12 border-4 border-white/70">
                    <span className="text-5xl group-hover:scale-110 transition-transform duration-500">🌱</span>
                  </div>
                  <div className="absolute -inset-6 bg-gradient-to-r from-cafe-wine/20 to-cafe-gold/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
                <h3 className="font-serif text-3xl font-bold text-cafe-navy mb-6 group-hover:text-cafe-wine transition-colors duration-500">Local Sourcing</h3>
                <p className="font-sans text-gray-600 leading-relaxed text-lg">Partnership with local producers and sustainable farms for optimal freshness and environmentally conscious practices</p>
              </div>

              <div className="text-center group relative">
                <div className="relative mb-10">
                  <div className="bg-gradient-to-br from-cafe-cream via-cafe-navy/30 to-cafe-gold/20 p-12 rounded-3xl w-32 h-32 mx-auto flex items-center justify-center group-hover:from-cafe-navy/40 group-hover:via-cafe-wine/30 group-hover:to-cafe-gold/20 transition-all duration-700 shadow-2xl group-hover:shadow-3xl transform group-hover:scale-125 group-hover:rotate-12 border-4 border-white/70">
                    <span className="text-5xl group-hover:scale-110 transition-transform duration-500">☕</span>
                  </div>
                  <div className="absolute -inset-6 bg-gradient-to-r from-cafe-navy/20 to-cafe-wine/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
                <h3 className="font-serif text-3xl font-bold text-cafe-navy mb-6 group-hover:text-cafe-wine transition-colors duration-500">Artisan Excellence</h3>
                <p className="font-sans text-gray-600 leading-relaxed text-lg">Every cup is carefully prepared by our expert baristas with precision, passion, and years of specialized training</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Team Section */}
        <div className="mt-32">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-cafe-gold/20 to-cafe-navy/20 px-8 py-4 rounded-full mb-8 border border-cafe-gold/30 shadow-lg">
              <Users className="h-6 w-6 text-cafe-navy" />
              <span className="font-sans font-bold text-cafe-navy text-lg">Our Artisans</span>
            </div>
            <h2 className="font-serif text-5xl font-bold text-cafe-navy text-center mb-8 relative">
              Meet Our Master Team
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-cafe-gold via-cafe-wine to-cafe-gold rounded-full shadow-lg"></div>
            </h2>
            <p className="font-sans text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate artisans behind every perfect cup and exquisite pastry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gradient-to-br from-white via-cafe-cream/20 to-white rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 border-2 border-cafe-cream/50">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Marie Dubois"
                  className="w-full h-80 object-cover group-hover:scale-125 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cafe-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-cafe-wine text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  Founder
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-3xl font-bold text-cafe-navy mb-3">Marie Dubois</h3>
                <p className="font-sans text-cafe-wine mb-4 font-bold text-lg flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <span>Founder & Head Pastry Chef</span>
                </p>
                <p className="font-sans text-gray-600 leading-relaxed text-lg">Master pastry chef with 30 years of experience in French culinary arts and multiple international awards</p>
                <div className="flex space-x-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-cafe-gold fill-current" />
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white via-cafe-cream/20 to-white rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 hover:-rotate-1 border-2 border-cafe-cream/50">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Antoine Martin"
                  className="w-full h-80 object-cover group-hover:scale-125 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cafe-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-cafe-gold text-cafe-navy px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  Master Barista
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-3xl font-bold text-cafe-navy mb-3">Antoine Martin</h3>
                <p className="font-sans text-cafe-wine mb-4 font-bold text-lg flex items-center space-x-2">
                  <Coffee className="h-5 w-5" />
                  <span>Head Barista & Coffee Expert</span>
                </p>
                <p className="font-sans text-gray-600 leading-relaxed text-lg">Coffee expert and latte art champion with award-winning skills and 15 years of specialized training</p>
                <div className="flex space-x-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-cafe-gold fill-current" />
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white via-cafe-cream/20 to-white rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 border-2 border-cafe-cream/50">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Sophie Laurent"
                  className="w-full h-80 object-cover group-hover:scale-125 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cafe-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-cafe-navy text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  Manager
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-3xl font-bold text-cafe-navy mb-3">Sophie Laurent</h3>
                <p className="font-sans text-cafe-wine mb-4 font-bold text-lg flex items-center space-x-2">
                  <Heart className="h-5 w-5" />
                  <span>Service Manager & Host</span>
                </p>
                <p className="font-sans text-gray-600 leading-relaxed text-lg">Warm hospitality and personalized service with genuine French charm and attention to every detail</p>
                <div className="flex space-x-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-cafe-gold fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="mt-32 bg-gradient-to-r from-cafe-navy/10 via-cafe-wine/5 to-cafe-gold/10 rounded-3xl p-16 border-2 border-cafe-gold/30 shadow-2xl">
          <div className="text-center">
            <h2 className="font-serif text-4xl font-bold text-cafe-navy mb-12">Recognition & Awards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-cafe-gold to-cafe-wine p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-xl">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold text-cafe-navy mb-2">Best Café 2024</h3>
                <p className="font-sans text-gray-600">City Dining Awards</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-cafe-wine to-cafe-navy p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-xl">
                  <Star className="h-10 w-10 text-cafe-gold fill-current" />
                </div>
                <h3 className="font-serif text-xl font-bold text-cafe-navy mb-2">5-Star Rating</h3>
                <p className="font-sans text-gray-600">Customer Reviews</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-cafe-navy to-cafe-gold p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-xl">
                  <Coffee className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold text-cafe-navy mb-2">Artisan Certified</h3>
                <p className="font-sans text-gray-600">French Culinary Institute</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;