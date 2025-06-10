
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Que se passe-t-il s'il pleut ?",
      answer: "Vous pouvez reporter ou demander un remboursement intégral, sans frais. Votre sécurité et votre plaisir sont nos priorités."
    },
    {
      question: "Peut-on annuler ?",
      answer: "Oui. Annulation gratuite jusqu'à 48h avant l'excursion. Après ce délai, des frais d'annulation peuvent s'appliquer selon nos conditions générales."
    },
    {
      question: "Combien de personnes max ?",
      answer: "10 personnes par bateau maximum pour votre sécurité et votre confort. Si vous êtes plus nombreux, nous pouvons organiser un second bateau."
    },
    {
      question: "Dois-je savoir nager ?",
      answer: "Non, ce n'est pas obligatoire. Nous fournissons des gilets de sauvetage, naviguons dans des zones calmes, et notre skipper expérimenté assure votre supervision."
    },
    {
      question: "Le transfert hôtel est-il inclus ?",
      answer: "Oui, dans les zones principales : Chaweng, Lamai, Bophut, et Maenam. Pour les autres zones, contactez-nous pour organiser le transfert."
    },
    {
      question: "Que dois-je apporter ?",
      answer: "Maillot de bain, serviette, crème solaire, lunettes de soleil, et téléphone chargé pour les photos ! Nous fournissons le reste."
    },
    {
      question: "Y a-t-il une limite d'âge ?",
      answer: "Non, notre excursion convient à tous les âges. Les enfants doivent être accompagnés d'un adulte et porter un gilet de sauvetage en permanence."
    },
    {
      question: "Peut-on modifier la réservation ?",
      answer: "Oui, sous réserve de disponibilité. Les modifications sont gratuites jusqu'à 24h avant le départ. Contactez-nous pour toute demande."
    },
    {
      question: "Le déjeuner est-il inclus dans le prix de base ?",
      answer: "Non, le déjeuner est une option à la carte (450 THB/personne). Vous pouvez aussi apporter votre propre nourriture ou manger sur l'une des îles visitées."
    },
    {
      question: "Quelle est la meilleure période pour réserver ?",
      answer: "Toute l'année ! La saison sèche (décembre à avril) offre les meilleures conditions, mais nous naviguons aussi pendant la saison verte avec des paysages magnifiques."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          ❓ Foire aux questions (FAQ)
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Vous avez d'autres questions ?</p>
          <a 
            href="tel:+66123456789" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
          >
            📞 Contactez-nous directement
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
