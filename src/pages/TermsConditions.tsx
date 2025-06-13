
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl text-center text-gray-800">
                Terms and Conditions
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="text-sm text-gray-600 mb-6">
                Last updated: June 13, 2025
              </div>

              <section>
                <p className="text-gray-700 leading-relaxed">
                  These Terms and Conditions govern the contractual relationship between:
                  <br />
                  <strong>JSD MEDIA LLP</strong>
                  <br />
                  Registered in the United Kingdom under number OC455142
                  <br />
                  Registered address: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ
                  <br />
                  Hereinafter referred to as "the Platform",
                  <br />
                  and any individual making a booking via the website, hereinafter referred to as "the Customer".
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">1. PURPOSE</h2>
                <p className="text-gray-700 leading-relaxed">
                  The Platform sells private boat tours in Koh Samui (Thailand) via its website. 
                  The actual services are delivered by a third-party local operator: Smile Samui Tour. 
                  By booking a service via the website, the Customer accepts all conditions outlined in this document.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">2. PLATFORM ROLE</h2>
                <p className="text-gray-700 leading-relaxed">
                  The Platform operates as an independent reseller of boat tour services. 
                  It handles booking management, payment collection, and transfers the agreed amount to the local service provider. 
                  Tour execution is the sole responsibility of the local provider, Smile Samui Tour.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">3. SERVICE DETAILS</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p>Available tours include:</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Half-day tour: 4 hours</li>
                    <li>Full-day tour: 6 hours</li>
                  </ul>
                  <p>Each tour includes rental of a private boat for up to 10 people.</p>
                  <p>Schedules, departure points, and additional options are clearly listed on each tour's booking page.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. PAYMENT</h2>
                <p className="text-gray-700 leading-relaxed">
                  Full payment is required at the time of booking. 
                  A booking is considered confirmed once payment is processed and validated. 
                  All payments are processed securely by JSD MEDIA LLP via Stripe, credit card, or other secure payment methods.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">5. CANCELLATION POLICY</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p>Customers can cancel their booking up to 2 days before the scheduled tour.</p>
                  <p>After this deadline, no refund will be guaranteed, except by agreement in exceptional cases.</p>
                  <p>In case of bad weather or force majeure, the customer may be offered either rescheduling or a partial refund, at the Platform's discretion.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">6. LIABILITY</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p>The service itself (navigation, safety, equipment, assistance) is operated by the local provider, Smile Samui Tour, under their own licenses and insurance.</p>
                  <p><strong>The Platform cannot be held liable for:</strong></p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Service execution</li>
                    <li>Any incident, damage, or delay during the tour</li>
                    <li>The quality of service provided by the local operator</li>
                  </ul>
                  <p>All service-related complaints must be addressed directly to the local operator.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">7. PERSONAL DATA</h2>
                <p className="text-gray-700 leading-relaxed">
                  Customer data is collected solely for the purpose of processing the booking and facilitating communication with the local service provider. 
                  It will not be sold or used for marketing purposes without explicit consent. 
                  Please refer to our Privacy Policy for more details.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">8. APPLICABLE LAW</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms and Conditions are governed by the laws of England and Wales. 
                  Any dispute shall be subject to the exclusive jurisdiction of the courts of London (United Kingdom), except prior amicable resolution.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsConditions;
