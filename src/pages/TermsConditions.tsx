
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
                Conditions Générales de Vente
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="text-sm text-gray-600 mb-6">
                Dernière mise à jour : 13 juin 2025
              </div>

              <section>
                <p className="text-gray-700 leading-relaxed">
                  Ces Conditions Générales régissent la relation contractuelle entre :
                  <br />
                  <strong>JSD MEDIA LLP</strong>
                  <br />
                  Enregistrée au Royaume-Uni sous le numéro OC455142
                  <br />
                  Adresse enregistrée : 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ
                  <br />
                  Ci-après dénommée "la Plateforme",
                  <br />
                  et tout individu effectuant une réservation via le site web, ci-après dénommé "le Client".
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">1. OBJET</h2>
                <p className="text-gray-700 leading-relaxed">
                  La Plateforme vend des tours privés en bateau à Koh Samui (Thaïlande) via son site web. 
                  Les services réels sont délivrés par un opérateur local tiers : Smile Samui Tour. 
                  En réservant un service via le site web, le Client accepte toutes les conditions énoncées dans ce document.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">2. RÔLE DE LA PLATEFORME</h2>
                <p className="text-gray-700 leading-relaxed">
                  La Plateforme opère en tant que revendeur indépendant de services de tours en bateau. 
                  Elle gère la gestion des réservations, la collecte des paiements, et transfère le montant convenu au prestataire local. 
                  L'exécution du tour est la seule responsabilité du prestataire local, Smile Samui Tour.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">3. DÉTAILS DU SERVICE</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p>Les tours disponibles incluent :</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Tour demi-journée : 4 heures</li>
                    <li>Tour journée complète : 6 heures</li>
                  </ul>
                  <p>Chaque tour inclut la location d'un bateau privé pour jusqu'à 10 personnes.</p>
                  <p>Les horaires, points de départ et options supplémentaires sont clairement listés sur la page de réservation de chaque tour.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. PAIEMENT</h2>
                <p className="text-gray-700 leading-relaxed">
                  Le paiement intégral est requis au moment de la réservation. 
                  Une réservation est considérée comme confirmée une fois que le paiement est traité et validé. 
                  Tous les paiements sont traités de manière sécurisée par JSD MEDIA LLP via Stripe, carte de crédit, ou autres méthodes de paiement sécurisées.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">5. POLITIQUE D'ANNULATION</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p>Les clients peuvent annuler leur réservation jusqu'à 2 jours avant le tour prévu.</p>
                  <p>Après cette échéance, aucun remboursement ne sera garanti, sauf accord en cas exceptionnel.</p>
                  <p>En cas de mauvais temps ou de force majeure, le client peut se voir proposer soit une reprogrammation soit un remboursement partiel, à la discrétion de la Plateforme.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">6. RESPONSABILITÉ</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p>Le service lui-même (navigation, sécurité, équipement, assistance) est opéré par le prestataire local, Smile Samui Tour, sous leurs propres licences et assurance.</p>
                  <p><strong>La Plateforme ne peut être tenue responsable de :</strong></p>
                  <ul className="list-disc list-inside ml-4">
                    <li>L'exécution du service</li>
                    <li>Tout incident, dommage ou retard pendant le tour</li>
                    <li>La qualité du service fourni par l'opérateur local</li>
                  </ul>
                  <p>Toutes les plaintes liées au service doivent être adressées directement à l'opérateur local.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">7. DONNÉES PERSONNELLES</h2>
                <p className="text-gray-700 leading-relaxed">
                  Les données du client sont collectées uniquement dans le but de traiter la réservation et faciliter la communication avec le prestataire local. 
                  Elles ne seront pas vendues ou utilisées à des fins marketing sans consentement explicite. 
                  Veuillez vous référer à notre Politique de Confidentialité pour plus de détails.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">8. DROIT APPLICABLE</h2>
                <p className="text-gray-700 leading-relaxed">
                  Ces Conditions Générales sont régies par les lois de l'Angleterre et du Pays de Galles. 
                  Tout litige relèvera de la juridiction exclusive des tribunaux de Londres (Royaume-Uni), sauf résolution amiable préalable.
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
