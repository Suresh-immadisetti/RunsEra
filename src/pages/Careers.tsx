import React from 'react';
import { MapPin, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

interface JobOpening {
  title: string;
  location: string;
  type: string;
  salary: string;
  description: string;
}

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

function Careers() {
  const openings: JobOpening[] = [
    {
      title: "Digital Marketing Specialist",
      location: "Remote",
      type: "Full-time",
      salary: "Competitive",
      description: "Join our team to create and execute innovative digital marketing campaigns."
    },
    {
      title: "Frontend Developer",
      location: "Hybrid",
      type: "Full-time",
      salary: "Competitive",
      description: "Build beautiful and responsive web applications using modern technologies."
    },
    {
      title: "SEO Analyst",
      location: "Remote",
      type: "Part-time",
      salary: "Competitive",
      description: "Help improve our clients' search engine rankings and online visibility."
    }
  ];

  const handleApply = (position: string) => {
    const phoneNumber = '918309583591';
    const message = `Hi RunSera Team,\n\nI'm interested in applying for the ${position} position. Please share more details about the application process.\n\nBest regards,\n[Your Name]`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const benefits: Benefit[] = [
    { title: "Growth Opportunities", description: "Continuous learning and career advancement", icon: "📈" },
    { title: "Flexible Work", description: "Remote and hybrid work options available", icon: "🏠" },
    { title: "Great Benefits", description: "Competitive salary and comprehensive benefits", icon: "💼" },
    { title: "Innovation Focus", description: "Work with cutting-edge technologies", icon: "🚀" },
    { title: "Team Culture", description: "Collaborative and supportive environment", icon: "🤝" },
    { title: "Work-Life Balance", description: "Flexible hours and time-off policies", icon: "⚖️" }
  ];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/business-people-shaking-hands-during-meeting_53876-13391.jpg?ga=GA1.1.1955968501.1745332100&semt=ais_hybrid&w=740')",
        }}
      >
        <div className="absolute inset-0 bg-[#002E6E]/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-28 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-[#00AEEF] text-white rounded-full text-lg font-semibold mb-8">
              Careers
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Join Our <span className="text-[#00AEEF]">Team</span>
            </h1>
            <p className="text-2xl text-gray-200 leading-relaxed">
              Be part of our mission to transform businesses digitally
            </p>
          </div>
        </div>
        <div className="relative h-16 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 74" fill="none">
            <path d="M0,37 C240,74 480,74 720,37 C960,0 1200,0 1440,37 L1440,74 L0,74 Z" fill="#f0f9ff" />
          </svg>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#002E6E] mb-6">Why Work With Us?</h2>
            <p className="text-xl text-[#0066cc]">Discover the benefits of joining the RunSera family</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] rounded-xl hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-[#002E6E] mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#002E6E] mb-6">Open Positions</h2>
            <p className="text-xl text-[#0066cc]">Find your next career opportunity</p>
          </div>
          
          <div className="space-y-6">
            {openings.map((job, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#002E6E] mb-3">{job.title}</h3>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1 text-[#00AEEF]" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1 text-[#00AEEF]" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-1 text-[#00AEEF]" />
                        {job.salary}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 md:ml-6">
                    <button 
                      onClick={() => handleApply(job.title)}
                      className="bg-gradient-to-r from-[#00AEEF] to-[#002E6E] text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all transform hover:scale-105"
                    >
                      Apply Now
                    </button>
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
            Ready to Make an Impact?
          </h2>
          <p className="text-2xl text-gray-200 max-w-2xl mx-auto mb-12">
            We're always looking for talented individuals who share our passion for digital innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-block bg-white text-[#002E6E] hover:bg-gray-100 font-medium px-8 py-4 rounded-lg transition-transform transform hover:scale-105"
            >
              View Open Positions
            </button>
            <button 
              onClick={() => handleApply('a position at RunSera')}
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#002E6E] font-medium px-8 py-4 rounded-lg transition-transform transform hover:scale-105"
            >
              Submit Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Careers;