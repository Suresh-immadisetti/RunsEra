import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { servicesList } from './servicesData';

// Assuming you have a background image in your assets
import headerBackground from '../assets/services-header-bg.jpg';

interface ServiceCardProps {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Header Section with Background Image */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: `url(${headerBackground})` }}
      >
        <div className="absolute inset-0 bg-[#002E6E]/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-28 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-[#00AEEF] text-white rounded-full text-lg font-semibold mb-8">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Comprehensive <span className="text-[#00AEEF]">Digital Solutions</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
              End-to-end digital services to help your business grow and succeed in the digital landscape.
            </p>
          </div>
        </div>
        <div className="relative h-16 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 74" fill="none">
            <path d="M0,37 C240,74 480,74 720,37 C960,0 1200,0 1440,37 L1440,74 L0,74 Z" fill="#f0f9ff" />
          </svg>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {servicesList.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                name={service.name}
                description={service.description}
                icon={<service.icon className="w-8 h-8 text-[#00AEEF]" />}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-[#002E6E] rounded-full text-lg font-semibold mb-4 md:mb-6">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#002E6E]">
              Our 4-Step Process
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              A structured methodology to ensure we deliver exceptional results for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <ProcessStep 
              number="01" 
              title="Discovery" 
              description="We begin by understanding your business, goals, and target audience." 
            />
            <ProcessStep 
              number="02" 
              title="Strategy" 
              description="We develop a customized digital marketing plan for your objectives." 
            />
            <ProcessStep 
              number="03" 
              title="Implementation" 
              description="Our team executes the strategy with precision and creativity." 
            />
            <ProcessStep 
              number="04" 
              title="Optimization" 
              description="We continuously analyze and refine to maximize results." 
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#002E6E] to-[#00AEEF] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto mb-8 md:mb-12">
            Let's discuss how we can help your business achieve its digital goals.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#002E6E] hover:bg-gray-100 font-medium px-6 py-3 md:px-8 md:py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

const ServiceCard: React.FC<ServiceCardProps> = ({ id, name, description, icon, image }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col group hover:-translate-y-1">
    <div className="h-48 overflow-hidden relative">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#002E6E]/60 to-transparent opacity-60"></div>
      <div className="absolute top-4 left-4 p-3 bg-white rounded-lg shadow-sm">
        {icon}
      </div>
    </div>
    <div className="p-6 flex-grow">
      <h3 className="text-xl font-semibold mb-3 text-[#002E6E]">{name}</h3>
      <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
    </div>
    <div className="px-6 pb-6">
      <Link
        to={`/services/${id}`}
        className="inline-flex items-center text-[#00AEEF] font-medium hover:text-[#002E6E] transition-colors"
      >
        Learn More <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
    </div>
  </div>
);

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => (
  <div className="text-center p-6 bg-white rounded-xl hover:shadow-md transition-all border border-gray-100 h-full">
    <div className="w-16 h-16 bg-gradient-to-r from-[#00AEEF] to-[#002E6E] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
      {number}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-[#002E6E]">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default ServicesPage;