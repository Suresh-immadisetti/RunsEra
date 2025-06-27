import React from 'react';
import { Link } from 'react-router-dom';

function TermsOfService() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#002E6E] via-[#00AEEF] to-[#002E6E] text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              The legal terms and conditions governing your use of our services.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg text-gray-700">
            <h2 className="text-3xl font-bold text-[#002E6E] mb-6">Terms and Conditions</h2>
            <p className="mb-6">
              Welcome to RunSera Digital Solutions Pvt Ltd. These Terms of Service ("Terms") govern your access to and use of our website, services, and applications (collectively, the "Services").
            </p>

            <h3 className="text-2xl font-semibold text-[#002E6E] mb-4 mt-8">1. Acceptance of Terms</h3>
            <p className="mb-6">
              By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our Services.
            </p>

            <h3 className="text-2xl font-semibold text-[#002E6E] mb-4 mt-8">2. Changes to Terms</h3>
            <p className="mb-6">
              We reserve the right to modify these Terms at any time. We will provide notice of any changes by posting the updated Terms on our website and updating the "Last Updated" date.
            </p>

            <h3 className="text-2xl font-semibold text-[#002E6E] mb-4 mt-8">3. Use of Services</h3>
            <p className="mb-4">
              You agree not to use our Services to:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">Violate any laws or regulations</li>
              <li className="mb-2">Infringe on any intellectual property rights</li>
              <li className="mb-2">Transmit any viruses or harmful code</li>
              <li className="mb-2">Engage in any fraudulent or deceptive activities</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#002E6E] mb-4 mt-8">4. Intellectual Property</h3>
            <p className="mb-6">
              All content included on our website, such as text, graphics, logos, images, and software, is the property of RunSera or its content suppliers and protected by intellectual property laws.
            </p>

            <h3 className="text-2xl font-semibold text-[#002E6E] mb-4 mt-8">5. Limitation of Liability</h3>
            <p className="mb-6">
              To the maximum extent permitted by law, RunSera shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our Services.
            </p>

            <h3 className="text-2xl font-semibold text-[#002E6E] mb-4 mt-8">6. Governing Law</h3>
            <p className="mb-6">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>

            <h3 className="text-2xl font-semibold text-[#002E6E] mb-4 mt-8">7. Contact Information</h3>
            <p className="mb-6">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="mb-2"><strong>Email:</strong> legal@runsera.com</p>
            <p className="mb-2"><strong>Phone:</strong> +91-8309583591</p>
            <p><strong>Address:</strong> Hyderabad, India</p>

            <div className="mt-12 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TermsOfService;