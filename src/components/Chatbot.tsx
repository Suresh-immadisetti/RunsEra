import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

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
        "I'd be happy to help you with that. Can you provide more details?",
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
        <MessageCircle className="w-6 h-6" />
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

export default Chatbot;