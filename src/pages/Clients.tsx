// Clients.tsx
import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import client logos from assets
import AlekasLogo from '../assets/clients/alekas-logo.png';
import PragatiLogo from '../assets/clients/pragati-logo.png';
import AkarshLogo from '../assets/clients/akarsh-logo.png';
import RgInfraLogo from '../assets/clients/rg-infra-logo.png';
import RivaLogo from '../assets/clients/riva-logo.png';
import LuminousLogo from '../assets/clients/luminous-logo.png';
import KrishnaLogo from '../assets/clients/krihna-logo.png';

function Clients() {
  const clients = [
    { 
      name: "Alekas Solutions Pvt Ltd", 
      logo: AlekasLogo, 
      industry: "Technology", 
      description: "Digital transformation and web development solutions" 
    },
    { 
      name: "Pragati Green Meadows and Resorts Pvt Ltd", 
      logo: PragatiLogo, 
      industry: "Hospitality", 
      description: "Resort management and booking platform" 
    },
    { 
      name: "Akarsh Digitals Pvt Ltd", 
      logo: AkarshLogo, 
      industry: "Digital Marketing", 
      description: "Comprehensive digital marketing campaigns" 
    },
    { 
      name: "RG Infrastructure", 
      logo: RgInfraLogo, 
      industry: "Construction", 
      description: "Project management and client portal development" 
    },
    { 
      name: "Riva Power Solutions", 
      logo: RivaLogo, 
      industry: "Energy", 
      description: "Energy management and monitoring systems" 
    },
    { 
      name: "Sree Krishna Agencies", 
      logo: KrishnaLogo,
      description: "whole sale groceries "
    },
    { 
      name: "The Luminous Academy", 
      logo: LuminousLogo,
      description: "At The Luminous Academy (TLA), we believe in cultivating a nurturing environment for childs"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Mr.Sagar Donakanti ",
      position: "CEO, RG infra Developers ",
      rating: 5,
      quote: "RunSera transformed our digital presence with their cutting-edge web development solutions. Their team delivered beyond our expectations.",
      logo: RgInfraLogo
    },
    {
      id: 2,
      name: "Mr. Thirumala Rao",
      position: "Director, RIVA Power Solutions ",
      rating: 4,
      quote: "The RIVA Power Solutions developed by RunSera increased our orders by 40%. Their attention to detail is remarkable.",
      logo: RivaLogo
    },
    {
      id: 3,
      name: "Mr. Arun Aduru",
      position: "Director, Sree Krishna Agencies",
      rating: 5,
      quote: "Our digital marketing campaigns by RunSera generated 3x more leads. Highly recommended for performance-driven strategies.",
      logo: KrishnaLogo
    }
  ];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/business-partners-handshake-global-corporate-with-technology-concept_53876-102615.jpg?ga=GA1.1.1955968501.1745332100&semt=ais_hybrid&w=740')",
        }}
      >
        <div className="absolute inset-0 bg-[#002E6E]/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-28 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-[#00AEEF] text-white rounded-full text-lg font-semibold mb-8">
              Our Clients
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Trusted <span className="text-[#00AEEF]">Partnerships</span>
            </h1>
            <p className="text-2xl text-gray-200 leading-relaxed">
              We collaborate with businesses across industries to drive mutual success and growth.
            </p>
          </div>
        </div>
        <div className="relative h-16 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 74" fill="none">
            <path d="M0,37 C240,74 480,74 720,37 C960,0 1200,0 1440,37 L1440,74 L0,74 Z" fill="#f0f9ff" />
          </svg>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#002E6E]">
              Our Valued Clients
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Businesses across industries trust us with their digital transformation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col group hover:-translate-y-1">
                <div className="h-48 bg-gray-100 flex items-center justify-center p-8">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-3 text-[#002E6E]">{client.name}</h3>
                  {client.industry && <p className="text-[#00AEEF] font-semibold mb-2">{client.industry}</p>}
                  <p className="text-gray-600 mb-4">{client.description}</p>
                </div>
                <div className="px-6 pb-6">
                  <div className="flex items-center text-[#00AEEF]">
                    <div className="flex space-x-1 mr-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">Successful Partnership</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-[#002E6E] rounded-full text-lg font-semibold mb-6">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#002E6E]">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Real feedback from our valued partners
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl p-6 hover:shadow-md transition-all border border-gray-100">
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full mr-4 overflow-hidden bg-white flex items-center justify-center">
                    <img 
                      src={testimonial.logo} 
                      alt={testimonial.name} 
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-[#002E6E] to-[#00AEEF] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Start Your Project?
          </h2>
          <p className="text-2xl text-gray-200 max-w-2xl mx-auto mb-12">
            Join our growing list of satisfied clients and experience the difference.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#002E6E] hover:bg-gray-100 font-medium px-8 py-4 rounded-lg transition-transform transform hover:scale-105"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Clients;