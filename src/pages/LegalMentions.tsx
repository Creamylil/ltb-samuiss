
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
                Mentions Légales
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-3">Informations légales</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p><strong>Site web :</strong> https://longtailboat-kohsamui.com/</p>
                  <p><strong>Propriétaire :</strong> JSD MEDIA LLP</p>
                  <p><strong>Numéro d'entreprise :</strong> OC455142 (enregistré en Angleterre et au Pays de Galles)</p>
                  <p><strong>Adresse du siège social :</strong> 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</p>
                  <p><strong>Email de contact :</strong> info@longtailboat-kohsamui.com</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">1. Éditeur</h2>
                <p className="text-gray-700 leading-relaxed">
                  Ce site web est publié par JSD MEDIA LLP, une société enregistrée au Royaume-Uni agissant comme plateforme en ligne pour la réservation de tours privés en bateau à Koh Samui, Thaïlande. Le site web appartient et est géré par JSD MEDIA LLP.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">2. Hébergement</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p>Le site web est conçu et hébergé par :</p>
                  <p><strong>Lovable</strong></p>
                  <p>Constructeur de sites web et fournisseur d'hébergement</p>
                  <p>https://www.lovable.so</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">3. Propriété intellectuelle</h2>
                <p className="text-gray-700 leading-relaxed">
                  Tout le contenu de ce site (y compris les textes, photos, vidéos, logos, mise en page et graphiques) est la propriété exclusive de JSD MEDIA LLP ou utilisé sous licence. Toute reproduction, modification ou distribution sans autorisation écrite est strictement interdite.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Activité commerciale et responsabilité</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p>JSD MEDIA LLP opère en tant que revendeur et agent de réservation. Tous les tours sont fournis par Smile Samui Tour, un prestataire de services indépendant situé à Koh Samui, Thaïlande.</p>
                  <p>La Plateforme gère la réservation et le paiement. Le service réel (transport, navigation, équipement, sécurité) est fourni sous la seule responsabilité de l'opérateur local.</p>
                  <p><strong>JSD MEDIA LLP ne peut être tenu responsable de :</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Retards ou annulations par le prestataire</li>
                    <li>Accidents ou dommages pendant le tour</li>
                    <li>La qualité ou l'exécution du service local</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">5. Données et cookies</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p>Ce site web peut collecter des données (via des formulaires de réservation ou des outils d'analyse) strictement pour la prestation de services et le suivi des performances. Aucune donnée personnelle n'est partagée ou vendue.</p>
                  <p>Vous avez le droit d'accéder, modifier ou supprimer vos informations personnelles. Pour toute demande relative aux données, veuillez nous envoyer un email à : info@longtailboat-kohsamui.com.</p>
                  <p>Ce site utilise des cookies essentiels pour le fonctionnement et peut utiliser des cookies de performance pour améliorer l'expérience utilisateur. Vous pouvez désactiver les cookies via les paramètres de votre navigateur.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">6. Droit applicable</h2>
                <p className="text-gray-700 leading-relaxed">
                  Cette mention légale et toutes les questions connexes sont régies par les lois de l'Angleterre et du Pays de Galles. Tout litige juridique relèvera de la juridiction exclusive des tribunaux de Londres (Royaume-Uni).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">📬 Contact</h2>
                <p className="text-gray-700 leading-relaxed">
                  Pour toute question ou plainte relative à ce site ou aux services fournis, veuillez contacter :
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
