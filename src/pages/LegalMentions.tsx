
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LegalMentions = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl text-center text-gray-800">
              Legal Mentions
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3">Company Information</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p><strong>Company Name:</strong> JSD Media LLP</p>
                <p><strong>Company Number:</strong> OC455142</p>
                <p><strong>Registered Office Address:</strong> 71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ</p>
                <p><strong>Country of Incorporation:</strong> United Kingdom</p>
                <p><strong>Business Type:</strong> Limited Liability Partnership</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Contact Details</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p><strong>Email:</strong> info@longtailboatkohsamui.com</p>
                <p><strong>Phone:</strong> +66 123 456 789</p>
                <p><strong>WhatsApp:</strong> +66 123 456 789</p>
                <p><strong>Website:</strong> www.longtailboatkohsamui.com</p>
                <p><strong>Business Hours:</strong> 8:00 AM - 8:00 PM (Thailand Time)</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Director Information</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p>Company directors and member information is available through Companies House (UK) under company number OC455142.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Website Hosting and Technical</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p><strong>Hosting Provider:</strong> Lovable</p>
                <p><strong>Server Location:</strong> Cloud Infrastructure</p>
                <p><strong>SSL Certificate:</strong> Secure Socket Layer encryption enabled</p>
                <p><strong>Domain Registration:</strong> Registered domain with appropriate DNS management</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All content on this website, including text, images, logos, design elements, and software, 
                are protected by copyright and belong to JSD Media LLP unless otherwise stated. 
                Unauthorized reproduction, distribution, or use of any content is strictly prohibited 
                without written permission from the copyright owner.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Data Protection and Privacy</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p><strong>Data Controller:</strong> JSD Media LLP</p>
                <p><strong>Data Protection Registration:</strong> Registered with ICO (Information Commissioner's Office) as required under UK GDPR</p>
                <p><strong>Data Processing:</strong> We collect and process personal data in accordance with UK GDPR and applicable data protection laws</p>
                <p><strong>Data Purpose:</strong> Personal data is used solely for booking management, customer service, and operational purposes</p>
                <p><strong>Data Retention:</strong> Personal data is retained only as long as necessary for the purposes specified</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Cookies and Tracking</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p><strong>Cookie Usage:</strong> This website uses cookies to improve user experience and analyze website traffic</p>
                <p><strong>Cookie Types:</strong> Essential cookies for website functionality, analytics cookies for usage statistics</p>
                <p><strong>Consent:</strong> By using our website, you consent to the use of cookies in accordance with our Cookie Policy</p>
                <p><strong>Cookie Management:</strong> Users can manage cookie preferences through their browser settings</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Tourism and Operating Licenses</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p><strong>Thai Tourism License:</strong> Licensed to operate tourism services in Thailand</p>
                <p><strong>Marine Operating License:</strong> Authorized to operate marine tourism activities around Koh Samui</p>
                <p><strong>Safety Certifications:</strong> All vessels and equipment meet required safety standards</p>
                <p><strong>Insurance:</strong> Comprehensive liability and marine insurance coverage</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Applicable Law and Jurisdiction</h2>
              <p className="text-gray-700 leading-relaxed">
                These legal mentions and all related matters are governed by English law. 
                Any disputes arising from the use of this website or our services will be 
                subject to the exclusive jurisdiction of the English courts, unless otherwise 
                specified in our Terms and Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Website Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed">
                While we strive to ensure the accuracy and completeness of information on this website, 
                we make no warranties or representations regarding the accuracy, completeness, or 
                suitability of the information for any particular purpose. Users access and use this 
                website at their own risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Contact for Legal Matters</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p>For any legal inquiries or concerns regarding these legal mentions:</p>
                <p><strong>Email:</strong> legal@longtailboatkohsamui.com</p>
                <p><strong>Postal Address:</strong> JSD Media LLP, 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LegalMentions;
