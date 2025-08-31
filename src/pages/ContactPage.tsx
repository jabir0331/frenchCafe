import { MapPin, Phone, Mail } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cafe-cream via-white to-cafe-cream py-24 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-cafe-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cafe-wine/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mt-10 mb-10">
          <h1 className="font-serif text-4xl font-bold text-cafe-navy mb-2 relative">
            Contact Us
          </h1>
          <p className="font-sans text-xl text-gray-600 max-w-4xl leading-relaxed">
            Come visit us in our charming corner of Paris
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="space-y-10">
            {/* <div className="bg-white rounded-3xl shadow-2xl p-10 border border-cafe-cream/50"> */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            
              <div className="bg-cafe-navy p-6 text-center mb-3">
                <h2 className="font-serif text-2xl font-bold text-cafe-cream">
                  Reach Us
                </h2>
              </div>

              <div className="space-y-8 p-10">
                <div className="flex items-start space-x-6 group">

                  <div className="flex items-start space-x-4">
                    <div className="bg-cafe-cream p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-cafe-wine" />
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-cafe-navy mb-1">Address</h3>
                      <p className="font-sans text-gray-600">
                        No. 12, Alfred House Avenue, Colombo 03,<br />
                        Western Province, Sri Lanka<br />
                      </p>
                    </div>

                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-cafe-cream p-3 rounded-full">
                    <Phone className="h-6 w-6 text-cafe-wine" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-cafe-navy mb-1">Telephone</h3>
                    <p className="font-sans text-gray-600">+94 75 746 42 09 | +94 71 757 1090</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-cafe-cream p-3 rounded-full">
                    <Mail className="h-6 w-6 text-cafe-wine" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-cafe-navy mb-1">Email</h3>
                    <p className="font-sans text-gray-600">info@cafelumiere.com</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Map */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-cafe-navy p-6 text-center">
                <h2 className="font-serif text-2xl font-bold text-cafe-cream">
                  Find Us
                </h2>
              </div>
              <div className="p-2">
                <div className=" h-80 rounded-2xl flex items-center justify-center">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9428455071356!2d79.85287877499626!3d6.8974396931017745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bdf76d0c963%3A0x8d1bb54f06a4948c!2s12%20Alfred%20House%20Ave%2C%20Colombo%2000300!5e0!3m2!1sen!2slk!4v1756590373430!5m2!1sen!2slk" width={600} height = {325} style={{border: "0", borderRadius: "16px"}} loading="lazy"></iframe>
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