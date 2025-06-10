
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl text-center text-gray-800">
              Terms and Conditions
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to JSD Media LLP's long tail boat tour services in Koh Samui. By booking our services, 
                you agree to comply with and be bound by the following terms and conditions. Please review 
                these carefully before making a booking.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Booking and Payment</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p><strong>2.1 Booking Process:</strong> All bookings must be made through our official website or authorized agents.</p>
                <p><strong>2.2 Payment:</strong> Full payment is required at the time of booking via our secure payment gateway.</p>
                <p><strong>2.3 Confirmation:</strong> A booking confirmation will be sent within 24 hours of payment receipt.</p>
                <p><strong>2.4 Pricing:</strong> All prices are displayed in Thai Baht (THB) and include applicable taxes.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. Cancellation and Refund Policy</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p><strong>3.1 Free Cancellation:</strong> Bookings can be cancelled without charge up to 72 hours before the scheduled departure time.</p>
                <p><strong>3.2 Late Cancellation:</strong> Cancellations made within 72 hours of departure will not be eligible for a refund.</p>
                <p><strong>3.3 Weather Cancellation:</strong> Tours cancelled due to adverse weather conditions will receive a full refund or free rescheduling.</p>
                <p><strong>3.4 Refund Processing:</strong> Approved refunds will be processed within 5-10 business days to the original payment method.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Modification Policy</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p><strong>4.1 Free Modifications:</strong> Changes to date, time, or guest numbers can be made free of charge up to 48 hours before departure.</p>
                <p><strong>4.2 Late Modifications:</strong> Changes requested within 48 hours may incur additional charges based on availability.</p>
                <p><strong>4.3 Upgrade Requests:</strong> Requests for additional services or upgrades are subject to availability and additional charges.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Safety and Liability</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p><strong>5.1 Safety Equipment:</strong> All necessary safety equipment is provided and must be worn as instructed by the skipper.</p>
                <p><strong>5.2 Swimming Ability:</strong> Guests must inform us of any swimming limitations or medical conditions that may affect their safety.</p>
                <p><strong>5.3 Insurance:</strong> We maintain comprehensive liability insurance, but personal travel insurance is strongly recommended.</p>
                <p><strong>5.4 Liability Limitation:</strong> Our liability is limited to the value of the tour booked. We are not responsible for personal injuries, lost belongings, or indirect damages.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Passenger Responsibilities</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p><strong>6.1 Conduct:</strong> All passengers must behave respectfully towards crew members and other guests.</p>
                <p><strong>6.2 Instructions:</strong> Passengers must follow all safety instructions provided by the skipper and crew.</p>
                <p><strong>6.3 Alcohol:</strong> Excessive alcohol consumption that endangers safety or disrupts other guests is prohibited.</p>
                <p><strong>6.4 Environmental Responsibility:</strong> Passengers must respect marine life and local environments.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. Force Majeure</h2>
              <p className="text-gray-700 leading-relaxed">
                We are not liable for cancellations or delays caused by circumstances beyond our control, 
                including but not limited to severe weather, natural disasters, government restrictions, 
                strikes, or other force majeure events.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. Privacy and Data Protection</h2>
              <p className="text-gray-700 leading-relaxed">
                We collect and process personal data in accordance with UK GDPR and data protection laws. 
                Your information is used solely for booking management, customer service, and safety purposes. 
                We do not share your data with third parties without your consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">9. Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed">
                Any disputes arising from these terms or our services will be handled through direct 
                communication first. If resolution cannot be reached, disputes will be subject to 
                English law and the jurisdiction of English courts.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">10. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these terms and conditions at any time. Updated terms 
                will be posted on our website and will apply to all future bookings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p><strong>Company:</strong> JSD Media LLP</p>
                <p><strong>Registration:</strong> OC455142</p>
                <p><strong>Address:</strong> 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</p>
                <p><strong>Email:</strong> info@longtailboatkohsamui.com</p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsConditions;
