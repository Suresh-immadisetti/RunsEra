import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/918309583591?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-2xl transition-all hover:scale-110 animate-bounce"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="ml-2 hidden sm:block font-semibold">WhatsApp</span>
      </a>
    </div>
  );
}

export default WhatsAppButton;