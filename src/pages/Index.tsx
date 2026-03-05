import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, MapPin, Clock, Users, Camera, Phone } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious } from
"@/components/ui/carousel";
import Header from "../components/Header";
import BookingForm from "../components/BookingForm";
import ImageGallery from "../components/ImageGallery";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import WhatsAppCTA from "../components/WhatsAppCTA";
import WhatsAppFloatingButton from "../components/WhatsAppFloatingButton";
import StickyPriceBar from "../components/StickyPriceBar";

const Index = () => {
  const scrollToBooking = () => {
    document.getElementById("booking-form")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[75vh] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/e60a3dd9-abf1-4543-b894-4e29e24097b5.png')] bg-cover bg-center scale-105 animate-[pulse_20s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        <div className="relative z-10 flex items-center justify-center min-h-[75vh] pt-20 pb-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-3 animate-fade-in text-white drop-shadow-lg">
              <span className="block mb-2 md:mb-0 md:inline">Long Tail Boat</span>{" "}
              <span className="block md:inline">Koh Samui</span>
            </h1>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-medium text-white/90 mb-6 animate-fade-in drop-shadow-lg">
              Private Tour with Hotel Transfer
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
              No hidden fees, no crowds, just paradise.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-10">
              {[
              { icon: "✓", text: "Private skipper" },
              { icon: "✓", text: "Hotel Transfer" },
              { icon: "✓", text: "From ฿3,200 THB" },
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
              <Button
                size="lg"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 px-8 py-4 md:px-10 md:py-5 text-base md:text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 w-full md:w-auto"
                onClick={scrollToBooking}>
                <span className="hidden md:inline">See Prices & Options</span>
                <span className="md:hidden">See Prices</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Adventure Section - now empty, content moved below timeline */}

      {/* Itinerary Section */}
      <section className="bg-white py-0">
        <div className="container mx-auto px-4 pt-[29px]">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Your Long Tail Boat Koh Samui Itinerary
          </h2>
          <p className="text-center text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover the most beautiful islands around Koh Samui with our carefully planned routes
          </p>

          {/* Journey Timeline */}
          <div className="max-w-3xl mx-auto mb-12 px-4">
            <div className="relative flex items-center justify-between">
              {/* Line connecting all stops */}
              <div className="absolute top-5 left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 rounded-full"></div>
              
              {/* Animated boat */}
              <div className="absolute top-2 left-[10%] right-[10%]">
                <div className="animate-[boatMove_8s_ease-in-out_infinite] relative">
                  <span className="text-2xl drop-shadow-md">🛥️</span>
                </div>
              </div>

              {/* Stops */}
              {[
              { name: "Pier Departure", time: "Departure", emoji: "⚓" },
              { name: "Koh Madsum", time: "+45 min", emoji: "🐷" },
              { name: "Koh Tan", time: "+2h", emoji: "🤿" },
              { name: "Pier Arrival", time: "~4h", emoji: "⚓" }].
              map((stop, i) =>
              <div key={i} className="relative z-10 flex flex-col items-center w-1/4">
                  <div className="w-10 h-10 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center text-lg shadow-md">
                    {stop.emoji}
                  </div>
                  <span className="mt-2 text-xs md:text-sm font-bold text-gray-800 text-center leading-tight">{stop.name}</span>
                  <span className="text-xs text-blue-600 font-medium">{stop.time}</span>
                </div>
              )}
            </div>
            <p className="text-center text-sm text-gray-500 mt-6 italic">
              ⏱️ Total boat trip duration: ~4 hours (hotel transfer time not included)
            </p>
          </div>

          {/* Adventure text moved here */}
          <div className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 space-y-6 mt-12">
            <p>
              Experience the authentic charm of a <strong>long tail boat Koh Samui</strong> adventure with our
              completely private tours. Starting from just <strong>฿3,200 THB</strong> for the boat, with optional hotel transfer.
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

          {/* Image Carousel */}
          <div className="max-w-5xl mx-auto mt-10">
            <Carousel opts={{ loop: true }} className="w-full">
              <CarouselContent>
                {[
                { src: "/lovable-uploads/koh-Madsum-island-in-thailand.jpg", alt: "Koh Madsum island in Thailand" },
                { src: "/lovable-uploads/koh-Madsum-island-thailand.jpg", alt: "Koh Madsum island Thailand" },
                { src: "/lovable-uploads/koh-samui-snorkeling.jpg", alt: "Koh Samui snorkeling" },
                { src: "/lovable-uploads/koh-tan-thailand.jpg", alt: "Koh Tan Thailand" },
                { src: "/lovable-uploads/pig-island-koh-madsum-koh-samui.jpg", alt: "Pig island Koh Madsum Koh Samui" },
                { src: "/lovable-uploads/pig-island-koh-samui.jpg", alt: "Pig island Koh Samui" }].
                map((img, i) =>
                <CarouselItem key={i}>
                    <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-[300px] md:h-[500px] object-cover rounded-xl"
                    loading="lazy" />
                  
                  </CarouselItem>
                )}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>

          <div className="text-center mt-8 py-[10px] pb-[20px]">
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-3 font-semibold"
              onClick={scrollToBooking}>
              See Prices & Book Now →
            </Button>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
              {
                num: 1,
                emoji: "🐷",
                title: "Koh Madsum (Pig Island)",
                desc: "Meet the famous swimming pigs and enjoy pristine white sand beaches. Perfect for photos and relaxation."
              },
              {
                num: 2,
                emoji: "🤿",
                title: "Koh Tan (Coral Island)",
                desc: "Exceptional snorkeling with vibrant coral reefs and tropical fish. Crystal clear waters perfect for swimming."
              },
              {
                num: 3,
                emoji: "🏝️",
                title: "Hidden Beach Stops",
                desc: "Secret beaches accessible only by long tail boat. Enjoy secluded spots away from the crowds."
              }].
              map((stop, i) =>
              <Card key={i} className="text-center hover:shadow-lg transition-shadow duration-300 border-none shadow-md">
                  <CardContent className="p-8">
                    <div className="text-5xl mb-4">{stop.emoji}</div>
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3 text-sm">
                      {stop.num}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{stop.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{stop.desc}</p>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="bg-blue-50 p-6 rounded-xl mt-10 max-w-3xl mx-auto">
              <h3 className="font-semibold text-lg mb-3 text-blue-800 text-center">Flexible Itinerary Options</h3>
              <div className="grid sm:grid-cols-3 gap-4 text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Customizable route based on weather</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Extra stops for fishing or snorkeling</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Sunset tours for evening departures</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Private boat From ฿3,200 THB
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
              title: "Best Price: From ฿3,200 THB",
              desc: "Private boat + captain included"
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
              title: "Optional Hotel Transfer",
              desc: "+฿1,600 THB round-trip pickup"
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
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-3 font-semibold"
              onClick={scrollToBooking}>
              See Prices & Book Now →
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Private Boat Tour Pricing     
          </h2>
          <p className="text-center text-lg text-green-600 font-semibold mb-8">
            🎉 Private boat + captain included — add hotel transfer for ฿1,600 THB!
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Guests</th>
                    <th className="px-6 py-4 text-left">Boat Price</th>
                    <th className="px-6 py-4 text-left">With Transfer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-semibold">Up to 3 guests</td>
                    <td className="px-6 py-4 text-blue-600 font-bold">฿3,200 THB</td>
                    <td className="px-6 py-4 text-gray-500">฿4,800 THB</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-semibold">Up to 4 guests</td>
                    <td className="px-6 py-4 text-blue-600 font-bold">฿4,200 THB</td>
                    <td className="px-6 py-4 text-gray-500">฿5,800 THB</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-semibold">Up to 7 guests</td>
                    <td className="px-6 py-4 text-blue-600 font-bold">฿5,000 THB</td>
                    <td className="px-6 py-4 text-gray-500">฿6,600 THB</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Up to 10 guests</td>
                    <td className="px-6 py-4 text-blue-600 font-bold">฿6,000 THB</td>
                    <td className="px-6 py-4 text-gray-500">฿7,600 THB</td>
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
                    <CheckCircle className="w-4 h-4 mr-1" /> Optional hotel transfer
                  </div>
                </div>
              </div>
              <p className="flex items-center justify-center text-lg">
                <Users className="mr-2 text-blue-600" />
                Maximum 10 guests per boat
              </p>

              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-3 font-semibold"
                onClick={scrollToBooking}>
                Book Now →
              </Button>
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
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-3 font-semibold"
              onClick={scrollToBooking}>
              See Prices & Book Now →
            </Button>
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
              text="💬 Questions? Chat with Us"
              className="bg-white text-green-600 hover:bg-gray-100 w-full md:w-auto"
              variant="secondary"
              size="lg"
              message="Hi! I have some questions before booking my longtail boat tour. Can you help?" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppFloatingButton />

      {/* Sticky Price Bar */}
      <StickyPriceBar />
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