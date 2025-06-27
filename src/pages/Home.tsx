import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Users, Award, Clock, Headphones, Target, Eye, Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  const statsRef = useRef<HTMLDivElement>(null);
  const clientsContainerRef = useRef<HTMLDivElement>(null);

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
  };

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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#002E6E] via-[#00AEEF] to-[#002E6E] text-white min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00AEEF] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-[#002E6E] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  RUNS
                </span>{" "}
                Your Brand Into a New Digital{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  ERA
                </span>
              </h1>
            </div>
            <div className="animate-fade-in-up animation-delay-500">
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
                We are a leading digital marketing agency committed to helping businesses thrive in the digital landscape with innovative strategies and cutting-edge solutions.
              </p>
            </div>
            <div className="animate-fade-in-up animation-delay-1000">
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  onClick={() => handleButtonClick('contact-section')}
                  className="group bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-2xl hover:scale-105 flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => handleButtonClick('clients-section')}
                  className="group border-2 border-white text-white hover:bg-white hover:text-[#002E6E] px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-2xl flex items-center justify-center"
                >
                  View Our Work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                To empower businesses of all sizes with innovative, data-driven digital solutions that build strong brands, accelerate growth, and deliver measurable results across digital platforms.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-r from-[#002E6E] to-[#00AEEF] rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#002E6E] mb-4">Our Vision</h3>
              <p className="text-[#0066cc] leading-relaxed">
                To help businesses launch and grow in the digital universe through data-driven campaigns, futuristic storytelling, and performance-driven solutions that spark real results.
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

export default Home;