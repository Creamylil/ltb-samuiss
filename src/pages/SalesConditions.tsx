
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
              <h2 className="text-xl font-semibold mb-3">1. Service Provider</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p><strong>Company:</strong> JSD Media LLP</p>
                <p><strong>Registration Number:</strong> OC455142</p>
                <p><strong>Registered Address:</strong> 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</p>
                <p><strong>Operating Location:</strong> Koh Samui, Thailand</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Services Offered</h2>
              <p className="text-gray-700 leading-relaxed">
                We provide private long tail boat tours around Koh Samui, Thailand, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>Private long tail boat with experienced local skipper</li>
                <li>Hotel pickup and drop-off service (main tourist areas)</li>
                <li>Safety equipment (life jackets, first aid kit)</li>
                <li>Basic snorkeling equipment</li>
                <li>Fuel and boat insurance</li>
                <li>Access to various islands including Koh Madsum (Pig Island) and Koh Tan</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. Pricing Structure</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p><strong>Base Tour Prices (up to 5 passengers):</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Half Day Tour (4 hours): 5,000 THB</li>
                  <li>Full Day Tour (6-8 hours): 6,500 THB</li>
                </ul>
                <p><strong>Additional Passengers:</strong> 1,000 THB per person (maximum 10 passengers total)</p>
                <p><strong>Optional Add-ons:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Cooler with drinks: 1,000 THB</li>
                  <li>Fishing equipment: 300 THB</li>
                  <li>Thai lunch: 450 THB per person</li>
                  <li>Tropical fruits + drink: 350 THB per person</li>
                  <li>Champagne bottle: 1,800 THB</li>
                  <li>Birthday package: 600 THB</li>
                  <li>Bluetooth speaker: 100 THB</li>
                  <li>Extra hour: 1,500 THB per hour</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Booking and Payment Terms</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p><strong>4.1 Booking Process:</strong> All reservations must be made through our official website or authorized agents.</p>
                <p><strong>4.2 Payment Method:</strong> Secure online payment via Stripe payment gateway (credit/debit cards accepted).</p>
                <p><strong>4.3 Payment Timing:</strong> Full payment is required at the time of booking.</p>
                <p><strong>4.4 Currency:</strong> All prices are quoted in Thai Baht (THB). USD equivalents are provided for reference only.</p>
                <p><strong>4.5 Confirmation:</strong> Booking confirmation and pickup details will be sent within 24 hours of payment.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Cancellation and Refund Policy</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p><strong>5.1 Free Cancellation Period:</strong> Bookings may be cancelled without penalty up to 72 hours before the scheduled departure time.</p>
                <p><strong>5.2 Late Cancellation:</strong> Cancellations made within 72 hours of departure will result in forfeiture of the full payment.</p>
                <p><strong>5.3 Weather-Related Cancellations:</strong> Tours cancelled due to unsafe weather conditions will receive a full refund or free rescheduling option.</p>
                <p><strong>5.4 No-Show Policy:</strong> Failure to appear for the tour without prior notice will result in forfeiture of the full payment.</p>
                <p><strong>5.5 Refund Processing:</strong> Approved refunds will be processed within 5-10 business days to the original payment method.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Modification Policy</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p><strong>6.1 Free Modification Period:</strong> Changes to date, time, or number of guests can be made without charge up to 48 hours before departure.</p>
                <p><strong>6.2 Late Modifications:</strong> Changes requested within 48 hours of departure may incur additional charges and are subject to availability.</p>
                <p><strong>6.3 Upgrade Requests:</strong> Additional services or upgrades are subject to availability and will incur additional charges.</p>
                <p><strong>6.4 Modification Process:</strong> All modifications must be requested via email or phone to our customer service team.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. Service Inclusions and Exclusions</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p><strong>Included in Tour Price:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Private long tail boat for your group</li>
                  <li>Professional English-speaking skipper</li>
                  <li>Hotel pickup and drop-off (Chaweng, Lamai, Bophut, Maenam areas)</li>
                  <li>Safety equipment and life jackets</li>
                  <li>Basic snorkeling equipment</li>
                  <li>Fuel and boat insurance</li>
                  <li>First aid kit and emergency equipment</li>
                </ul>
                
                <p><strong>Not Included:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Food and beverages (available as optional add-ons)</li>
                  <li>National park entrance fees (if applicable)</li>
                  <li>Personal travel insurance</li>
                  <li>Underwater cameras or photography equipment</li>
                  <li>Tips and gratuities</li>
                  <li>Personal expenses</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. Health and Safety Requirements</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p><strong>8.1 Age Restrictions:</strong> Children under 2 years are not permitted. Children 2-12 must be accompanied by adults.</p>
                <p><strong>8.2 Swimming Ability:</strong> Basic swimming skills recommended for snorkeling activities.</p>
                <p><strong>8.3 Health Conditions:</strong> Guests must disclose any medical conditions that may affect their safety during the tour.</p>
                <p><strong>8.4 Pregnancy:</strong> Pregnant women are advised to consult with medical professionals before participating.</p>
                <p><strong>8.5 Alcohol Policy:</strong> Moderate alcohol consumption is permitted, but excessive drinking that endangers safety is prohibited.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">9. Force Majeure and Operational Conditions</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p><strong>9.1 Weather Conditions:</strong> Tours may be cancelled or modified due to adverse weather conditions for safety reasons.</p>
                <p><strong>9.2 Force Majeure Events:</strong> We are not liable for cancellations due to circumstances beyond our control including natural disasters, government restrictions, or civil unrest.</p>
                <p><strong>9.3 Equipment Failure:</strong> In case of boat or equipment failure, we will provide alternative arrangements or full refund.</p>
                <p><strong>9.4 Route Changes:</strong> Itineraries may be modified based on weather, sea conditions, or local regulations.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">10. Liability and Insurance</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p><strong>10.1 Liability Limitation:</strong> Our liability is limited to the total value of the tour booked.</p>
                <p><strong>10.2 Personal Property:</strong> We are not responsible for loss or damage to personal belongings.</p>
                <p><strong>10.3 Insurance Coverage:</strong> Comprehensive marine and liability insurance is maintained for all operations.</p>
                <p><strong>10.4 Travel Insurance:</strong> Personal travel insurance is strongly recommended for all guests.</p>
                <p><strong>10.5 Indemnification:</strong> Guests agree to indemnify the company against claims arising from their own negligence or misconduct.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">11. Customer Responsibilities</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p><strong>11.1 Accurate Information:</strong> Guests must provide accurate contact and hotel information for pickup arrangements.</p>
                <p><strong>11.2 Punctuality:</strong> Guests must be ready at the designated pickup time and location.</p>
                <p><strong>11.3 Conduct:</strong> Respectful behavior towards crew and other guests is required at all times.</p>
                <p><strong>11.4 Safety Compliance:</strong> All safety instructions must be followed without exception.</p>
                <p><strong>11.5 Environmental Respect:</strong> Guests must respect marine life and local environments.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">12. Data Protection and Privacy</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p><strong>12.1 Data Collection:</strong> Personal data is collected only for booking and safety purposes.</p>
                <p><strong>12.2 Data Usage:</strong> Information is used solely for tour operations and customer service.</p>
                <p><strong>12.3 Data Protection:</strong> All data is handled in accordance with UK GDPR and applicable data protection laws.</p>
                <p><strong>12.4 Data Sharing:</strong> Personal information is not shared with third parties without explicit consent.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">13. Governing Law and Dispute Resolution</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p><strong>13.1 Applicable Law:</strong> These conditions are governed by English law.</p>
                <p><strong>13.2 Jurisdiction:</strong> Any disputes will be subject to the exclusive jurisdiction of English courts.</p>
                <p><strong>13.3 Alternative Dispute Resolution:</strong> We encourage resolution through direct communication before formal legal proceedings.</p>
                <p><strong>13.4 Severability:</strong> If any provision is found invalid, the remainder of these conditions remain in effect.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">14. Contact Information</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p><strong>Customer Service:</strong> info@longtailboatkohsamui.com</p>
                <p><strong>Phone:</strong> +66 123 456 789</p>
                <p><strong>WhatsApp:</strong> +66 123 456 789</p>
                <p><strong>Business Hours:</strong> 8:00 AM - 8:00 PM (Thailand Time)</p>
                <p><strong>Registered Office:</strong> JSD Media LLP, 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SalesConditions;
