
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, Users, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useSearchParams, Link } from 'react-router-dom';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

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
                🎉 Paiement confirmé !
              </CardTitle>
              <p className="text-lg text-gray-700 mt-4">
                Votre réservation de long tail boat a été confirmée avec succès.
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">
                    🚁 Prochaines étapes
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <strong>Confirmation par email :</strong> Vous recevrez un email de confirmation dans les minutes qui suivent.
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <strong>Contact personnalisé :</strong> Notre équipe vous contactera par email ou téléphone pour organiser l'heure exacte de récupération à votre hôtel.
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <strong>Transfert inclus :</strong> Le transfert depuis votre hôtel est inclus dans le prix.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">
                    ℹ️ Informations importantes
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p>• <strong>Annulation gratuite :</strong> Jusqu'à 72h avant la date du tour</p>
                    <p>• <strong>Modifications gratuites :</strong> Jusqu'à 48h avant la date du tour</p>
                    <p>• <strong>Météo :</strong> En cas de mauvais temps, nous vous proposerons une date alternative ou un remboursement complet</p>
                    <p>• <strong>Contact d'urgence :</strong> +66 XX XXX XXXX (disponible 24/7)</p>
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <h3 className="text-xl font-semibold text-orange-800 mb-4">
                    🛥️ Votre aventure vous attend !
                  </h3>
                  <p className="text-gray-700">
                    Préparez-vous à vivre une journée inoubliable à bord de votre long tail boat privé. 
                    N'oubliez pas d'apporter votre crème solaire, votre appareil photo et votre bonne humeur !
                  </p>
                </div>

                {sessionId && (
                  <div className="bg-gray-50 p-4 rounded-lg border">
                    <p className="text-sm text-gray-600">
                      <strong>Numéro de transaction :</strong> {sessionId}
                    </p>
                  </div>
                )}

                <div className="text-center space-y-4">
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <Link to="/">
                      Retour à l'accueil
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/booking">
                      Faire une nouvelle réservation
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
