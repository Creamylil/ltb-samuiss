
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, Users, MapPin, Phone, Mail, Clock, MessageCircle, Car, Anchor, CreditCard } from 'lucide-react';
import { useSearchParams, Link } from 'react-router-dom';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  const whatsappNumber = "+33767028161";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=Hello! I just completed my booking for a longtail boat tour. My transaction number is: ${sessionId}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-2xl border-2 border-green-200">
            <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-16 h-16 text-green-600" />
              </div>
              <CardTitle className="text-3xl text-green-700">
                🎉 Payment confirmed!
              </CardTitle>
              <p className="text-lg text-gray-700 mt-4">
                Your long tail boat booking has been successfully confirmed.
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">
                    🚁 Next steps
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <strong>Email confirmation:</strong> You will receive a confirmation email within minutes.
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <strong>Personal contact:</strong> Our team will contact you by email or phone to arrange the exact pickup time at your hotel.
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <strong>Transfer included:</strong> Hotel transfer is included in the price.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">
                    ℹ️ Important information
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p>• <strong>Free cancellation:</strong> Up to 72h before tour date</p>
                    <p>• <strong>Free modifications:</strong> Up to 48h before tour date</p>
                    <p>• <strong>Weather:</strong> In case of bad weather, we will offer an alternative date or full refund</p>
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <h3 className="text-xl font-semibold text-orange-800 mb-4">
                    🛥️ Your adventure awaits!
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Get ready for an unforgettable day aboard your private long tail boat. 
                    Don't forget to bring your sunscreen, camera and good mood!
                  </p>
                  <p className="text-orange-800 font-semibold">
                    ⚠️ Remember: The remaining balance must be paid directly to the captain on the day of the tour.
                  </p>
                </div>

                {/* WhatsApp Contact Button */}
                <div className="bg-green-100 p-6 rounded-lg border border-green-300">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">
                    💬 Need immediate assistance?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Contact us directly on WhatsApp for any questions or special requests.
                  </p>
                  <Button 
                    asChild 
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                  >
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Contact us on WhatsApp
                    </a>
                  </Button>
                </div>

                {sessionId && (
                  <div className="bg-gray-50 p-4 rounded-lg border">
                    <p className="text-sm text-gray-600">
                      <strong>Transaction number:</strong> {sessionId}
                    </p>
                  </div>
                )}

                <div className="text-center space-y-4">
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <Link to="/">
                      Back to home
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/booking">
                      Make a new booking
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
