
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const LegalMentions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl text-center text-gray-800">
                Legal Notice
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-3">Legal Information</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p><strong>Website:</strong> https://longtailboat-kohsamui.com/</p>
                  <p><strong>Owner:</strong> JSD MEDIA LLP</p>
                  <p><strong>Company Number:</strong> OC455142 (registered in England and Wales)</p>
                  <p><strong>Registered Office Address:</strong> 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</p>
                  <p><strong>Contact Email:</strong> info@longtailboat-kohsamui.com</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">1. Publisher</h2>
                <p className="text-gray-700 leading-relaxed">
                  This website is published by JSD MEDIA LLP, a company registered in the United Kingdom acting as an online platform for booking private boat tours in Koh Samui, Thailand. The website is owned and operated by JSD MEDIA LLP.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">2. Hosting</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p>The website is designed and hosted by:</p>
                  <p><strong>Lovable</strong></p>
                  <p>Website builder and hosting provider</p>
                  <p>https://www.lovable.so</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">3. Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed">
                  All content on this site (including texts, photos, videos, logos, layout, and graphics) is the exclusive property of JSD MEDIA LLP or used under license. Any reproduction, modification, or distribution without written authorization is strictly prohibited.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Business Activity and Liability</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p>JSD MEDIA LLP operates as a reseller and booking agent. All tours are provided by Smile Samui Tour, an independent service provider located in Koh Samui, Thailand.</p>
                  <p>The Platform handles booking and payment. The actual service (transport, navigation, equipment, safety) is provided under the sole responsibility of the local operator.</p>
                  <p><strong>JSD MEDIA LLP cannot be held liable for:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Delays or cancellations by the service provider</li>
                    <li>Accidents or damages during the tour</li>
                    <li>The quality or execution of the local service</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">5. Data and Cookies</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p>This website may collect data (via booking forms or analytics tools) strictly for service delivery and performance tracking. No personal data is shared or sold.</p>
                  <p>You have the right to access, modify, or delete your personal information. For any data-related requests, please email us at: info@longtailboat-kohsamui.com.</p>
                  <p>This site uses essential cookies for functionality and may use performance cookies to improve user experience. You can disable cookies via your browser settings.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">6. Applicable Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  This legal notice and all related matters are governed by the laws of England and Wales. Any legal dispute shall be subject to the exclusive jurisdiction of the courts of London (United Kingdom).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">📬 Contact</h2>
                <p className="text-gray-700 leading-relaxed">
                  For any questions or complaints related to this site or the services provided, please contact:
                  <br />
                  📧 info@longtailboat-kohsamui.com
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

export default LegalMentions;
