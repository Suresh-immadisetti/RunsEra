import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface JobOpening {
  title: string;
  location: string;
  type: string;
  description: string;
  experience: string;
}

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

function Careers() {
  const openings: JobOpening[] = [
    {
      title: "Junior Full Stack Developer",
      location: "Remote",
      type: "Full-time",
      description: "Develop web applications using modern frameworks like React and Node.js. Great opportunity for recent graduates.",
      experience: "0-2 years"
    },
    {
      title: "Entry-Level Java Developer",
      location: "Hybrid",
      type: "Full-time",
      description: "Work with Java applications and learn Spring framework. Training provided for fresh graduates.",
      experience: "0-1 years"
    },
    {
      title: "Associate DevOps Engineer",
      location: "Remote",
      type: "Full-time",
      description: "Learn CI/CD pipelines and cloud infrastructure with mentorship from senior team members.",
      experience: "1-3 years"
    },
    {
      title: "Junior Frontend Developer",
      location: "Hybrid",
      type: "Full-time",
      description: "Build responsive UIs using React with guidance from experienced developers.",
      experience: "0-2 years"
    },
    {
      title: "SQL Developer Trainee",
      location: "Remote",
      type: "Full-time",
      description: "Learn database design and SQL query optimization in a supportive team environment.",
      experience: "0-1 years"
    },
    {
      title: "QA Engineer (Entry Level)",
      location: "Hybrid",
      type: "Full-time",
      description: "Start your career in quality assurance with our comprehensive training program.",
      experience: "0-1 years"
    },
    {
      title: "Junior UI/UX Designer",
      location: "Remote",
      type: "Full-time",
      description: "Create user interfaces while learning from our design team. Portfolio required.",
      experience: "0-2 years"
    },
    {
      title: "Data Science Associate",
      location: "Hybrid",
      type: "Full-time",
      description: "Entry-level position for recent graduates with strong statistics and programming skills.",
      experience: "0-2 years"
    },
    {
      title: "Mobile Developer (Junior)",
      location: "Remote",
      type: "Full-time",
      description: "Build mobile apps using React Native with mentorship from senior developers.",
      experience: "1-3 years"
    },
    {
      title: "HR Technology Trainee",
      location: "Remote",
      type: "Full-time",
      description: "Begin your career in HR tech with our onboarding and training program.",
      experience: "0-1 years"
    }
  ];

  const handleApply = (position: string) => {
    const phoneNumber = '918309583591';
    const message = `Hi RunSera Team,\n\nI'm interested in applying for the ${position} position. Please share more details about the application process.\n\nBest regards,\n[Your Name]`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const benefits: Benefit[] = [
    { title: "Growth Opportunities", description: "Structured career path for junior developers", icon: "📈" },
    { title: "Mentorship Program", description: "Learn from experienced tech professionals", icon: "🧑‍🏫" },
    { title: "Training Budget", description: "Annual allowance for courses and certifications", icon: "🎓" },
    { title: "Beginner-Friendly", description: "Supportive environment for new developers", icon: "🛟" },
    { title: "Team Culture", description: "Collaborative and supportive environment", icon: "🤝" },
    { title: "Work-Life Balance", description: "Flexible hours for better productivity", icon: "⚖️" }
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
              Start Your <span className="text-[#00AEEF]">Tech Career</span>
            </h1>
            <p className="text-2xl text-gray-200 leading-relaxed">
              Launch your journey in software development with our entry-level positions
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#002E6E] mb-6">Why Start Your Career Here?</h2>
            <p className="text-xl text-[#0066cc]">Perfect environment for new developers to learn and grow</p>
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
      <section className="py-20 bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe]" id="open-positions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#002E6E] mb-6">Entry-Level Positions</h2>
            <p className="text-xl text-[#0066cc]">Begin your tech journey with these starter roles</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {openings.map((job, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#002E6E] mb-2">{job.title}</h3>
                    <div className="flex items-center mb-3">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {job.experience} experience
                      </span>
                    </div>
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
                    </div>
                  </div>
                  <div className="mt-6">
                    <button 
                      onClick={() => handleApply(job.title)}
                      className="w-full bg-gradient-to-r from-[#00AEEF] to-[#002E6E] text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all transform hover:scale-105"
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
            Ready to Start Your Tech Journey?
          </h2>
          <p className="text-2xl text-gray-200 max-w-2xl mx-auto mb-12">
            We're excited to help new developers launch their careers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const positions = document.getElementById('open-positions');
                positions?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block bg-white text-[#002E6E] hover:bg-gray-100 font-medium px-8 py-4 rounded-lg transition-transform transform hover:scale-105"
            >
              View Entry-Level Roles
            </button>
            <button 
              onClick={() => handleApply('an entry-level position at RunSera')}
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#002E6E] font-medium px-8 py-4 rounded-lg transition-transform transform hover:scale-105"
            >
              Submit Your Application
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Careers;