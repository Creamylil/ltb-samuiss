
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
              <h2 className="text-xl font-semibold mb-3">1. Booking and Payment</h2>
              <p className="text-gray-700 leading-relaxed">
                All bookings must be paid in full at the time of reservation. We accept payment through Stripe. 
                Confirmation will be sent via email within 24 hours of booking.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Cancellation Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                Free cancellation up to 72 hours before the tour departure time. Cancellations made within 72 hours 
                of departure will incur a 100% charge. No-shows will be charged in full.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. Modification Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                Free modifications (date, time, number of guests) can be made up to 48 hours before the tour departure time. 
                Modifications within 48 hours are subject to availability and may incur additional charges.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Weather Conditions</h2>
              <p className="text-gray-700 leading-relaxed">
                Tours are subject to weather conditions. In case of unsafe weather conditions, we reserve the right to 
                cancel or postpone tours. Full refund or rescheduling will be offered in such cases.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Safety and Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                All guests participate at their own risk. Life jackets and safety equipment are provided. 
                Guests must follow safety instructions from the skipper. Swimming ability is recommended.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Age Restrictions</h2>
              <p className="text-gray-700 leading-relaxed">
                Children under 3 years old travel free but must be supervised by adults at all times. 
                Children 3-12 years old receive a 50% discount. All minors must be accompanied by an adult.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. Hotel Transfer</h2>
              <p className="text-gray-700 leading-relaxed">
                Hotel transfer is included for hotels in Chaweng, Lamai, and Bophut areas. 
                Pick-up times will be communicated 24 hours before the tour.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                For any questions or concerns, please contact us at info@longtailboatkohsamui.com or +66 123 456 789.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsConditions;
