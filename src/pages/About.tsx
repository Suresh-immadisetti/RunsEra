import React from 'react';
import { Shield, Zap, Award, ArrowRight, Rocket, Users, BarChart, Lightbulb, Clock, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<CardProps> = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl p-6 border shadow-sm hover:shadow-md transition duration-300 text-center">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ReasonCard: React.FC<CardProps> = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl p-6 hover:bg-blue-50 transition duration-300 border border-gray-100">
    <div className="flex items-start gap-4">
      <div>{icon}</div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  </div>
);

const About: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Header Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/team-business-people-putting-hands-together_53876-124515.jpg?ga=GA1.1.1955968501.1745332100&semt=ais_hybrid&w=740')",
        }}
      >
        <div className="absolute inset-0 bg-[#002E6E]/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-28 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-[#00AEEF] text-white rounded-full text-lg font-semibold mb-8">
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              About <span className="text-[#00AEEF]">RunSera</span>
            </h1>
            <p className="text-2xl text-gray-200 leading-relaxed">
              Leading digital transformation with innovation, expertise, and unwavering commitment to client success
            </p>
          </div>
        </div>
        <div className="relative h-16 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 74" fill="none">
            <path d="M0,37 C240,74 480,74 720,37 C960,0 1200,0 1440,37 L1440,74 L0,74 Z" fill="#f0f9ff" />
          </svg>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002E6E] mb-6">Who We Are</h2>
              <div className="text-[#0066cc] space-y-4">
                <p className="text-lg leading-relaxed">
                  Runsera Digital Solutions Pvt. Ltd. is a modern digital-first agency born from the vision of empowering brands to thrive in the ever-evolving digital world. Founded in Hyderabad and serving clients across India, we specialize in result-driven services such as SEO, Google & Meta Ads, Website Design & Development, Social Media Management, Content Creation, Email Marketing, Influencer Outreach, and Brand Identity.
                </p>
                <p className="text-lg leading-relaxed">
                  The name Runsera represents "Runs into a New Era" — and that's exactly what we help businesses do. With a curated team of expert freelancers, designers, developers, and marketers, Runsera offers agency-quality work with the flexibility and personal touch of a startup.
                </p>
                <p className="text-lg leading-relaxed">
                  Whether you're launching a new brand or looking to scale an existing business, we build tailored digital strategies that help you stand out, grow faster, and connect deeply with your audience.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-[#00AEEF]" />
                  <span className="text-[#002E6E]">Trusted & Secure</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-orange-500" />
                  <span className="text-[#002E6E]">Fast Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-green-500" />
                  <span className="text-[#002E6E]">Award Winning</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#00AEEF] to-[#002E6E] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose RunSera?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <ArrowRight className="w-5 h-5 mr-3 text-orange-400" />
                    Expert team with 1+ years experience
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="w-5 h-5 mr-3 text-orange-400" />
                    10+ successful projects delivered
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="w-5 h-5 mr-3 text-orange-400" />
                    24/7 customer support
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="w-5 h-5 mr-3 text-orange-400" />
                    Proven ROI and growth results
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-[#002E6E] mb-4">What Drives Us</h2>
            <p className="text-lg text-[#0066cc]">The core principles that guide our work and define our culture.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard 
              icon={<Rocket className="h-10 w-10 text-[#00AEEF]" />} 
              title="Innovation" 
              description="Exploring new tech and ideas to keep our clients ahead." 
            />
            <ValueCard 
              icon={<BarChart className="h-10 w-10 text-[#00AEEF]" />} 
              title="Data-Driven" 
              description="Smart decisions backed by measurable outcomes." 
            />
            <ValueCard 
              icon={<Lightbulb className="h-10 w-10 text-[#00AEEF]" />} 
              title="Creativity" 
              description="Fresh ideas that combine art and science." 
            />
            <ValueCard 
              icon={<Users className="h-10 w-10 text-[#00AEEF]" />} 
              title="Partnership" 
              description="Aligned with your goals as an extension of your team." 
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-extrabold text-[#002E6E] mb-6">Our Mission</h3>
              <p className="text-lg text-[#0066cc]">
                To empower businesses of all sizes with innovative, data-driven digital solutions that build strong brands, accelerate growth, and deliver measurable results across digital platforms.
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg" 
                alt="Mission" 
                className="rounded-xl shadow-lg w-full" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg" 
                alt="Vision" 
                className="rounded-xl shadow-lg w-full" 
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-4xl font-extrabold text-[#00AEEF] mb-6">Our Vision</h3>
              <p className="text-lg text-[#0066cc]">
                To help businesses launch and grow in the digital universe through data-driven campaigns, futuristic storytelling, and performance-driven solutions that spark real results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-[#002E6E] mb-4">The RunSera Difference</h2>
            <p className="text-lg text-[#0066cc]">What sets us apart from other digital marketing agencies.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ReasonCard 
              icon={<Award className="h-10 w-10 text-[#00AEEF]" />} 
              title="Expert Team" 
              description="Specialists across all key areas of digital marketing." 
            />
            <ReasonCard 
              icon={<Target className="h-10 w-10 text-[#00AEEF]" />} 
              title="Results-Focused" 
              description="We focus on results, not vanity metrics." 
            />
            <ReasonCard 
              icon={<Clock className="h-10 w-10 text-[#00AEEF]" />} 
              title="Responsive Support" 
              description="We prioritize communication and fast responses." 
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-[#002E6E] to-[#00AEEF] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-2xl text-gray-200 max-w-2xl mx-auto mb-12">
            Partner with RunSera to create impactful digital experiences that drive real business results.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#002E6E] hover:bg-gray-100 font-medium px-8 py-4 rounded-lg transition-transform transform hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;