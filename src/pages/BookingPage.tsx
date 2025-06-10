
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, MapPin, Clock, Users, Camera, Phone } from 'lucide-react';
import BookingForm from '../components/BookingForm';
import ImageGallery from '../components/ImageGallery';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const BookingPage = () => {
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
              Réservez votre tour privé en long-tail boat à Koh Samui
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Offrez-vous une journée inoubliable à bord d'un long-tail boat privé, au départ de Koh Samui.
            </p>
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300"
              onClick={scrollToBooking}
            >
              Réserver maintenant votre bateau
            </Button>
          </div>
        </div>
      </section>

      {/* Adventure Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            📍 Une aventure authentique dans les plus belles îles
          </h2>
          <div className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 space-y-6">
            <p>
              Découvrez les joyaux cachés du sud de Koh Samui lors d'un tour privé et 100% personnalisé.
            </p>
            <p>
              Naviguez à bord d'un bateau traditionnel thaïlandais vers les plages sauvages de Pig Island (Koh Madsum), 
              les récifs de Koh Tan, ou les étendues désertes de Koh Rap.
            </p>
            <p>
              Que vous soyez en couple, en famille ou entre amis, profitez d'un moment unique, hors des sentiers battus.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            ✨ Pourquoi réserver avec nous ?
          </h2>
          <h3 className="text-xl text-center mb-12 text-gray-600">Ce qui fait la différence :</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: "✅", title: "Tour entièrement privatisé", desc: "rien que pour vous" },
              { icon: "🐷", title: "Arrêt à Pig Island", desc: "l'île des cochons" },
              { icon: "🏝️", title: "Baignade et farniente", desc: "sur des plages désertes" },
              { icon: "🛥️", title: "Skipper local expérimenté", desc: "guidage professionnel" },
              { icon: "🚐", title: "Transfert hôtel inclus", desc: "zones : Chaweng, Lamai, Bophut..." },
              { icon: "🎒", title: "Personnalisation possible", desc: "avec des options à la carte" }
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
            💰 Tarifs clairs et transparents
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Formule</th>
                    <th className="px-6 py-4 text-left">Prix de base (1 à 5 pers.)</th>
                    <th className="px-6 py-4 text-left">Personne supplémentaire (max 10)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-semibold">Demi-journée (4h)</td>
                    <td className="px-6 py-4 text-blue-600 font-bold">5 000 THB</td>
                    <td className="px-6 py-4">+1 000 THB / pers.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Journée complète (6–8h)</td>
                    <td className="px-6 py-4 text-blue-600 font-bold">6 500 THB</td>
                    <td className="px-6 py-4">+1 000 THB / pers.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 text-center space-y-4">
              <p className="flex items-center justify-center text-lg">
                <Users className="mr-2 text-blue-600" />
                Maximum 10 personnes par bateau
              </p>
              <p className="flex items-center justify-center text-lg text-red-600">
                🚫 Si vous êtes plus de 10, merci de réserver un deuxième bateau
              </p>
              <p className="flex items-center justify-center text-lg text-green-600">
                <CheckCircle className="mr-2" />
                Pas de frais cachés – tout est clair et inclus
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            🎒 Personnalisez votre expérience
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Rendez votre tour encore plus spécial grâce à ces options à la carte. 
            Le prix se met à jour automatiquement dans le formulaire de réservation.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: "🧊", title: "Glacière avec boissons fraîches", desc: "Eau, sodas, bières locales", price: "1 000 THB" },
              { icon: "🎣", title: "Matériel de pêche", desc: "Cannes, appâts et pauses dédiées", price: "300 THB" },
              { icon: "🥗", title: "Déjeuner thaï maison", desc: "Repas local embarqué", price: "450 THB / pers." },
              { icon: "🧋", title: "Fruits tropicaux + boisson", desc: "Assiette de fruits + soft drink", price: "150 THB / pers." },
              { icon: "🍾", title: "Bouteille de champagne", desc: "Champagne servi frais à bord", price: "1 800 THB" },
              { icon: "🎂", title: "Pack anniversaire", desc: "Gâteau local + ballons décoratifs", price: "600 THB" },
              { icon: "🎶", title: "Enceinte Bluetooth + playlist", desc: "Connectée à votre téléphone", price: "100 THB" },
              { icon: "🕓", title: "Heure supplémentaire", desc: "Prolongez votre tour (1h de plus)", price: "1 500 THB / h" }
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
            📅 Réservez votre tour
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
            📍 Informations pratiques
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: <MapPin className="text-blue-600" />, title: "Départ", desc: "Pier au sud de Koh Samui" },
              { icon: <Clock className="text-blue-600" />, title: "Horaires flexibles", desc: "matin / après-midi" },
              { icon: <Car className="text-blue-600" />, title: "Transfert hôtel inclus", desc: "zones principales" },
              { icon: <Users className="text-blue-600" />, title: "Skipper local", desc: "parlant anglais" },
              { icon: <CheckCircle className="text-blue-600" />, title: "Matériel fourni", desc: "et assurance incluse" },
              { icon: <Phone className="text-blue-600" />, title: "Support 24/7", desc: "assistance complète" }
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
            🔔 Vivez une journée hors du temps
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Offrez-vous un moment de liberté, de nature et d'émerveillement. 
            Que ce soit pour un anniversaire, une demande en mariage ou simplement pour profiter...
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300"
            onClick={scrollToBooking}
          >
            👉 Réservez votre bateau dès maintenant
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

export default BookingPage;
