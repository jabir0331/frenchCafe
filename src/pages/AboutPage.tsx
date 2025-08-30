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
        <div className="text-left mt-10 mb-10">

          <h1 className="font-serif text-4xl md:text-4xl font-bold text-cafe-navy mb-2 relative leading-tight">
            About French Cafe
          </h1>
          <p className="font-sans text-xl text-gray-600 max-w-5xl leading-relaxed font-light">
            The story of a French passion for coffee and the timeless art of café living
          </p>
        </div>
        

        {/* Enhanced Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-10">

          <div className="space-y-5">
            <div className="bg-gradient-to-r from-cafe-navy/10 to-cafe-wine/10 p-2 rounded-3xl">
              <div className="bg-white rounded-2xl py-20 px-8 shadow-xl">

                <p className="font-sans text-gray-700 leading-relaxed text-lg mb-6">
                  Founded in 1995 in Colombo, French Cafe was created with a simple dream:
                  to bring the charm of traditional Parisian cafés to Sri Lanka. Inspired by
                  the elegance of French café culture, we blended it with the warmth of local
                  hospitality to create a space where people can relax, connect, and enjoy
                  timeless flavors.
                </p>
                <p className="font-sans text-gray-700 leading-relaxed text-lg">
                  Today, our passionate team carries on this tradition by sourcing the finest
                  coffee beans and freshly baked pastries, crafted daily with recipes that
                  combine French artistry and Sri Lankan touches. Every cup and every bite
                  tells the story of two cultures coming together in harmony.
                </p>
              </div>
            </div>

          </div>


          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cafe-gold/30 to-cafe-wine/30 rounded-3xl blur-xl"></div>
            <img
              src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Café interior"
              className="relative rounded-3xl shadow-3xl w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-700 border-4 border-white"
            />
            <div className="absolute -top-12 -right-20 bg-gradient-to-r from-cafe-wine via-cafe-wine to-cafe-wine/90 text-white p-8 rounded-3xl shadow-3xl border-4 border-white transform rotate-6 hover:rotate-0 transition-transform duration-500">
              <p className="font-serif text-2xl font-bold">Since 1995</p>
              <p className="font-sans text-md opacity-90">30 Years of Excellence</p>
              <div className="flex space-x-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-cafe-gold fill-current" />
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AboutPage;