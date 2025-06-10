
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">🏝️ Long Tail Boat Koh Samui</h3>
            <p className="text-gray-300 leading-relaxed">
              Experience the authentic charm of Koh Samui with our private long tail boat tours. 
              Professional service, unbeatable prices, and unforgettable memories.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 info@longtailboatkohsamui.com</p>
              <p>📱 +66 123 456 789</p>
              <p>💬 WhatsApp: +66 123 456 789</p>
              <p>📍 Koh Samui, Thailand</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <div className="space-y-2">
              <Link to="/terms-conditions" className="block text-gray-300 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/legal-mentions" className="block text-gray-300 hover:text-white transition-colors">
                Legal Mentions
              </Link>
              <Link to="/sales-conditions" className="block text-gray-300 hover:text-white transition-colors">
                General Sales Conditions
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Long Tail Boat Koh Samui. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
