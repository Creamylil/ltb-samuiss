
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
                Conditions d'Utilisation
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="text-sm text-gray-600 mb-6">
                Dernière mise à jour : 13 juin 2025
              </div>

              <section>
                <p className="text-gray-700 leading-relaxed">
                  Ces Conditions d'Utilisation régissent l'accès et l'utilisation du site web https://longtailboat-kohsamui.com/ exploité par :
                  <br />
                  <strong>JSD MEDIA LLP</strong>
                  <br />
                  Enregistrée au Royaume-Uni sous le numéro OC455142
                  <br />
                  Siège social : 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ
                  <br />
                  Email : info@longtailboat-kohsamui.com
                  <br />
                  <br />
                  En accédant à ce site web, l'utilisateur ("vous") accepte d'être lié par ces Conditions d'Utilisation et de se conformer aux lois et réglementations applicables.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">1. OBJET DU SITE WEB</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p>Ce site web permet aux utilisateurs de :</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>En savoir plus sur les tours privés en long-tail boat à Koh Samui, Thaïlande</li>
                    <li>Voir les options de tours disponibles et les prix</li>
                    <li>Soumettre des demandes de réservation</li>
                    <li>Contacter la plateforme</li>
                  </ul>
                  <p>JSD MEDIA LLP agit comme plateforme de réservation et intermédiaire entre les utilisateurs et un prestataire de services tiers (Smile Samui Tour).</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">2. ACCÈS AU SITE WEB</h2>
                <p className="text-gray-700 leading-relaxed">
                  Le site web est accessible 24h/24 et 7j/7, sauf en cas de maintenance, de panne technique ou de force majeure. 
                  JSD MEDIA LLP ne peut garantir un accès ininterrompu au site web et peut suspendre l'accès sans préavis pour des mises à jour ou des interventions techniques.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">3. OBLIGATIONS DE L'UTILISATEUR</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p>En utilisant le site, vous acceptez de :</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Fournir des informations exactes et véridiques lors de la soumission d'une demande de réservation</li>
                    <li>Utiliser le site web uniquement à des fins personnelles et non commerciales</li>
                    <li>Vous abstenir de toute utilisation frauduleuse, abusive ou illégale des services fournis</li>
                    <li>Ne pas tenter de perturber ou d'endommager l'infrastructure ou la sécurité du site web</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. FONCTION DE RÉSERVATION</h2>
                <p className="text-gray-700 leading-relaxed">
                  Le site web permet aux utilisateurs de demander ou de compléter la réservation d'un tour en bateau. 
                  Toutes les réservations sont régies par les Conditions Générales de Vente (CGV), qui définissent la relation contractuelle, le paiement, l'annulation et les responsabilités des parties. 
                  JSD MEDIA LLP se réserve le droit de refuser ou d'annuler toute réservation qui est incomplète, frauduleuse ou en violation de ses Conditions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">5. PROPRIÉTÉ INTELLECTUELLE</h2>
                <p className="text-gray-700 leading-relaxed">
                  Le site web et tout son contenu (textes, images, logos, code, design, vidéos) sont la propriété exclusive de JSD MEDIA LLP ou utilisés sous licence. 
                  Aucune partie de ce site web ne peut être reproduite, copiée, distribuée ou exploitée à des fins commerciales sans consentement écrit préalable.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">6. RESPONSABILITÉ</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p>JSD MEDIA LLP fournit des informations sur le site web de bonne foi mais ne garantit pas :</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>L'exhaustivité ou l'exactitude du contenu</li>
                    <li>Que le site sera exempt d'erreurs ou ininterrompu</li>
                    <li>Que le site web ou le serveur sont exempts de virus ou d'autres composants nuisibles</li>
                  </ul>
                  <p>L'utilisateur assume l'entière responsabilité de l'utilisation du site web et de tout risque associé.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">7. LIENS TIERS</h2>
                <p className="text-gray-700 leading-relaxed">
                  Le site peut inclure des liens vers des sites web tiers. 
                  JSD MEDIA LLP n'a aucun contrôle sur ces sites externes et n'accepte aucune responsabilité pour leur contenu, leur exactitude ou leur sécurité.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">8. PROTECTION DES DONNÉES ET COOKIES</h2>
                <p className="text-gray-700 leading-relaxed">
                  Pour des informations sur la façon dont les données utilisateur sont traitées, stockées et protégées, veuillez vous référer à notre Politique de Confidentialité. 
                  Le site web peut utiliser des cookies pour améliorer l'expérience de navigation. Les utilisateurs peuvent désactiver les cookies via les paramètres de leur navigateur.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">9. MODIFICATIONS</h2>
                <p className="text-gray-700 leading-relaxed">
                  JSD MEDIA LLP se réserve le droit de mettre à jour ou de modifier ces Conditions d'Utilisation à tout moment, sans préavis. 
                  Il est de la responsabilité de l'utilisateur de consulter régulièrement cette page pour rester informé de tout changement.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">10. DROIT APPLICABLE</h2>
                <p className="text-gray-700 leading-relaxed">
                  Ces Conditions d'Utilisation sont régies par les lois de l'Angleterre et du Pays de Galles. 
                  En cas de litige, les tribunaux de Londres (Royaume-Uni) auront juridiction exclusive.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">📬 CONTACT</h2>
                <p className="text-gray-700 leading-relaxed">
                  Si vous avez des questions sur ce site web ou ces Conditions d'Utilisation, vous pouvez nous contacter à :
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
