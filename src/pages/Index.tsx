
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, MapPin, Clock, Users, Camera, Phone } from 'lucide-react';
import BookingForm from '../components/BookingForm';
import ImageGallery from '../components/ImageGallery';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const Index = () => {
  const scrollToBooking = () => {
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-b from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-80"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              🏝️ Book Your Private Long-tail Boat Tour in Koh Samui
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Treat yourself to an unforgettable day aboard a private long-tail boat, departing from Koh Samui.
            </p>
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300"
              onClick={scrollToBooking}
            >
              Book Your Boat Now
            </Button>
          </div>
        </div>
      </section>

      {/* Adventure Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            📍 An Authentic Adventure to the Most Beautiful Islands
          </h2>
          <div className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 space-y-6">
            <p>
              Discover the hidden gems of southern Koh Samui on a private and 100% personalized tour.
            </p>
            <p>
              Navigate aboard a traditional Thai boat to the wild beaches of Pig Island (Koh Madsum), 
              the reefs of Koh Tan, or the deserted expanses of Koh Rap.
            </p>
            <p>
              Whether you're a couple, family, or group of friends, enjoy a unique moment off the beaten path.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            ✨ Why Book With Us?
          </h2>
          <h3 className="text-xl text-center mb-12 text-gray-600">What makes the difference:</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: "✅", title: "Completely Private Tour", desc: "just for you" },
              { icon: "🐷", title: "Stop at Pig Island", desc: "the island of pigs" },
              { icon: "🏝️", title: "Swimming & Relaxation", desc: "on deserted beaches" },
              { icon: "🛥️", title: "Experienced Local Skipper", desc: "professional guidance" },
              { icon: "🚐", title: "Hotel Transfer Included", desc: "areas: Chaweng, Lamai, Bophut..." },
              { icon: "🎒", title: "Customization Available", desc: "with à la carte options" }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            💰 Clear and Transparent Pricing
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Package</th>
                    <th className="px-6 py-4 text-left">Base Price (1 to 5 people)</th>
                    <th className="px-6 py-4 text-left">Extra Person (max 10)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-semibold">Half Day (4h)</td>
                    <td className="px-6 py-4 text-blue-600 font-bold">5,000 THB</td>
                    <td className="px-6 py-4">+1,000 THB / person</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Full Day (6–8h)</td>
                    <td className="px-6 py-4 text-blue-600 font-bold">6,500 THB</td>
                    <td className="px-6 py-4">+1,000 THB / person</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 text-center space-y-4">
              <p className="flex items-center justify-center text-lg">
                <Users className="mr-2 text-blue-600" />
                Maximum 10 people per boat
              </p>
              <p className="flex items-center justify-center text-lg text-red-600">
                🚫 If you are more than 10, please book a second boat
              </p>
              <p className="flex items-center justify-center text-lg text-green-600">
                <CheckCircle className="mr-2" />
                No hidden fees – everything is clear and included
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            🎒 Customize Your Experience
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Make your tour even more special with these à la carte options. 
            The price updates automatically in the booking form.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: "🧊", title: "Cooler with Fresh Drinks", desc: "Water, sodas, local beers", price: "1,000 THB" },
              { icon: "🎣", title: "Fishing Equipment", desc: "Rods, bait and dedicated stops", price: "300 THB" },
              { icon: "🥗", title: "Thai Homemade Lunch", desc: "Local meal on board", price: "450 THB / person" },
              { icon: "🧋", title: "Tropical Fruits + Drink", desc: "Fruit plate + soft drink", price: "150 THB / person" },
              { icon: "🍾", title: "Champagne Bottle", desc: "Champagne served chilled on board", price: "1,800 THB" },
              { icon: "🎂", title: "Birthday Package", desc: "Local cake + decorative balloons", price: "600 THB" },
              { icon: "🎶", title: "Bluetooth Speaker + Playlist", desc: "Connected to your phone", price: "100 THB" },
              { icon: "🕓", title: "Extra Hour", desc: "Extend your tour (1 more hour)", price: "1,500 THB / h" }
            ].map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-3">{option.icon}</div>
                  <h4 className="font-semibold text-sm mb-2">{option.title}</h4>
                  <p className="text-xs text-gray-600 mb-3">{option.desc}</p>
                  <p className="font-bold text-blue-600">{option.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking-form" className="py-16 bg-gradient-to-b from-orange-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            📅 Book Your Tour
          </h2>
          <BookingForm />
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Image Gallery */}
      <ImageGallery />

      {/* Practical Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            📍 Practical Information
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: <MapPin className="text-blue-600" />, title: "Departure", desc: "Pier in southern Koh Samui" },
              { icon: <Clock className="text-blue-600" />, title: "Flexible Hours", desc: "morning / afternoon" },
              { icon: <Car className="text-blue-600" />, title: "Hotel Transfer Included", desc: "main areas" },
              { icon: <Users className="text-blue-600" />, title: "Local Skipper", desc: "English speaking" },
              { icon: <CheckCircle className="text-blue-600" />, title: "Equipment Provided", desc: "and insurance included" },
              { icon: <Phone className="text-blue-600" />, title: "24/7 Support", desc: "complete assistance" }
            ].map((info, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="flex-shrink-0">{info.icon}</div>
                <div>
                  <h4 className="font-semibold">{info.title}</h4>
                  <p className="text-gray-600">{info.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            🔔 Experience a Day Out of Time
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Treat yourself to a moment of freedom, nature and wonder. 
            Whether for a birthday, marriage proposal or simply to enjoy...
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300"
            onClick={scrollToBooking}
          >
            👉 Book Your Boat Now
          </Button>
        </div>
      </section>
    </div>
  );
};

// Car icon component (missing from imports)
const Car = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM17 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 17H3l2-8h10l2 8h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 9h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default Index;
