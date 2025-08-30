import React, { useState } from 'react';
import { Calendar, Clock, Users, User, Phone, Mail, MapPin, Award, Star } from 'lucide-react';

const ReservationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    alert('Reservation sent! We will confirm by email within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cafe-cream via-white to-cafe-cream py-24 relative overflow-hidden">
      {/* Enhanced Decorative Background */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-cafe-gold/15 to-cafe-wine/8 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-cafe-wine/12 to-cafe-navy/6 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-64 h-64 bg-cafe-navy/5 rounded-full blur-2xl"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-cafe-navy/20 to-cafe-wine/20 px-8 py-4 rounded-full mb-8 border border-cafe-navy/30 shadow-lg">
            <Calendar className="h-6 w-6 text-cafe-wine" />
            <span className="font-sans font-bold text-cafe-navy text-lg">Book Your Experience</span>
          </div>
          <h1 className="font-serif text-6xl md:text-7xl font-bold text-cafe-navy mb-8 relative leading-tight">
            Table Reservations
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-2 bg-gradient-to-r from-cafe-gold via-cafe-wine to-cafe-gold rounded-full shadow-lg"></div>
          </h1>
          <p className="font-sans text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Reserve your table for an authentic French café experience in our charming Parisian-inspired setting
          </p>
        </div>

        {/* Enhanced Reservation Form */}
        <div className="bg-gradient-to-br from-white via-cafe-cream/20 to-white rounded-3xl shadow-3xl overflow-hidden border-2 border-cafe-cream/50 relative">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 border border-cafe-gold rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 border border-cafe-wine rounded-full"></div>
          </div>
          
          <div className="bg-gradient-to-r from-cafe-navy via-cafe-navy/95 to-cafe-wine/90 p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cafe-wine/20 to-cafe-gold/20"></div>
            <div className="absolute top-0 left-0 w-64 h-64 bg-cafe-gold/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-cafe-wine/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20">
                <Users className="h-5 w-5 text-cafe-gold" />
                <span className="font-sans font-semibold text-cafe-cream">Premium Dining</span>
              </div>
              <h2 className="font-serif text-4xl font-bold text-cafe-cream mb-6">
                Reservation Form
              </h2>
              <p className="font-sans text-cafe-cream/90 text-xl relative z-10 max-w-2xl mx-auto">
                Fill out the form below to secure your perfect table in our authentic French café
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-16 md:p-20 space-y-12 relative z-10">
            {/* Enhanced Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="group">
                <label className="flex items-center space-x-3 font-sans font-bold text-cafe-navy mb-6 text-xl">
                  <div className="bg-gradient-to-br from-cafe-gold/30 to-cafe-wine/20 p-3 rounded-full shadow-lg">
                    <User className="h-5 w-5 text-cafe-navy" />
                  </div>
                  <span>Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-8 py-5 border-2 border-gray-200 rounded-2xl focus:ring-6 focus:ring-cafe-gold/30 focus:border-cafe-gold transition-all duration-500 font-sans text-xl shadow-lg hover:shadow-xl bg-gradient-to-r from-white to-cafe-cream/20 group-hover:border-cafe-gold/50"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="group">
                <label className="flex items-center space-x-3 font-sans font-bold text-cafe-navy mb-6 text-xl">
                  <div className="bg-gradient-to-br from-cafe-wine/30 to-cafe-gold/20 p-3 rounded-full shadow-lg">
                    <Mail className="h-5 w-5 text-cafe-navy" />
                  </div>
                  <span>Email Address</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-8 py-5 border-2 border-gray-200 rounded-2xl focus:ring-6 focus:ring-cafe-gold/30 focus:border-cafe-gold transition-all duration-500 font-sans text-xl shadow-lg hover:shadow-xl bg-gradient-to-r from-white to-cafe-cream/20 group-hover:border-cafe-gold/50"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Enhanced Phone */}
            <div className="group">
              <label className="flex items-center space-x-3 font-sans font-bold text-cafe-navy mb-6 text-xl">
                <div className="bg-gradient-to-br from-cafe-navy/30 to-cafe-wine/20 p-3 rounded-full shadow-lg">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <span>Phone Number</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-8 py-5 border-2 border-gray-200 rounded-2xl focus:ring-6 focus:ring-cafe-gold/30 focus:border-cafe-gold transition-all duration-500 font-sans text-xl shadow-lg hover:shadow-xl bg-gradient-to-r from-white to-cafe-cream/20 group-hover:border-cafe-gold/50"
                placeholder="(555) 123-4567"
              />
            </div>

            {/* Enhanced Reservation Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="group">
                <label className="flex items-center space-x-3 font-sans font-bold text-cafe-navy mb-6 text-xl">
                  <div className="bg-gradient-to-br from-cafe-gold/30 to-cafe-navy/20 p-3 rounded-full shadow-lg">
                    <Calendar className="h-5 w-5 text-cafe-navy" />
                  </div>
                  <span>Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-8 py-5 border-2 border-gray-200 rounded-2xl focus:ring-6 focus:ring-cafe-gold/30 focus:border-cafe-gold transition-all duration-500 font-sans text-xl shadow-lg hover:shadow-xl bg-gradient-to-r from-white to-cafe-cream/20 group-hover:border-cafe-gold/50"
                />
              </div>

              <div className="group">
                <label className="flex items-center space-x-3 font-sans font-bold text-cafe-navy mb-6 text-xl">
                  <div className="bg-gradient-to-br from-cafe-wine/30 to-cafe-gold/20 p-3 rounded-full shadow-lg">
                    <Clock className="h-5 w-5 text-cafe-navy" />
                  </div>
                  <span>Time</span>
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-8 py-5 border-2 border-gray-200 rounded-2xl focus:ring-6 focus:ring-cafe-gold/30 focus:border-cafe-gold transition-all duration-500 font-sans text-xl shadow-lg hover:shadow-xl bg-gradient-to-r from-white to-cafe-cream/20 group-hover:border-cafe-gold/50"
                >
                  <option value="">Select time</option>
                  <option value="08:00">08:00 AM</option>
                  <option value="08:30">08:30 AM</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="09:30">09:30 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="10:30">10:30 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="11:30">11:30 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="12:30">12:30 PM</option>
                  <option value="13:00">01:00 PM</option>
                  <option value="13:30">01:30 PM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="14:30">02:30 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="15:30">03:30 PM</option>
                  <option value="16:00">04:00 PM</option>
                  <option value="16:30">04:30 PM</option>
                  <option value="17:00">05:00 PM</option>
                  <option value="17:30">05:30 PM</option>
                  <option value="18:00">06:00 PM</option>
                </select>
              </div>

              <div className="group">
                <label className="flex items-center space-x-3 font-sans font-bold text-cafe-navy mb-6 text-xl">
                  <div className="bg-gradient-to-br from-cafe-navy/30 to-cafe-gold/20 p-3 rounded-full shadow-lg">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <span>Party Size</span>
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-8 py-5 border-2 border-gray-200 rounded-2xl focus:ring-6 focus:ring-cafe-gold/30 focus:border-cafe-gold transition-all duration-500 font-sans text-xl shadow-lg hover:shadow-xl bg-gradient-to-r from-white to-cafe-cream/20 group-hover:border-cafe-gold/50"
                >
                  <option value="1">1 person</option>
                  <option value="2">2 people</option>
                  <option value="3">3 people</option>
                  <option value="4">4 people</option>
                  <option value="5">5 people</option>
                  <option value="6">6 people</option>
                  <option value="7">7 people</option>
                  <option value="8">8 people</option>
                  <option value="9">9+ people (call us)</option>
                </select>
              </div>
            </div>

            {/* Enhanced Message */}
            <div className="group">
              <label className="flex items-center space-x-3 font-sans font-bold text-cafe-navy mb-6 text-xl">
                <div className="bg-gradient-to-br from-cafe-gold/30 to-cafe-wine/20 p-3 rounded-full shadow-lg">
                  <Mail className="h-5 w-5 text-cafe-navy" />
                </div>
                <span>Special Requests (Optional)</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-8 py-5 border-2 border-gray-200 rounded-2xl focus:ring-6 focus:ring-cafe-gold/30 focus:border-cafe-gold transition-all duration-500 font-sans resize-none text-xl shadow-lg hover:shadow-xl bg-gradient-to-r from-white to-cafe-cream/20 group-hover:border-cafe-gold/50"
                placeholder="Special requests, dietary restrictions, celebrations, or any other details we should know..."
              ></textarea>
            </div>

            {/* Enhanced Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="group bg-gradient-to-r from-cafe-wine via-cafe-wine to-cafe-wine/90 hover:from-cafe-wine/90 hover:via-cafe-wine hover:to-cafe-wine text-white px-20 py-6 rounded-full font-sans font-bold text-2xl transition-all duration-500 transform hover:scale-110 hover:shadow-3xl shadow-2xl border-4 border-white/50 hover:border-cafe-gold/50 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cafe-gold/20 to-cafe-wine/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex items-center space-x-3">
                  <Calendar className="h-7 w-7 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Confirm Reservation</span>
                </div>
              </button>
              <p className="font-sans text-gray-500 mt-6 text-lg">
                We'll send you a confirmation email within 2 hours
              </p>
            </div>
          </form>
        </div>

        {/* Enhanced Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-24">
          <div className="bg-gradient-to-br from-white via-cafe-cream/30 to-cafe-gold/10 rounded-3xl shadow-2xl p-12 text-center border-2 border-cafe-gold/30 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cafe-gold/10 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-cafe-gold/30 to-cafe-wine/20 p-8 rounded-3xl w-24 h-24 mx-auto mb-8 flex items-center justify-center shadow-xl border-4 border-white/50">
                <Clock className="h-10 w-10 text-cafe-navy" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-cafe-navy mb-6">Opening Hours</h3>
              <div className="font-sans text-gray-600 space-y-3 text-lg">
                <div className="bg-white/50 p-4 rounded-xl border border-cafe-gold/20">
                  <p className="font-semibold text-cafe-navy">Monday - Friday</p>
                  <p>7:00 AM - 6:00 PM</p>
                </div>
                <div className="bg-white/50 p-4 rounded-xl border border-cafe-wine/20">
                  <p className="font-semibold text-cafe-navy">Saturday - Sunday</p>
                  <p>8:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white via-cafe-cream/30 to-cafe-wine/10 rounded-3xl shadow-2xl p-12 text-center border-2 border-cafe-wine/30 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-cafe-wine/10 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-cafe-wine/30 to-cafe-gold/20 p-8 rounded-3xl w-24 h-24 mx-auto mb-8 flex items-center justify-center shadow-xl border-4 border-white/50">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-cafe-navy mb-6">Reservation Policy</h3>
              <div className="font-sans text-gray-600 space-y-3 text-lg">
                <div className="bg-white/50 p-4 rounded-xl border border-cafe-wine/20">
                  <p className="font-semibold text-cafe-navy">Advance Booking</p>
                  <p>Recommended for groups 4+</p>
                </div>
                <div className="bg-white/50 p-4 rounded-xl border border-cafe-gold/20">
                  <p className="font-semibold text-cafe-navy">Cancellation</p>
                  <p>2 hours prior notice</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white via-cafe-cream/30 to-cafe-navy/10 rounded-3xl shadow-2xl p-12 text-center border-2 border-cafe-navy/30 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-cafe-navy/10 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-cafe-navy/30 to-cafe-wine/20 p-8 rounded-3xl w-24 h-24 mx-auto mb-8 flex items-center justify-center shadow-xl border-4 border-white/50">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-cafe-navy mb-6">Location</h3>
              <div className="font-sans text-gray-600 space-y-3 text-lg">
                <div className="bg-white/50 p-4 rounded-xl border border-cafe-navy/20">
                  <p className="font-semibold text-cafe-navy">Address</p>
                  <p>123 Lumière Street</p>
                  <p>Downtown District</p>
                </div>
                <div className="bg-white/50 p-4 rounded-xl border border-cafe-gold/20">
                  <p className="font-semibold text-cafe-navy">Parking Available</p>
                  <p>Valet & Self-Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Special Features */}
        <div className="mt-24 bg-gradient-to-r from-cafe-navy/10 via-cafe-wine/5 to-cafe-gold/10 rounded-3xl p-16 border-2 border-cafe-gold/30 shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-cafe-navy mb-6">Why Reserve With Us?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cafe-gold to-cafe-wine mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-cafe-gold to-cafe-wine p-6 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-xl">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold text-cafe-navy mb-2">Premium Service</h3>
              <p className="font-sans text-gray-600">Dedicated table service and personalized attention</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-cafe-wine to-cafe-navy p-6 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-xl">
                <Star className="h-8 w-8 text-cafe-gold fill-current" />
              </div>
              <h3 className="font-serif text-xl font-bold text-cafe-navy mb-2">Best Tables</h3>
              <p className="font-sans text-gray-600">Priority seating in our most charming spots</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-cafe-navy to-cafe-gold p-6 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-xl">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold text-cafe-navy mb-2">Group Friendly</h3>
              <p className="font-sans text-gray-600">Perfect for business meetings and celebrations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;