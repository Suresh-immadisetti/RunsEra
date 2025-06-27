import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { servicesList, getServiceById } from './servicesData';
import ReactMarkdown from 'react-markdown';

const ServiceDetails: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = getServiceById(serviceId || '');

  if (!service) {
    return (
      <div className="pt-16 flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#00AEEF] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Service not found</p>
          <Link to="/services" className="text-[#00AEEF] hover:underline mt-4 inline-block">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = servicesList.findIndex(s => s.id === serviceId);
  const prevService = currentIndex > 0 ? servicesList[currentIndex - 1] : null;
  const nextService = currentIndex < servicesList.length - 1 ? servicesList[currentIndex + 1] : null;

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-32"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 46, 110, 0.85), rgba(0, 174, 239, 0.85)), url(${service.image})`,
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/services"
            className="inline-flex items-center text-white hover:text-gray-200 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Services
          </Link>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {service.name}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown>{service.content}</ReactMarkdown>
          </div>

          {/* Benefits Section */}
          <div className="mt-16 bg-[#f0f9ff] p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#002E6E]">
              Benefits of Our {service.name} Service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4">
                    <div className="w-6 h-6 bg-[#00AEEF] rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#002E6E]">
              Our {service.name} Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.process.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#00AEEF] to-[#002E6E] rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#002E6E]">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-4">
            {prevService && (
              <Link
                to={`/services/${prevService.id}`}
                className="inline-flex items-center text-[#00AEEF] hover:text-[#002E6E] transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-1" /> {prevService.name}
              </Link>
            )}
            {nextService && (
              <Link
                to={`/services/${nextService.id}`}
                className="inline-flex items-center text-[#00AEEF] hover:text-[#002E6E] transition-colors sm:ml-auto"
              >
                {nextService.name} <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;