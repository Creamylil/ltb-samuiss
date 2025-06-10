
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
                <p><strong>Company Name:</strong> Long Tail Boat Koh Samui Co., Ltd.</p>
                <p><strong>Address:</strong> 123 Beach Road, Chaweng, Koh Samui, Surat Thani 84320, Thailand</p>
                <p><strong>Registration Number:</strong> 0123456789012</p>
                <p><strong>VAT Number:</strong> TH012345678901</p>
                <p><strong>Tourism License:</strong> TAT-12345678</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Contact Details</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p><strong>Email:</strong> info@longtailboatkohsamui.com</p>
                <p><strong>Phone:</strong> +66 123 456 789</p>
                <p><strong>WhatsApp:</strong> +66 123 456 789</p>
                <p><strong>Website:</strong> www.longtailboatkohsamui.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Website Hosting</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p><strong>Hosting Provider:</strong> Lovable</p>
                <p><strong>Server Location:</strong> Cloud Infrastructure</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All content on this website, including text, images, logos, and design elements, 
                are protected by copyright and belong to Long Tail Boat Koh Samui Co., Ltd. 
                Unauthorized reproduction is prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Data Protection</h2>
              <p className="text-gray-700 leading-relaxed">
                We collect and process personal data in accordance with Thai data protection laws 
                and international standards. Your data is used solely for booking management and 
                customer service purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                This website uses cookies to improve user experience and analyze website traffic. 
                By using our website, you consent to the use of cookies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Applicable Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These legal mentions are governed by Thai law. Any disputes will be subject 
                to the jurisdiction of Thai courts.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LegalMentions;
