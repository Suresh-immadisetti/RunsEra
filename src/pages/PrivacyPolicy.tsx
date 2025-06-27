import React from 'react';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#002E6E] via-[#00AEEF] to-[#002E6E] text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Learn how we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg text-gray-700">
            <h2 className="text-3xl font-bold text-[#002E6E] mb-6">Our Privacy Commitment</h2>
            <p className="mb-6">
              At RunSera Digital Solutions Pvt Ltd, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h3 className="text-2xl font-semibold text-[#002E6E] mb-4 mt-8">Information We Collect</h3>
            <p className="mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">Register on our website</li>
              <li className="mb-2">Express an interest in obtaining information about us or our services</li>
              <li className="mb-2">Participate in activities on our website</li>
              <li className="mb-2">Contact us directly</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#002E6E] mb-4 mt-8">How We Use Your Information</h3>
            <p className="mb-4">
              We use personal information collected via our website for a variety of business purposes, including:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">To provide and operate our services</li>
              <li className="mb-2">To improve our website and services</li>
              <li className="mb-2">To communicate with you</li>
              <li className="mb-2">To comply with legal obligations</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#002E6E] mb-4 mt-8">Data Security</h3>
            <p className="mb-6">
              We implement appropriate technical and organizational measures to protect the security of your personal information. However, please remember that no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>

            <h3 className="text-2xl font-semibold text-[#002E6E] mb-4 mt-8">Changes to This Policy</h3>
            <p className="mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the bottom of this policy.
            </p>

            <h3 className="text-2xl font-semibold text-[#002E6E] mb-4 mt-8">Contact Us</h3>
            <p className="mb-6">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <p className="mb-2"><strong>Email:</strong> privacy@runsera.com</p>
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

export default PrivacyPolicy;