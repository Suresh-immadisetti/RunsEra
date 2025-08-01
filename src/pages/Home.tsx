import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Users, Award, Clock, Headphones, Target, Eye, Heart, ChevronDown, X, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesList } from './servicesData';

// Import client logos from assets
import AlekasLogo from '../assets/clients/alekas-logo.png';
import PragatiLogo from '../assets/clients/pragati-logo.png';
import AkarshLogo from '../assets/clients/akarsh-logo.png';
import RgInfraLogo from '../assets/clients/rg-infra-logo.png';
import RivaLogo from '../assets/clients/riva-logo.png';
import LuminousLogo from '../assets/clients/luminous-logo.png';
import KrishnaLogo from '../assets/clients/krihna-logo.png';

function Home() {
  const clients = [
    { 
      name: "Alekas Solutions Pvt Ltd", 
      logo: AlekasLogo,
      description: "Technology solutions provider"
    },
    { 
      name: "Pragati Green Meadows and Resorts Pvt Ltd", 
      logo: PragatiLogo,
      description: "Luxury hospitality group"
    },
    { 
      name: "Akarsh Digitals Pvt Ltd", 
      logo: AkarshLogo,
      description: "Information Technologies"
    },
    { 
      name: "RG Infra Developers", 
      logo: RgInfraLogo,
      description: "Construction and infrastructure"
    },
    { 
      name: "Riva Power Solutions", 
      logo: RivaLogo,
      description: "Energy management systems"
    },
    { 
      name: "Sree Krishna Agencies", 
      logo: KrishnaLogo,
      description: "Whole sale groceries"
    },
    { 
      name: "The Luminous Academy", 
      logo: LuminousLogo,
      description: "Nurturing environment for children's growth"
    }
  ];

  const industries = [
    { name: "Healthcare", icon: "🏥", description: "Digital solutions for healthcare providers" },
    { name: "E-commerce", icon: "🛒", description: "Online retail and marketplace solutions" },
    { name: "Education", icon: "🎓", description: "EdTech and learning management systems" },
    { name: "Real Estate", icon: "🏠", description: "Property management and listing platforms" },
    { name: "Finance", icon: "💰", description: "Fintech and banking solutions" },
    { name: "Manufacturing", icon: "🏭", description: "Industrial automation and IoT solutions" },
    { name: "Tech Startups", icon: "🚀", description: "Agile development and scalable tech solutions for startups" },
    { name: "Local Businesses", icon: "🏪", description: "Tailored digital tools for small and local businesses" },
    { name: "Food & Restaurants", icon: "🍽️", description: "Smart digital experiences for dining, delivery, and hospitality services" }
  ];

  // State for animated counters
  const [happyClients, setHappyClients] = useState(0);
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [yearsExperience, setYearsExperience] = useState(0);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const clientsContainerRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle button clicks with smooth scrolling
  const handleButtonClick = (sectionId?: string) => {
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      scrollToTop();
    }
    setShowServicesDropdown(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesButtonRef.current && !servicesButtonRef.current.contains(event.target as Node)) {
        setShowServicesDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Animate counters when stats section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate counters
            const animateCounter = (
              setter: React.Dispatch<React.SetStateAction<number>>,
              target: number,
              duration: number
            ) => {
              let start = 0;
              const increment = target / (duration / 16); // 60fps
              
              const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                  setter(target);
                  clearInterval(timer);
                } else {
                  setter(Math.floor(start));
                }
              }, 16);
            };

            animateCounter(setHappyClients, 10, 1000);
            animateCounter(setProjectsCompleted, 5, 1000);
            animateCounter(setYearsExperience, 1, 1000);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  // Infinite scrolling for clients
  useEffect(() => {
    const container = clientsContainerRef.current;
    if (!container) return;

    const scrollSpeed = 1; // Adjust speed as needed (lower is slower)
    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= container.scrollWidth / 2) {
        scrollPosition = 0;
      }
      container.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div>
      {/* Chatbot Component */}
      <Chatbot />

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-[#002E6E]">RunSera</Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-[#00AEEF] transition-colors">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-[#00AEEF] transition-colors">About Us</Link>
              <div className="relative">
                <button 
                  ref={servicesButtonRef}
                  onClick={() => setShowServicesDropdown(!showServicesDropdown)}
                  className="flex items-center text-gray-700 hover:text-[#00AEEF] transition-colors"
                >
                  Our Services
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${showServicesDropdown ? 'rotate-180' : ''}`} />
                </button>
                {showServicesDropdown && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl z-50 border border-gray-200">
                    <div className="py-1">
                      {servicesList.map((service) => (
                        <Link
                          key={service.id}
                          to={`/services#${service.id}`}
                          onClick={() => setShowServicesDropdown(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <button 
                onClick={() => handleButtonClick('clients-section')}
                className="text-gray-700 hover:text-[#00AEEF] transition-colors"
              >
                Our Clients
              </button>
              <Link to="/careers" className="text-gray-700 hover:text-[#00AEEF] transition-colors">Careers</Link>
              <Link to="/blog" className="text-gray-700 hover:text-[#00AEEF] transition-colors">Blog</Link>
            </div>
            <div className="flex items-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-[#00AEEF] to-[#002E6E] text-white px-4 py-2 rounded-md hover:shadow-md transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-br from-[#002E6E] via-[#00AEEF] to-[#002E6E] text-white pt-24 pb-32 overflow-hidden">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
            backgroundBlendMode: "overlay"
          }}
        ></div>
        
        {/* Curved bottom shape */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg 
            viewBox="0 0 1440 120" 
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path 
              fill="#f0f9ff" 
              fillOpacity="1" 
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,96C960,107,1056,117,1152,117.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00AEEF] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-[#002E6E] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="relative inline-block">
                  <span className="absolute inset-0 [text-shadow:_0_0_8px_black,0_0_8px_black,0_0_2px_black] opacity-80">
                    RUNS
                  </span>
                  <span className="relative bg-gradient-to-r from-[#FF8C00] to-[#FFD700] bg-clip-text text-transparent font-extrabold tracking-tight">
                    RUNS
                  </span>
                </span>{" "}
                
                <span className="relative text-gray-200 text-2xl md:text-4xl font-normal">
                  <span className="absolute inset-0 [text-shadow:_0_0_4px_black] opacity-50"></span>
                  <span className="relative">
                    your gateway to Tech Innovation, Talent Solutions & Marketing Success — The{" "}
                  </span>
                </span>
                
                <span className="relative inline-block">
                  <span className="absolute inset-0 [text-shadow:_0_0_8px_black,0_0_8px_black,0_0_2px_black] opacity-80">
                    ERA
                  </span>
                  <span className="relative bg-gradient-to-r from-[#FF8C00] to-[#FFD700] bg-clip-text text-transparent font-extrabold tracking-tight">
                    ERA
                  </span>
                </span>{" "}
                
                <span className="relative text-gray-200 text-2xl md:text-4xl font-normal">
                  <span className="absolute inset-0 [text-shadow:_0_0_4px_black] opacity-50"></span>
                  <span className="relative">
                    of growth.
                  </span>
                </span>
              </h1>
            </div>
            <div className="animate-fade-in-up animation-delay-500">
              <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
                We are a results-driven technology and digital solutions company, empowering businesses to grow with innovative software development and strategic digital marketing.
              </p>
            </div>
            <div className="animate-fade-in-up animation-delay-1000">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => handleButtonClick('contact-section')}
                  className="group bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 py-3 rounded-full text-base font-semibold transition-all hover:shadow-lg hover:scale-105 flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => handleButtonClick('clients-section')}
                  className="group border-2 border-white text-white hover:bg-white hover:text-[#002E6E] px-6 py-3 rounded-full text-base font-semibold transition-all hover:shadow-lg flex items-center justify-center"
                >
                  View Our Clients
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Scrolling Section */}
      <section id="clients-section" className="py-16 bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#002E6E] mb-4">Clients We've Worked With</h2>
            <p className="text-[#0066cc]">We've had the privilege of working with the following companies on their digital journeys</p>
          </div>
        </div>
        
        <div className="relative">
          <div 
            ref={clientsContainerRef}
            className="flex overflow-x-hidden whitespace-nowrap py-4"
          >
            {[...clients, ...clients].map((client, index) => (
              <div 
                key={`${client.name}-${index}`} 
                className="inline-flex flex-shrink-0 bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-all hover:-translate-y-1 mx-4 min-w-[300px] border border-blue-100"
              >
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 mb-4 flex items-center justify-center">
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      className="h-full object-contain max-w-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = 'https://via.placeholder.com/150';
                      }}
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-[#002E6E] text-lg">{client.name}</h3>
                    <p className="text-sm text-[#0066cc] whitespace-normal">{client.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-20 bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#002E6E] mb-6">Our Purpose</h2>
            <p className="text-xl text-[#0066cc]">Driving digital transformation with purpose and passion</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-r from-[#00AEEF] to-[#002E6E] rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#002E6E] mb-4">Our Mission</h3>
              <p className="text-[#0066cc] leading-relaxed">
                To empower businesses with intelligent software solutions, strategic talent acquisition, and impactful digital marketing — enabling sustainable growth, operational efficiency, and brand leadership in an ever-evolving market.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-r from-[#002E6E] to-[#00AEEF] rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#002E6E] mb-4">Our Vision</h3>
              <p className="text-[#0066cc] leading-relaxed">
                To be a trusted partner for businesses across industries by delivering next-gen software products, sourcing top-tier talent, and crafting compelling digital narratives that drive lasting success and transformation.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#002E6E] mb-4">Our Values</h3>
              <p className="text-[#0066cc] leading-relaxed">
                Innovation, integrity, excellence, and collaboration form the foundation of everything we do, ensuring exceptional results for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#002E6E] mb-6">Industries We Serve</h2>
            <p className="text-xl text-[#0066cc]">Delivering specialized solutions across diverse industry verticals</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-blue-100 hover:border-[#00AEEF] hover:-translate-y-1">
                <div className="text-center">
                  <div className="text-5xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-[#002E6E] mb-3">{industry.name}</h3>
                  <p className="text-[#0066cc]">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-gradient-to-r from-[#002E6E] to-[#00AEEF] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white bg-opacity-20 rounded-full">
                  <Users className="w-8 h-8 text-[#00AEEF]" />
                </div>
              </div>
              <h3 className="text-4xl font-bold mb-2">{happyClients}+</h3>
              <p className="text-blue-200">Happy Clients</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white bg-opacity-20 rounded-full">
                  <Award className="w-8 h-8 text-orange-500" />
                </div>
              </div>
              <h3 className="text-4xl font-bold mb-2">{projectsCompleted}+</h3>
              <p className="text-blue-200">Projects Completed</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white bg-opacity-20 rounded-full">
                  <Clock className="w-8 h-8 text-green-500" />
                </div>
              </div>
              <h3 className="text-4xl font-bold mb-2">{yearsExperience}+</h3>
              <p className="text-blue-200">Years Experience</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white bg-opacity-20 rounded-full">
                  <Headphones className="w-8 h-8 text-purple-500" />
                </div>
              </div>
              <h3 className="text-4xl font-bold mb-2">24/7</h3>
              <p className="text-blue-200">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-section" className="py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#002E6E] mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-[#0066cc] max-w-2xl mx-auto mb-10">
            Let's discuss how we can help your business achieve its digital goals.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-[#00AEEF] to-[#002E6E] text-white hover:shadow-2xl font-medium px-8 py-4 rounded-lg transition-transform transform hover:scale-105"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}

// Chatbot Component
function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, isBot: false }]);
    
    setTimeout(() => {
      const responses = [
        "Thank you for your message! Our team will get back to you soon.",
        "For immediate assistance, please contact us at +91-8309583591 or use the WhatsApp button."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { text: randomResponse, isBot: true }]);
    }, 1000);
    
    setInput('');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-[#00AEEF] to-[#002E6E] hover:from-[#0099d4] hover:to-[#001f4d] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 8V4H8" />
          <rect width="16" height="12" x="4" y="8" rx="2" />
          <path d="M2 14h2" />
          <path d="M20 14h2" />
          <path d="M15 13v2" />
          <path d="M9 13v2" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute bottom-20 left-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-[#00AEEF] to-[#002E6E] text-white p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold">RunSera Support</h3>
                <p className="text-sm text-blue-100">We're here to help!</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="h-64 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-2xl ${
                    message.isBot
                      ? 'bg-white text-gray-800 shadow-md'
                      : 'bg-gradient-to-r from-[#00AEEF] to-[#002E6E] text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSubmit} className="p-4 bg-white border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#00AEEF] to-[#002E6E] hover:from-[#0099d4] hover:to-[#001f4d] text-white p-2 rounded-full transition-all"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Home;