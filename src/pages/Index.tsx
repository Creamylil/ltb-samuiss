import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, MapPin, Clock, Users, Camera, Phone } from "lucide-react";
import Header from "../components/Header";
import BookingForm from "../components/BookingForm";
import ImageGallery from "../components/ImageGallery";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import WhatsAppCTA from "../components/WhatsAppCTA";

const Index = () => {
  const scrollToBooking = () => {
    document.getElementById("booking-form")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[75vh] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/e60a3dd9-abf1-4543-b894-4e29e24097b5.png')] bg-cover bg-center scale-105 animate-[pulse_20s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        <div className="relative z-10 flex items-center justify-center min-h-[75vh] pt-20 pb-12">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-sm font-medium tracking-wide uppercase">
              🌴 Private Boat Tours · Koh Samui
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in text-white drop-shadow-lg">
              <span className="block mb-2 md:mb-0 md:inline">Long Tail Boat</span>{" "}
              <span className="block md:inline">Koh Samui</span>
              <span className="block text-xl md:text-3xl lg:text-4xl mt-3 font-medium text-white/90">
                Private Tours
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
              Discover Koh Samui's hidden gems aboard your private long tail boat with hotel transfer included
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-10">
              {[
              { icon: "✓", text: "Private skipper" },
              { icon: "✓", text: "Hotel pickup" },
              { icon: "✓", text: "From ฿4,000 THB" },
              { icon: "✓", text: "Max 10 guests" }].
              map((item, i) =>
              <div
                key={i}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm md:text-base">
                
                  <span className="text-green-400 font-bold">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              )}
            </div>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center md:items-center">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 md:px-10 md:py-5 text-base md:text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(249,115,22,0.4)] w-full md:w-auto"
                onClick={scrollToBooking}>
                
                <span className="hidden md:inline">Book Your Long Tail Boat Now</span>
                <span className="md:hidden">Book Now</span>
              </Button>
              <WhatsAppCTA
                text="💬 Ask Questions on WhatsApp"
                className="w-full md:w-auto"
                size="lg"
                message="Hi! I'm interested in your longtail boat tours in Koh Samui. Can you tell me more about your packages and availability?" />
              
            </div>
          </div>
        </div>
      </section>

      {/* Adventure Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Long Tail Boat Koh Samui Experience
          </h2>
          <div className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 space-y-6">
            <p>
              Experience the authentic charm of a <strong>long tail boat Koh Samui</strong> adventure with our
              completely private tours. Starting from just <strong>฿4,000 THB with hotel transfer included</strong>.
            </p>
            <p>
              Navigate aboard a traditional Thai long tail boat to the pristine beaches of Pig Island (Koh Madsum), the
              coral reefs of Koh Tan, or the secluded paradise of various hidden islands.
            </p>
            <p>
              Whether you're a couple seeking romance, a family creating memories, or friends on adventure - enjoy an
              exclusive <strong>long tail boat Koh Samui</strong> experience with your dedicated private skipper.
            </p>
          </div>

          <div className="text-center mt-8">
            <WhatsAppCTA
              text="Get Custom Tour Recommendations"
              message="Hello! I would like to get personalized recommendations for a longtail boat tour in Koh Samui based on my preferences." />
            
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Your Long Tail Boat Koh Samui Itinerary
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Discover the most beautiful islands around Koh Samui with our carefully planned routes
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Koh Madsum (Pig Island)</h3>
                      <p className="text-gray-600">
                        Meet the famous swimming pigs and enjoy pristine white sand beaches. Perfect for photos and
                        relaxation.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Koh Tan (Coral Island)</h3>
                      <p className="text-gray-600">
                        Exceptional snorkeling with vibrant coral reefs and tropical fish. Crystal clear waters perfect
                        for swimming.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Hidden Beach Stops</h3>
                      <p className="text-gray-600">
                        Secret beaches accessible only by long tail boat. Enjoy secluded spots away from the crowds.
                      </p>
                    </div>
                  </div>
                </Card>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-blue-800">Flexible Itinerary Options</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                      Customizable route based on weather conditions
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                      Additional stops for fishing or extended snorkeling
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                      Sunset tours available for evening departures
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:order-first">
                <img
                  src="/lovable-uploads/0b294876-d661-419c-8182-094c604cfdce.png"
                  alt="Long tail boat itinerary map showing Koh Madsum Pig Island, Koh Tan snorkeling, and Thong Krut pier departure point"
                  className="w-full rounded-lg shadow-xl" />
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            From ฿4,000 THB with everything included
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
            {
              icon: "🛥️",
              title: "100% Private Long Tail Boat",
              desc: "Your own traditional Thai boat & skipper"
            },
            {
              icon: "💰",
              title: "Best Price: From ฿4,000 THB",
              desc: "Includes hotel transfer & captain"
            },
            {
              icon: "🐷",
              title: "Famous Pig Island Visit",
              desc: "Meet the swimming pigs of Koh Madsum"
            },
            {
              icon: "🏝️",
              title: "Secret Island Beaches",
              desc: "Pristine shores away from crowds"
            },
            {
              icon: "🚐",
              title: "Free Hotel Pickup Included",
              desc: "Chaweng, Lamai, Bophut areas"
            },
            {
              icon: "👨‍✈️",
              title: "Expert Local Skipper",
              desc: "English-speaking guide & safety certified"
            }].
            map((feature, index) =>
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="text-center mt-12">
            <WhatsAppCTA
              text="💬 Have Questions? Chat with Us!"
              message="Hi! I have some questions about your longtail boat tours. Can you help me choose the best option for my group?" />
            
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Private Longtail Boat Tour - Pricing
          </h2>
          <p className="text-center text-lg text-green-600 font-semibold mb-8">
            🎉 All-inclusive pricing with hotel transfer & private captain!
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Guests</th>
                    <th className="px-6 py-4 text-left">Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-semibold">Up to 3 guests</td>
                    <td className="px-6 py-4 text-blue-600 font-bold">฿4,000 THB</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-semibold">Up to 4 guests</td>
                    <td className="px-6 py-4 text-blue-600 font-bold">฿4,600 THB</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-semibold">Up to 7 guests</td>
                    <td className="px-6 py-4 text-blue-600 font-bold">฿5,600 THB</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Up to 10 guests</td>
                    <td className="px-6 py-4 text-blue-600 font-bold">฿6,600 THB</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200">
                <p className="text-base text-gray-700 font-medium mb-2">
                  💡 <strong>How it works:</strong> Pay a deposit online to confirm your booking.
                </p>
                <p className="text-sm text-gray-600">
                  The remaining balance is paid directly to the captain on the day of the tour.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <p className="text-sm font-semibold text-gray-700 mb-2">Includes:</p>
                <div className="flex justify-center gap-6 text-sm text-green-600 flex-wrap">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1" /> Private longtail boat
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1" /> Local captain
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1" /> Hotel transfer (round trip)
                  </div>
                </div>
              </div>
              <p className="flex items-center justify-center text-lg">
                <Users className="mr-2 text-blue-600" />
                Maximum 10 guests per boat
              </p>

              <WhatsAppCTA
                text="Get a Custom Quote"
                message="Hello! I'd like to get a personalized quote for a longtail boat tour. Can you help me with pricing for my specific group size and preferences?" />
              
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking-form" className="py-16 bg-gradient-to-b from-orange-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Book Your Long Tail Boat Tour Online
          </h2>
          <p className="text-center text-lg text-green-600 font-semibold mb-8">
            🔥 Pay a deposit now to secure your spot — the remaining balance is paid directly to the captain on
            departure day!
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
            {
              icon: <MapPin className="text-blue-600" />,
              title: "Departure Point",
              desc: "Southern Koh Samui pier"
            },
            {
              icon: <Clock className="text-blue-600" />,
              title: "Flexible Timing",
              desc: "Morning or afternoon departure"
            },
            {
              icon: <Car className="text-blue-600" />,
              title: "Hotel Transfer Included",
              desc: "Free pickup from main areas"
            },
            {
              icon: <Users className="text-blue-600" />,
              title: "English-Speaking Skipper",
              desc: "Professional local guide"
            },
            {
              icon: <CheckCircle className="text-blue-600" />,
              title: "All Equipment Provided",
              desc: "Safety gear & insurance included"
            },
            {
              icon: <Phone className="text-blue-600" />,
              title: "24/7 Support",
              desc: "Complete customer assistance"
            }].
            map((info, index) =>
            <div key={index} className="flex items-center space-x-4">
                <div className="flex-shrink-0">{info.icon}</div>
                <div>
                  <h4 className="font-semibold">{info.title}</h4>
                  <p className="text-gray-600">{info.desc}</p>
                </div>
              </div>
            )}
          </div>

          <div className="text-center mt-12">
            <WhatsAppCTA
              text="Need Help Planning Your Trip?"
              message="Hi! I need help planning my longtail boat tour in Koh Samui. Can you assist me with recommendations and logistics?" />
            
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
            Create unforgettable memories with your private long tail boat, dedicated skipper, and seamless hotel
            transfer. From romantic getaways to family adventures - your perfect Koh Samui experience awaits.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center md:items-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-4 py-3 md:px-8 md:py-4 text-sm md:text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 w-full md:w-auto"
              onClick={scrollToBooking}>
              
              <span className="hidden md:inline">👉 Book Your Long Tail Boat Now</span>
              <span className="md:hidden">👉 Book Now</span>
            </Button>
            <WhatsAppCTA
              text="💬 Chat Before Booking"
              className="bg-white text-green-600 hover:bg-gray-100 w-full md:w-auto"
              variant="secondary"
              size="lg"
              message="Hi! I'm considering booking a longtail boat tour but have some questions first. Can you help me?" />
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>);

};

// Car icon component
const Car = ({ className }: {className?: string;}) =>
<svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
    d="M7 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM17 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round" />
  
    <path
    d="M5 17H3l2-8h10l2 8h-2"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round" />
  
    <path d="M9 9h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;


export default Index;