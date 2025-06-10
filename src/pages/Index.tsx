
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
              🏝️ Long Tail Boat Koh Samui - Private Tours from $30/person
            </h1>
            <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto opacity-90">
              Discover Koh Samui's hidden gems aboard your private long tail boat with hotel transfer included
            </p>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-80">
              ✅ Private skipper ✅ Hotel pickup ✅ From 1,000 THB per person ✅ Maximum 10 guests
            </p>
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300"
              onClick={scrollToBooking}
            >
              Book Your Long Tail Boat Now - From $30
            </Button>
          </div>
        </div>
      </section>

      {/* Adventure Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose Our Long Tail Boat Koh Samui Experience?
          </h2>
          <div className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 space-y-6">
            <p>
              Experience the authentic charm of a <strong>long tail boat Koh Samui</strong> adventure with our completely private tours. 
              Starting from just <strong>1,000 THB ($30) per person with hotel transfer included</strong>.
            </p>
            <p>
              Navigate aboard a traditional Thai long tail boat to the pristine beaches of Pig Island (Koh Madsum), 
              the coral reefs of Koh Tan, or the secluded paradise of Koh Rap.
            </p>
            <p>
              Whether you're a couple seeking romance, a family creating memories, or friends on adventure - 
              enjoy an exclusive <strong>long tail boat Koh Samui</strong> experience with your dedicated private skipper.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Best Long Tail Boat Koh Samui Tours - Unbeatable Value
          </h2>
          <h3 className="text-xl text-center mb-12 text-gray-600">From $30/person with everything included:</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: "🛥️", title: "100% Private Long Tail Boat", desc: "Your own traditional Thai boat & skipper" },
              { icon: "💰", title: "Best Price: From $30/Person", desc: "Includes hotel transfer & equipment" },
              { icon: "🐷", title: "Famous Pig Island Visit", desc: "Meet the swimming pigs of Koh Madsum" },
              { icon: "🏝️", title: "Secret Island Beaches", desc: "Pristine shores away from crowds" },
              { icon: "🚐", title: "Free Hotel Pickup Included", desc: "Chaweng, Lamai, Bophut areas" },
              { icon: "👨‍✈️", title: "Expert Local Skipper", desc: "English-speaking guide & safety certified" }
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Long Tail Boat Koh Samui Pricing - All Inclusive
          </h2>
          <p className="text-center text-lg text-green-600 font-semibold mb-8">
            🎉 Special Offer: Just 1,000 THB ($30) per person with hotel transfer included!
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Long Tail Boat Package</th>
                    <th className="px-6 py-4 text-left">Price (1-5 people)</th>
                    <th className="px-6 py-4 text-left">Extra Person ($30 each)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-semibold">Half Day (4 hours)</td>
                    <td className="px-6 py-4 text-blue-600 font-bold">5,000 THB ($150)</td>
                    <td className="px-6 py-4">+1,000 THB ($30) / person</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Full Day (6-8 hours)</td>
                    <td className="px-6 py-4 text-blue-600 font-bold">6,500 THB ($195)</td>
                    <td className="px-6 py-4">+1,000 THB ($30) / person</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 text-center space-y-4">
              <p className="flex items-center justify-center text-lg">
                <Users className="mr-2 text-blue-600" />
                Maximum 10 people per long tail boat
              </p>
              <p className="flex items-center justify-center text-lg text-green-600">
                <CheckCircle className="mr-2" />
                Hotel transfer, safety equipment & skipper included
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Enhance Your Long Tail Boat Koh Samui Adventure
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Make your private long tail boat tour even more special with these premium add-ons. 
            Pricing updates automatically in the booking form below.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: "🧊", title: "Cooler with Fresh Drinks", desc: "Water, sodas, local beers", price: "1,000 THB ($30)" },
              { icon: "🎣", title: "Fishing Equipment", desc: "Rods, bait and dedicated fishing spots", price: "300 THB ($9)" },
              { icon: "🥗", title: "Thai Homemade Lunch", desc: "Authentic local meal on board", price: "450 THB ($14) / person" },
              { icon: "🧋", title: "Tropical Fruits + Drink", desc: "Fresh fruit platter + soft drink", price: "150 THB ($5) / person" },
              { icon: "🍾", title: "Champagne Bottle", desc: "Chilled champagne served on board", price: "1,800 THB ($54)" },
              { icon: "🎂", title: "Birthday Package", desc: "Local cake + decorative balloons", price: "600 THB ($18)" },
              { icon: "🎶", title: "Bluetooth Speaker + Playlist", desc: "Connect your phone for music", price: "100 THB ($3)" },
              { icon: "🕓", title: "Extra Hour", desc: "Extend your long tail boat tour", price: "1,500 THB ($45) / hour" }
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Book Your Long Tail Boat Koh Samui Tour
          </h2>
          <p className="text-center text-lg text-green-600 font-semibold mb-8">
            🔥 Best Price Guaranteed: From $30/person with private skipper & hotel transfer included
          </p>
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
            Long Tail Boat Koh Samui - Practical Information
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: <MapPin className="text-blue-600" />, title: "Departure Point", desc: "Southern Koh Samui pier" },
              { icon: <Clock className="text-blue-600" />, title: "Flexible Timing", desc: "Morning or afternoon departure" },
              { icon: <Car className="text-blue-600" />, title: "Hotel Transfer Included", desc: "Free pickup from main areas" },
              { icon: <Users className="text-blue-600" />, title: "English-Speaking Skipper", desc: "Professional local guide" },
              { icon: <CheckCircle className="text-blue-600" />, title: "All Equipment Provided", desc: "Safety gear & insurance included" },
              { icon: <Phone className="text-blue-600" />, title: "24/7 Support", desc: "Complete customer assistance" }
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
            🌅 Experience the Ultimate Long Tail Boat Koh Samui Adventure
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Create unforgettable memories with your private long tail boat, dedicated skipper, and seamless hotel transfer. 
            From romantic getaways to family adventures - your perfect Koh Samui experience awaits.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300"
            onClick={scrollToBooking}
          >
            👉 Book Your Long Tail Boat Now - From $30
          </Button>
        </div>
      </section>
    </div>
  );
};

// Car icon component
const Car = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM17 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 17H3l2-8h10l2 8h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 9h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default Index;
