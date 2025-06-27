import React from 'react';
import { Link } from 'react-router-dom';

function CookiePolicy() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#002E6E] via-[#00AEEF] to-[#002E6E] text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Learn how we use cookies and similar technologies on our website.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg text-gray-700">
            <h2 className="text-3xl font-bold text-[#002E6E] mb-6">Our Use of Cookies</h2>
            <p className="mb-6">
              This Cookie Policy explains how RunSera Digital Solutions Pvt Ltd ("we", "us", or "our") uses cookies and similar technologies when you visit our website.
            </p>

            <h3 className="text-2xl font-semibold text-[#002E6E] mb-4 mt-8">What Are Cookies?</h3>
            <p className="mb-6">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
            </p>

            <h3 className="text-2xl font-semibold text-[#002E6E] mb-4 mt-8">How We Use Cookies</h3>
            <p className="mb-4">
              We use cookies for several purposes:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2"><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
              <li className="mb-2"><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li className="mb-2"><strong>Functionality Cookies:</strong> Enable enhanced functionality and personalization</li>
              <li className="mb-2"><strong>Targeting Cookies:</strong> Used to deliver relevant ads to you</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#002E6E] mb-4 mt-8">Managing Cookies</h3>
            <p className="mb-6">
              You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
            </p>

            <h3 className="text-2xl font-semibold text-[#002E6E] mb-4 mt-8">Changes to This Policy</h3>
            <p className="mb-6">
              We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data use policies. When we make changes, we will update the "Last Updated" date at the bottom of this policy.
            </p>

            <h3 className="text-2xl font-semibold text-[#002E6E] mb-4 mt-8">Contact Us</h3>
            <p className="mb-6">
              If you have any questions about our use of cookies, please contact us at:
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

export default CookiePolicy;