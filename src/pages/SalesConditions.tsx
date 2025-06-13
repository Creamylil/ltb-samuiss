
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SalesConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl text-center text-gray-800">
                Terms of Use
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="text-sm text-gray-600 mb-6">
                Last updated: June 13, 2025
              </div>

              <section>
                <p className="text-gray-700 leading-relaxed">
                  These Terms of Use govern access to and use of the website https://longtailboat-kohsamui.com/ operated by:
                  <br />
                  <strong>JSD MEDIA LLP</strong>
                  <br />
                  Registered in the United Kingdom under number OC455142
                  <br />
                  Registered office: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ
                  <br />
                  Email: info@longtailboat-kohsamui.com
                  <br />
                  <br />
                  By accessing this website, the user ("you") agrees to be bound by these Terms of Use and to comply with applicable laws and regulations.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">1. WEBSITE PURPOSE</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p>This website allows users to:</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Learn about private long-tail boat tours in Koh Samui, Thailand</li>
                    <li>View available tour options and prices</li>
                    <li>Submit booking requests</li>
                    <li>Contact the platform</li>
                  </ul>
                  <p>JSD MEDIA LLP acts as a booking platform and intermediary between users and a third-party service provider (Smile Samui Tour).</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">2. WEBSITE ACCESS</h2>
                <p className="text-gray-700 leading-relaxed">
                  The website is accessible 24/7, except during maintenance, technical failures, or force majeure. 
                  JSD MEDIA LLP cannot guarantee uninterrupted access to the website and may suspend access without notice for updates or technical interventions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">3. USER OBLIGATIONS</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p>By using the site, you agree to:</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Provide accurate and truthful information when submitting a booking request</li>
                    <li>Use the website only for personal and non-commercial purposes</li>
                    <li>Refrain from any fraudulent, abusive, or illegal use of the services provided</li>
                    <li>Not attempt to disrupt or damage the website's infrastructure or security</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. BOOKING FUNCTION</h2>
                <p className="text-gray-700 leading-relaxed">
                  The website allows users to request or complete booking of a boat tour. 
                  All bookings are governed by the Terms and Conditions, which define the contractual relationship, payment, cancellation, and responsibilities of the parties. 
                  JSD MEDIA LLP reserves the right to refuse or cancel any booking that is incomplete, fraudulent, or in violation of its Terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">5. INTELLECTUAL PROPERTY</h2>
                <p className="text-gray-700 leading-relaxed">
                  The website and all its content (texts, images, logos, code, design, videos) are the exclusive property of JSD MEDIA LLP or used under license. 
                  No part of this website may be reproduced, copied, distributed, or exploited for commercial purposes without prior written consent.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">6. LIABILITY</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p>JSD MEDIA LLP provides information on the website in good faith but does not guarantee:</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>The completeness or accuracy of the content</li>
                    <li>That the site will be error-free or uninterrupted</li>
                    <li>That the website or server are free from viruses or other harmful components</li>
                  </ul>
                  <p>The user assumes full responsibility for using the website and any associated risk.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">7. THIRD-PARTY LINKS</h2>
                <p className="text-gray-700 leading-relaxed">
                  The site may include links to third-party websites. 
                  JSD MEDIA LLP has no control over these external sites and accepts no responsibility for their content, accuracy, or security.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">8. DATA PROTECTION AND COOKIES</h2>
                <p className="text-gray-700 leading-relaxed">
                  For information on how user data is processed, stored, and protected, please refer to our Privacy Policy. 
                  The website may use cookies to improve the browsing experience. Users can disable cookies via their browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">9. MODIFICATIONS</h2>
                <p className="text-gray-700 leading-relaxed">
                  JSD MEDIA LLP reserves the right to update or modify these Terms of Use at any time, without notice. 
                  It is the user's responsibility to regularly check this page to stay informed of any changes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">10. APPLICABLE LAW</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms of Use are governed by the laws of England and Wales. 
                  In case of dispute, the courts of London (United Kingdom) shall have exclusive jurisdiction.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">📬 CONTACT</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have questions about this website or these Terms of Use, you can contact us at:
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

export default SalesConditions;
