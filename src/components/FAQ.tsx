
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
  {
    question: "What happens if it rains?",
    answer: "You can reschedule or request a full refund, free of charge. Your safety and enjoyment are our priorities."
  },
  {
    question: "Can we cancel?",
    answer: "Yes. Free cancellation up to 48 hours before the excursion. After this period, cancellation fees may apply according to our terms and conditions."
  },
  {
    question: "Maximum number of people?",
    answer: "10 people per boat maximum for your safety and comfort. If you are more, we can organize a second boat."
  },
  {
    question: "Do I need to know how to swim?",
    answer: "No, it's not mandatory. We provide life jackets, navigate in calm areas, and our experienced skipper ensures your supervision."
  },
  {
    question: "Is hotel transfer included?",
    answer: "Yes, in the main areas: Chaweng, Lamai, Bophut, and Maenam. For other areas, contact us to arrange transfer."
  },
  {
    question: "What should I bring?",
    answer: "Swimsuit, towel, sunscreen, sunglasses, and charged phone for photos! We provide the rest."
  },
  {
    question: "Is there an age limit?",
    answer: "No, our excursion is suitable for all ages. Children must be accompanied by an adult and wear a life jacket at all times."
  },
  {
    question: "Can we modify the booking?",
    answer: "Yes, subject to availability. Modifications are free up to 24 hours before departure. Contact us for any request."
  },
  {
    question: "Is lunch included in the base price?",
    answer: "No, lunch is an à la carte option (450 THB/person). You can also bring your own food or eat on one of the visited islands."
  },
  {
    question: "What's the best time to book?",
    answer: "All year round! The dry season (December to April) offers the best conditions, but we also sail during the green season with magnificent landscapes."
  },
  {
    question: "What happens after I pay the deposit?",
    answer: "Once your deposit is confirmed, we will contact you via your preferred method (WhatsApp, Line or Phone) to finalize all details. On the day of the tour, our driver will pick you up at your hotel and bring you back after the excursion. The remaining balance is paid directly to the captain."
  },
  {
    question: "Should I book in advance during high season?",
    answer: "Yes! During high season (December to April), we strongly recommend booking at least 2-3 days in advance to guarantee availability. Spots fill up quickly during peak periods."
  },
  {
    question: "What is the cancellation and refund policy?",
    answer: "Free cancellation up to 72 hours before the tour with a full deposit refund. Free modification up to 48 hours before departure. In case of unsafe weather conditions, we offer a full refund or free reschedule — no questions asked."
  }];


  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Frequently Asked Questions (FAQ)
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) =>
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Have other questions?</p>
          <a
            href="tel:+66123456789"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
            
            📞 Contact us directly
          </a>
        </div>
      </div>
    </section>);

};

export default FAQ;