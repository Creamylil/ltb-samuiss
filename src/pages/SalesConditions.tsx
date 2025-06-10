
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SalesConditions = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl text-center text-gray-800">
              General Sales Conditions
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Services Offered</h2>
              <p className="text-gray-700 leading-relaxed">
                We provide private long tail boat tours around Koh Samui including transportation 
                to/from hotels, professional skipper, safety equipment, and access to various islands 
                and beaches as per the chosen itinerary.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Pricing and Payment</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p><strong>Base Prices:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Half Day (4 hours): 5,000 THB for up to 5 people</li>
                  <li>Full Day (6-8 hours): 6,500 THB for up to 5 people</li>
                  <li>Additional guests: 1,000 THB per person (max 10 total)</li>
                </ul>
                <p className="mt-3">All prices include hotel transfer, skipper, fuel, and safety equipment.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. What's Included</h2>
              <ul className="text-gray-700 leading-relaxed list-disc list-inside space-y-1">
                <li>Private long tail boat for your group</li>
                <li>Professional English-speaking skipper</li>
                <li>Hotel pickup and drop-off (main areas)</li>
                <li>Safety equipment (life jackets)</li>
                <li>Fuel and boat insurance</li>
                <li>Snorkeling equipment (basic)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. What's Not Included</h2>
              <ul className="text-gray-700 leading-relaxed list-disc list-inside space-y-1">
                <li>Food and beverages (available as add-ons)</li>
                <li>National park entrance fees (if applicable)</li>
                <li>Personal expenses and tips</li>
                <li>Travel insurance</li>
                <li>Underwater cameras</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Booking Process</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p>1. Complete the online booking form with all required information</p>
                <p>2. Make full payment via Stripe (secure payment processing)</p>
                <p>3. Receive confirmation email within 24 hours</p>
                <p>4. Receive pickup details 24 hours before tour date</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Cancellation and Refund Policy</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p><strong>Free Cancellation:</strong> Up to 72 hours before departure</p>
                <p><strong>Late Cancellation:</strong> Within 72 hours - no refund</p>
                <p><strong>Weather Cancellation:</strong> Full refund or free rescheduling</p>
                <p><strong>No-Show:</strong> No refund</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. Modification Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                Modifications to bookings (date, time, number of guests) can be made free of charge 
                up to 48 hours before departure, subject to availability. Later modifications may 
                incur additional charges.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. Force Majeure</h2>
              <p className="text-gray-700 leading-relaxed">
                We are not liable for cancellations due to circumstances beyond our control including 
                but not limited to severe weather, natural disasters, government restrictions, or 
                other force majeure events.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">9. Liability Limitations</h2>
              <p className="text-gray-700 leading-relaxed">
                Our liability is limited to the value of the tour booked. We are not responsible for 
                personal injuries, lost or damaged belongings, or indirect damages. Travel insurance 
                is recommended.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">10. Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed">
                Any disputes will be handled amicably through direct communication. If resolution 
                cannot be reached, disputes will be subject to Thai law and the jurisdiction of 
                Surat Thani courts.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SalesConditions;
