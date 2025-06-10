
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie",
      rating: 5,
      text: "Le moment fort de notre voyage à Koh Samui. Tout était parfait, de la gentillesse du skipper au pique-nique sur une plage isolée. Merci !",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Thomas",
      rating: 5,
      text: "Une expérience magique ! Les cochons de Pig Island ont ravi nos enfants, et nous avons découvert des coins paradisiaques. À refaire absolument !",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Sophie",
      rating: 5,
      text: "Journée parfaite pour notre anniversaire de mariage ! Le champagne servi au coucher du soleil était un moment inoubliable. Service impeccable.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Pierre",
      rating: 5,
      text: "Un vrai plus d'avoir un skipper local qui connaît tous les bons spots. Snorkeling fantastique et plages désertes au programme !",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Amélie",
      rating: 5,
      text: "L'organisation était parfaite du transfert hôtel au retour. Notre groupe de 8 personnes a passé une journée extraordinaire. Highly recommended !",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          💬 Ce que disent nos clients
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">({testimonial.rating}.0)</span>
                </div>
                
                {/* Testimonial text */}
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                
                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">Client vérifié</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Overall rating */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-yellow-100 px-6 py-3 rounded-full">
            <Star className="w-6 h-6 text-yellow-400 fill-current mr-2" />
            <span className="text-xl font-bold">4.9/5</span>
            <span className="ml-2 text-gray-600">sur 127 avis</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
