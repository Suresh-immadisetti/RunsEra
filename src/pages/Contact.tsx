import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

// Pinterest custom component
const Pinterest = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 text-white"
  >
    <path d="M12 2a10 10 0 0 0-2.5 19.5c.5.1.7-.2.7-.5v-1.7C6.8 19.8 6 18 6 18c-.5-1.3-1-1.6-1-1.6-.8-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .8 1.4 2.1 1 2.6.8.1-.6.3-1 .5-1.2-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8a7.7 7.7 0 0 1 2-.3c.7 0 1.4.1 2 .3 1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.3.6.9.6 1.8v2.6c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />
  </svg>
);

function Contact() {
  return (
    <div className="pt-16">
      {/* Hero Section with Enhanced Background Image */}
      <section className="relative text-white min-h-[500px] flex items-center">
        {/* Background Image with reduced opacity gradient overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')"
          }}
        ></div>
        
        {/* Darker gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#002E6E]/90 to-[#00AEEF]/90"></div>
        
        {/* Content with higher z-index */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto drop-shadow-md">
              Ready to transform your business? Let's start the conversation.
            </p>
          </div>
        </div>
        
        {/* Curved bottom shape */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 74" fill="none">
            <path d="M0,37 C240,74 480,74 720,37 C960,0 1200,0 1440,37 L1440,74 L0,74 Z" fill="#f0f9ff" />
          </svg>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-[#002E6E]">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#00AEEF] rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#002E6E]">Phone</p>
                    <p className="text-gray-600">+91-8309583591</p>
                    <p className="text-gray-600">+91-9100303592</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#00AEEF] rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#002E6E]">Email</p>
                    <p className="text-gray-600">info@runsera.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#00AEEF] rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#002E6E]">Address</p>
                    <p className="text-gray-600">Jubilee Hills, Road No.5, Hyderabad, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-xl font-bold mb-6 text-[#002E6E]">Connect with us</h4>
                <div className="flex flex-wrap gap-4">
                  <a href="https://www.facebook.com/share/1EAHt9keH7/" className="w-12 h-12 bg-[#00AEEF] hover:bg-[#002E6E] rounded-full flex items-center justify-center transition-colors">
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a href="https://x.com/RunsEra_Digital" className="w-12 h-12 bg-[#00AEEF] hover:bg-[#002E6E] rounded-full flex items-center justify-center transition-colors">
                    <Twitter className="w-6 h-6 text-white" />
                  </a>
                  <a href="https://www.instagram.com/runseradigitalsolutions?igsh=MWFpZHdwZmE5a2w0ZA==" className="w-12 h-12 bg-[#00AEEF] hover:bg-[#002E6E] rounded-full flex items-center justify-center transition-colors">
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a href="https://www.linkedin.com/company/runsera-digital-solutions-pvt-ltd/" className="w-12 h-12 bg-[#00AEEF] hover:bg-[#002E6E] rounded-full flex items-center justify-center transition-colors">
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                  <a href="https://youtube.com" className="w-12 h-12 bg-[#00AEEF] hover:bg-[#002E6E] rounded-full flex items-center justify-center transition-colors">
                    <Youtube className="w-6 h-6 text-white" />
                  </a>
                  <a href="https://pin.it/m8L5oYfIu " className="w-12 h-12 bg-[#00AEEF] hover:bg-[#002E6E] rounded-full flex items-center justify-center transition-colors">
                    <Pinterest />
                  </a>
                </div>
                
                <div className="mt-8">
                  <a
                    href="https://wa.me/918309583591?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-all hover:shadow-lg transform hover:scale-105"
                  >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-[#002E6E]">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent"
                      placeholder="Thiresh"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent"
                      placeholder="Immadisetti"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent"
                    placeholder="immadisettisuresh123@gmail.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent"
                    placeholder="+91 9876543210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00AEEF] to-[#002E6E] hover:from-[#0099d4] hover:to-[#001f4d] text-white py-4 rounded-lg font-semibold transition-all hover:shadow-lg transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#002E6E] mb-4">Find Us</h2>
            <p className="text-xl text-[#0066cc]">Visit our office in Jubilee Hills, Hyderabad</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.263317920884!2d78.42601531535458!3d17.44850578804367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90d6d7f4a4a5%3A0x3a9b3b3b3b3b3b3b!2sJubilee%20Hills%2C%20Road%20No.5%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="RunSera Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;