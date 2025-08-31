import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Calendar, Clock, Users, User, Phone, Mail, Send, CheckCircle, AlertCircle, X } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  message: string;
}

interface HoursData {
  day: string;
  hours: string;
  start: string;
  end: string;
}

interface TimeSlot {
  value: string;
  label: string;
}

type SubmitStatus = 'idle' | 'success' | 'validation_error';

const ReservationPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });

  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  // Opening hours data
  const hoursData: HoursData[] = [
    { day: "Monday - Thursday", hours: "10:00 AM - 8:00 PM", start: "10:00", end: "20:00" },
    { day: "Friday", hours: "4:00 PM - 10:00 PM", start: "16:00", end: "22:00" },
    { day: "Saturday - Sunday", hours: "10:00 AM - 10:00 PM", start: "10:00", end: "22:00" }
  ];

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  // Get today's date in YYYY-MM-DD format
  const getTodayDate = (): string => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  // Get current time in HH:MM format
  const getCurrentTime = (): string => {
    return currentTime.toTimeString().slice(0, 5);
  };

  // Check if selected date is today
  const isToday = (selectedDate: string): boolean => {
    return selectedDate === getTodayDate();
  };

  // Function to get day of week from date
  const getDayOfWeek = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    if (day >= 1 && day <= 4) return "Monday - Thursday";
    if (day === 5) return "Friday";
    if (day === 0 || day === 6) return "Saturday - Sunday";
    return "Monday - Thursday"; // fallback
  };

  // Function to generate time slots based on selected date
  const generateTimeSlots = (dateString: string): TimeSlot[] => {
    if (!dateString) return [];
    
    const dayType = getDayOfWeek(dateString);
    const dayData = hoursData.find((data: HoursData) => data.day === dayType);
    
    if (!dayData) return [];
    
    const slots: TimeSlot[] = [];
    const startTime = new Date(`2000-01-01T${dayData.start}:00`);
    const endTime = new Date(`2000-01-01T${dayData.end}:00`);
    
    // Generate 30-minute intervals
    const currentTime = new Date(startTime);
    while (currentTime < endTime) {
      const timeString = currentTime.toTimeString().slice(0, 5);
      const displayTime = currentTime.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      });
      
      slots.push({
        value: timeString,
        label: displayTime
      });
      
      currentTime.setMinutes(currentTime.getMinutes() + 30);
    }
    
    return slots;
  };

  const availableTimeSlots: TimeSlot[] = generateTimeSlots(formData.date);

  // Check if time slot should be disabled
  const isTimeSlotDisabled = (timeValue: string): boolean => {
    if (!formData.date) return false;
    
    if (isToday(formData.date)) {
      const currentTimeValue = getCurrentTime();
      return timeValue <= currentTimeValue;
    }
    
    return false;
  };

  // Validate form
  const validateForm = (): string[] => {
    const errors: string[] = [];
    
    if (!formData.name.trim()) {
      errors.push('Full Name is required');
    }
    
    if (!formData.email.trim()) {
      errors.push('Email Address is required');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.push('Please enter a valid email address');
    }
    
    if (!formData.phone.trim()) {
      errors.push('Phone Number is required');
    }
    
    if (!formData.date) {
      errors.push('Preferred Date is required');
    }
    
    if (!formData.time) {
      errors.push('Preferred Time is required');
    }
    
    if (!formData.guests) {
      errors.push('Number of Guests is required');
    }
    
    return errors;
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    
    const errors = validateForm();
    
    if (errors.length > 0) {
      setValidationErrors(errors);
      setSubmitStatus('validation_error');
      return;
    }
    
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        message: ''
      });

      // Auto-close popup after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1000);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Reset time when date changes
  const handleDateChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      time: '' // Reset time when date changes
    }));
  };

  const closeModal = (): void => {
    setSubmitStatus('idle');
    setValidationErrors([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50 py-24 relative overflow-hidden">
      {/* Enhanced Decorative Background */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-amber-400/15 to-red-800/8 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-red-800/12 to-slate-800/6 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-64 h-64 bg-slate-800/5 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-left mt-10 mb-10">
          <h1 className="font-serif text-4xl md:text-4xl font-bold text-slate-800 mb-2 relative leading-tight">
            Make a Reservation
          </h1>
          <p className="font-sans text-xl text-gray-600 max-w-5xl leading-relaxed font-light">
            Reserve your table for an authentic French café experience in our charming Parisian-inspired setting
          </p>
        </div>

        {/* Opening Hours Section - Similar to Cinnamon Leaf */}
        <div className="max-w-7xl mx-auto bg-amber-50 p-8 rounded-2xl border border-amber-200 mb-10">
          <div className="flex justify-center mb-6">
            <Clock className="w-6 h-6 text-slate-600" />
          </div>
          <h3 className="font-sans text-xl font-semibold text-slate-800 mb-6 text-center">
            Opening Hours
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hoursData.map((item: HoursData, index: number) => (
              <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm">
                <h4 className="font-sans font-semibold text-slate-800 mb-2">
                  {item.day}
                </h4>
                <p className="font-sans text-slate-600 font-medium">
                  {item.hours}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Reservation Form */}
        <div className="bg-gradient-to-br from-white via-amber-50/20 to-white rounded-3xl shadow-3xl overflow-hidden border-2 border-amber-50/50 relative">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 border border-amber-400 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 border border-red-800 rounded-full"></div>
          </div>

          <div className="p-16 md:p-20 space-y-12 relative z-10">
            {/* Personal Information Section */}
            <div className="space-y-8">
              <h3 className="font-serif text-2xl font-bold text-slate-800 mb-8 border-b-2 border-amber-400/30 pb-4">
                Personal Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group">
                  <label htmlFor="name" className="flex items-center space-x-3 font-sans font-medium text-slate-800 mb-3 text-lg">
                    <div className="bg-gradient-to-br from-slate-800/30 to-red-800/20 p-3 rounded-full shadow-lg">
                      <User className="h-5 w-5 text-slate-800" />
                    </div>
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-amber-400/30 focus:border-amber-400 transition-all duration-500 font-sans text-lg shadow-lg hover:shadow-xl bg-gradient-to-r from-white to-amber-50/20 group-hover:border-amber-400/50"
                    placeholder="Your full name"
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="flex items-center space-x-3 font-sans font-medium text-slate-800 mb-3 text-lg">
                    <div className="bg-gradient-to-br from-slate-800/30 to-red-800/20 p-3 rounded-full shadow-lg">
                      <Mail className="h-5 w-5 text-slate-800" />
                    </div>
                    <span>Email Address *</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-amber-400/30 focus:border-amber-400 transition-all duration-500 font-sans text-lg shadow-lg hover:shadow-xl bg-gradient-to-r from-white to-amber-50/20 group-hover:border-amber-400/50"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="group">
                  <label htmlFor="phone" className="flex items-center space-x-3 font-sans font-medium text-slate-800 mb-3 text-lg">
                    <div className="bg-gradient-to-br from-slate-800/30 to-red-800/20 p-3 rounded-full shadow-lg">
                      <Phone className="h-5 w-5 text-slate-800" />
                    </div>
                    <span>Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-amber-400/30 focus:border-amber-400 transition-all duration-500 font-sans text-lg shadow-lg hover:shadow-xl bg-gradient-to-r from-white to-amber-50/20 group-hover:border-amber-400/50"
                    placeholder="077 123 4567"
                  />
                </div>
              </div>
            </div>

            {/* Reservation Details Section */}
            <div className="space-y-8">
              <h3 className="font-serif text-2xl font-bold text-slate-800 mb-8 border-b-2 border-amber-400/30 pb-4">
                Reservation Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group">
                  <label htmlFor="date" className="flex items-center space-x-3 font-sans font-medium text-slate-800 mb-3 text-lg">
                    <div className="bg-gradient-to-br from-slate-800/30 to-red-800/20 p-3 rounded-full shadow-lg">
                      <Calendar className="h-5 w-5 text-slate-800" />
                    </div>
                    <span>Preferred Date *</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleDateChange}
                    min={getTodayDate()}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-amber-400/30 focus:border-amber-400 transition-all duration-500 font-sans text-lg shadow-lg hover:shadow-xl bg-gradient-to-r from-white to-amber-50/20 group-hover:border-amber-400/50"
                  />
                </div>

                <div className="group">
                  <label htmlFor="time" className="flex items-center space-x-3 font-sans font-medium text-slate-800 mb-3 text-lg">
                    <div className="bg-gradient-to-br from-slate-800/30 to-red-800/20 p-3 rounded-full shadow-lg">
                      <Clock className="h-5 w-5 text-slate-800" />
                    </div>
                    <span>Preferred Time *</span>
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    disabled={!formData.date}
                    className={`w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-amber-400/30 focus:border-amber-400 transition-all duration-500 font-sans text-lg shadow-lg hover:shadow-xl bg-gradient-to-r from-white to-amber-50/20 group-hover:border-amber-400/50 ${
                      !formData.date ? 'bg-gray-100 cursor-not-allowed' : ''
                    }`}
                  >
                    <option value="">
                      {!formData.date ? 'Please select a date first' : 'Select time'}
                    </option>
                    {availableTimeSlots.map((slot: TimeSlot) => (
                      <option 
                        key={slot.value} 
                        value={slot.value}
                        disabled={isTimeSlotDisabled(slot.value)}
                        style={{
                          color: isTimeSlotDisabled(slot.value) ? '#9CA3AF' : 'inherit'
                        }}
                      >
                        {slot.label} {isTimeSlotDisabled(slot.value) ? '(Past)' : ''}
                      </option>
                    ))}
                  </select>
                  {formData.date && isToday(formData.date) && (
                    <p className="mt-2 text-sm text-gray-500 italic">
                      Past time slots are disabled for today
                    </p>
                  )}
                </div>

                <div className="group">
                  <label htmlFor="guests" className="flex items-center space-x-3 font-sans font-medium text-slate-800 mb-3 text-lg">
                    <div className="bg-gradient-to-br from-slate-800/30 to-red-800/20 p-3 rounded-full shadow-lg">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <span>Number of Guests *</span>
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-amber-400/30 focus:border-amber-400 transition-all duration-500 font-sans text-lg shadow-lg hover:shadow-xl bg-gradient-to-r from-white to-amber-50/20 group-hover:border-amber-400/50"
                  >
                    {[...Array(10)].map((_, i: number) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Information Section */}
            <div className="space-y-8">
              <h3 className="font-serif text-2xl font-bold text-slate-800 mb-8 border-b-2 border-amber-400/30 pb-4">
                Additional Information
              </h3>
              
              <div className="group">
                <label htmlFor="message" className="flex items-center space-x-3 font-sans font-medium text-slate-800 mb-3 text-lg">
                  <div className="bg-gradient-to-br from-slate-800/30 to-red-800/20 p-3 rounded-full shadow-lg">
                    <Mail className="h-5 w-5 text-slate-800" />
                  </div>
                  <span>Special Requests or Dietary Requirements</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-amber-400/30 focus:border-amber-400 transition-all duration-500 font-sans resize-none text-lg shadow-lg hover:shadow-xl bg-gradient-to-r from-white to-amber-50/20 group-hover:border-amber-400/50"
                  placeholder="Let us know about any allergies, dietary preferences, or special occasions..."
                  style={{resize: 'none'}}
                ></textarea>
              </div>
            </div>

            {/* Enhanced Submit Button */}
            <div className="text-center pt-8">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-slate-700 text-white px-8 py-4 rounded-xl font-sans font-semibold text-lg hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center shadow-2xl hover:shadow-3xl transform hover:scale-105"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="w-5 h-5 mr-2" />
                    Send Reservation Request
                  </div>
                )}
              </button>
              <p className="font-sans text-gray-500 mt-6 text-lg">
                <i>(We'll contact you soon to confirm your booking)</i>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Popup Modal */}
      {submitStatus === 'success' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-xl w-full mx-4 shadow-2xl relative">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-16 h-16 text-green-600" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-800 mb-4">
                Reservation Sent!
              </h3>
              <p className="font-sans text-slate-600 mb-6">
                Your reservation request has been submitted successfully! <br />
                We'll contact you soon to confirm your booking.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Validation Error Popup Modal */}
      {submitStatus === 'validation_error' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-xl w-full mx-4 shadow-2xl relative">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <AlertCircle className="w-16 h-16 text-red-600" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-800 mb-4">
                Please fill in all required fields
              </h3>
              {/* <p className="font-sans text-slate-600 mb-6">
                The following information is required to proceed with your reservation:
              </p>
              <div className="text-left bg-red-50 rounded-lg p-4 mb-6">
                <ul className="space-y-2">
                  {validationErrors.map((error, index) => (
                    <li key={index} className="flex items-center text-red-700 font-sans">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      {error}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="font-sans text-slate-500 text-sm">
                Please fill out all required fields and try again.
              </p> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationPage;