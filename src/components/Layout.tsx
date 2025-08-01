// Layout.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, X, MessageCircle, Globe, ChevronDown,
  Facebook, Twitter, Instagram, Linkedin, Youtube
} from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import Chatbot from './Chatbot';
import blackLogo from '../assets/logo-black.png';
import whiteLogo from '../assets/logo-white.png';
import { servicesList, Service } from '../pages/servicesData';

// Pinterest icon component
const Pinterest = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
  </svg>
);

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const servicesButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setShowServicesDropdown(false);
  }, [location]);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleServiceSelect = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
    setShowServicesDropdown(false);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const navigateToServicesPage = () => {
    navigate('/services');
    window.scrollTo(0, 0);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#00AEEF] to-[#002E6E] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mb-8"></div>
          <h2 className="text-2xl font-bold text-white mb-4">Loading RunSera</h2>
          <p className="text-blue-200">Preparing your digital experience...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img src={blackLogo} alt="RunSera Logo" className="h-16" />
              </Link>
            </div>
            
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link 
                  to="/" 
                  className={`font-medium transition-colors ${
                    location.pathname === '/' 
                      ? 'text-[#00AEEF]' 
                      : 'text-gray-800 hover:text-[#00AEEF]'
                  }`}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className={`font-medium transition-colors ${
                    location.pathname === '/about' 
                      ? 'text-[#00AEEF]' 
                      : 'text-gray-800 hover:text-[#00AEEF]'
                  }`}
                >
                  About Us
                </Link>
                
                {/* Services Dropdown - Hoverable on desktop */}
                <div 
                  className="relative group"
                  ref={servicesButtonRef}
                  onMouseEnter={() => setShowServicesDropdown(true)}
                  onMouseLeave={() => setShowServicesDropdown(false)}
                >
                  <button
                    onClick={navigateToServicesPage}
                    className={`flex items-center font-medium transition-colors ${
                      location.pathname.startsWith('/services') 
                        ? 'text-[#00AEEF]' 
                        : 'text-gray-800 hover:text-[#00AEEF]'
                    }`}
                  >
                    Our Services
                    <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${
                      showServicesDropdown ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  <div className={`absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl z-50 border border-gray-200 transition-opacity duration-300 ${
                    showServicesDropdown ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}>
                    <div className="py-1">
                      {servicesList.map((service: Service) => (
                        <button
                          key={service.id}
                          onClick={() => handleServiceSelect(service.id)}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {service.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                
                <Link 
                  to="/clients" 
                  className={`font-medium transition-colors ${
                    location.pathname === '/clients' 
                      ? 'text-[#00AEEF]' 
                      : 'text-gray-800 hover:text-[#00AEEF]'
                  }`}
                >
                  Our Clients
                </Link>
                <Link 
                  to="/careers" 
                  className={`font-medium transition-colors ${
                    location.pathname === '/careers' 
                      ? 'text-[#00AEEF]' 
                      : 'text-gray-800 hover:text-[#00AEEF]'
                  }`}
                >
                  Careers
                </Link>
                <Link 
                  to="/blogs" 
                  className={`font-medium transition-colors ${
                    location.pathname === '/blogs' 
                      ? 'text-[#00AEEF]' 
                      : 'text-gray-800 hover:text-[#00AEEF]'
                  }`}
                >
                  Blogs
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-[#00AEEF] to-[#002E6E] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 hover:text-[#00AEEF]"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                onClick={handleMenuItemClick}
                className={`block px-3 py-2 font-medium ${
                  location.pathname === '/' 
                    ? 'text-[#00AEEF]' 
                    : 'text-gray-800 hover:text-[#00AEEF]'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={handleMenuItemClick}
                className={`block px-3 py-2 font-medium ${
                  location.pathname === '/about' 
                    ? 'text-[#00AEEF]' 
                    : 'text-gray-800 hover:text-[#00AEEF]'
                }`}
              >
                About Us
              </Link>
              
              {/* Mobile Services Dropdown - Click to open */}
              <div className="relative">
                <button
                  onClick={() => setShowServicesDropdown(!showServicesDropdown)}
                  className={`flex items-center w-full px-3 py-2 font-medium ${
                    location.pathname.startsWith('/services') 
                      ? 'text-[#00AEEF]' 
                      : 'text-gray-800 hover:text-[#00AEEF]'
                  }`}
                >
                  Our Services
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${
                    showServicesDropdown ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {showServicesDropdown && (
                  <div className="pl-4 mt-1 space-y-1">
                    {servicesList.map((service: Service) => (
                      <button
                        key={service.id}
                        onClick={() => handleServiceSelect(service.id)}
                        className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {service.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <Link 
                to="/clients" 
                onClick={handleMenuItemClick}
                className={`block px-3 py-2 font-medium ${
                  location.pathname === '/clients' 
                    ? 'text-[#00AEEF]' 
                    : 'text-gray-800 hover:text-[#00AEEF]'
                }`}
              >
                Our Clients
              </Link>
              <Link 
                to="/careers" 
                onClick={handleMenuItemClick}
                className={`block px-3 py-2 font-medium ${
                  location.pathname === '/careers' 
                    ? 'text-[#00AEEF]' 
                    : 'text-gray-800 hover:text-[#00AEEF]'
                }`}
              >
                Careers
              </Link>
              <Link 
                to="/blogs" 
                onClick={handleMenuItemClick}
                className={`block px-3 py-2 font-medium ${
                  location.pathname === '/blogs' 
                    ? 'text-[#00AEEF]' 
                    : 'text-gray-800 hover:text-[#00AEEF]'
                }`}
              >
                Blogs
              </Link>
              <Link 
                to="/contact" 
                onClick={handleMenuItemClick}
                className={`block px-3 py-2 font-medium ${
                  location.pathname === '/contact' 
                    ? 'text-[#00AEEF]' 
                    : 'text-gray-800 hover:text-[#00AEEF]'
                }`}
              >
                Contact Us
              </Link>
              <Link 
                to="/privacy-policy" 
                onClick={handleMenuItemClick}
                className={`block px-3 py-2 font-medium ${
                  location.pathname === '/privacy-policy' 
                    ? 'text-[#00AEEF]' 
                    : 'text-gray-800 hover:text-[#00AEEF]'
                }`}
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service" 
                onClick={handleMenuItemClick}
                className={`block px-3 py-2 font-medium ${
                  location.pathname === '/terms-of-service' 
                    ? 'text-[#00AEEF]' 
                    : 'text-gray-800 hover:text-[#00AEEF]'
                }`}
              >
                Terms of Service
              </Link>
              <Link 
                to="/cookie-policy" 
                onClick={handleMenuItemClick}
                className={`block px-3 py-2 font-medium ${
                  location.pathname === '/cookie-policy' 
                    ? 'text-[#00AEEF]' 
                    : 'text-gray-800 hover:text-[#00AEEF]'
                }`}
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#002E6E] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <img src={whiteLogo} alt="RunSera Logo" className="h-16" />
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Your trusted partner for digital transformation and growth. We help businesses thrive in the digital landscape with cutting-edge solutions.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/share/1EAHt9keH7/" target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://x.com/RunsEra_Digital" target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/runseradigitalsolutions?igsh=MWFpZHdwZmE5a2w0ZA==" target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/runsera-digital-solutions-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="https://pin.it/m8L5oYfIu" target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition">
                  <Pinterest />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-300">
                <li><Link to="/" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#00AEEF] transition-colors">Home</Link></li>
                <li><Link to="/about" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#00AEEF] transition-colors">About Us</Link></li>
                <li><Link to="/services" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#00AEEF] transition-colors">Services</Link></li>
                <li><Link to="/clients" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#00AEEF] transition-colors">Our Clients</Link></li>
                <li><Link to="/careers" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#00AEEF] transition-colors">Careers</Link></li>
                <li><Link to="/blogs" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#00AEEF] transition-colors">Blogs</Link></li>
                <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#00AEEF] transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p>+91-8309583591</p>
                    <p>+91-9100303592</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@runsera.com
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Hyderabad, India
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 mb-4 md:mb-0 text-sm">
                &copy; {new Date().getFullYear()} RunSera. All rights reserved.
              </p>
              <div className="flex space-x-6 text-gray-300 text-sm">
                <Link to="/privacy-policy" className="hover:text-[#00AEEF] transition-colors">Privacy Policy</Link>
                <Link to="/terms-of-service" className="hover:text-[#00AEEF] transition-colors">Terms of Service</Link>
                <Link to="/cookie-policy" className="hover:text-[#00AEEF] transition-colors">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp and Chatbot */}
      <WhatsAppButton />
      <Chatbot />
    </div>
  );
}

export default Layout;