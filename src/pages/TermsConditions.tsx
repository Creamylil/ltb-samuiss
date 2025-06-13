
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
                Conditions Générales d'Utilisation
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  Bienvenue sur les services de tours en long tail boat de JSD MEDIA LLP à Koh Samui. En réservant nos services, 
                  vous acceptez de vous conformer et d'être lié par les conditions générales suivantes. Veuillez les examiner 
                  attentivement avant de faire une réservation.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">2. Réservation et paiement</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p><strong>2.1 Processus de réservation :</strong> Toutes les réservations doivent être effectuées via notre site web officiel ou agents autorisés.</p>
                  <p><strong>2.2 Paiement :</strong> Le paiement intégral est requis au moment de la réservation via notre passerelle de paiement sécurisée.</p>
                  <p><strong>2.3 Confirmation :</strong> Une confirmation de réservation sera envoyée dans les 24 heures suivant la réception du paiement.</p>
                  <p><strong>2.4 Tarification :</strong> Tous les prix sont affichés en Baht thaïlandais (THB) et incluent les taxes applicables.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">3. Politique d'annulation et de remboursement</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p><strong>3.1 Annulation gratuite :</strong> Les réservations peuvent être annulées sans frais jusqu'à 72 heures avant l'heure de départ prévue.</p>
                  <p><strong>3.2 Annulation tardive :</strong> Les annulations effectuées dans les 72 heures précédant le départ ne donneront pas droit à un remboursement.</p>
                  <p><strong>3.3 Annulation météorologique :</strong> Les tours annulés en raison de conditions météorologiques défavorables recevront un remboursement complet ou une option de reprogrammation gratuite.</p>
                  <p><strong>3.4 Traitement des remboursements :</strong> Les remboursements approuvés seront traités dans les 5 à 10 jours ouvrables vers le mode de paiement original.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Politique de modification</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p><strong>4.1 Modifications gratuites :</strong> Les changements de date, heure ou nombre d'invités peuvent être effectués gratuitement jusqu'à 48 heures avant le départ.</p>
                  <p><strong>4.2 Modifications tardives :</strong> Les changements demandés dans les 48 heures précédant le départ peuvent entraîner des frais supplémentaires selon la disponibilité.</p>
                  <p><strong>4.3 Demandes de mise à niveau :</strong> Les demandes de services supplémentaires ou de mises à niveau sont soumises à disponibilité et entraîneront des frais supplémentaires.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">5. Sécurité et responsabilité</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p><strong>5.1 Équipement de sécurité :</strong> Tout l'équipement de sécurité nécessaire est fourni et doit être porté selon les instructions du capitaine.</p>
                  <p><strong>5.2 Capacité de nage :</strong> Les invités doivent nous informer de toute limitation de nage ou condition médicale pouvant affecter leur sécurité.</p>
                  <p><strong>5.3 Assurance :</strong> Nous maintenons une assurance responsabilité civile complète, mais une assurance voyage personnelle est fortement recommandée.</p>
                  <p><strong>5.4 Limitation de responsabilité :</strong> Notre responsabilité est limitée à la valeur du tour réservé. Nous ne sommes pas responsables des blessures personnelles, objets perdus ou dommages indirects.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">6. Responsabilités des passagers</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p><strong>6.1 Conduite :</strong> Tous les passagers doivent se comporter respectueusement envers les membres d'équipage et autres invités.</p>
                  <p><strong>6.2 Instructions :</strong> Les passagers doivent suivre toutes les instructions de sécurité fournies par le capitaine et l'équipage.</p>
                  <p><strong>6.3 Alcool :</strong> La consommation excessive d'alcool qui met en danger la sécurité ou perturbe autres invités est interdite.</p>
                  <p><strong>6.4 Responsabilité environnementale :</strong> Les passagers doivent respecter la vie marine et les environnements locaux.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">7. Force majeure</h2>
                <p className="text-gray-700 leading-relaxed">
                  Nous ne sommes pas responsables des annulations ou retards causés par des circonstances indépendantes de notre volonté, 
                  y compris mais sans s'y limiter les conditions météorologiques sévères, catastrophes naturelles, restrictions gouvernementales, 
                  grèves ou autres événements de force majeure.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">8. Protection de la vie privée et des données</h2>
                <p className="text-gray-700 leading-relaxed">
                  Nous collectons et traitons les données personnelles conformément au RGPD UK et aux lois sur la protection des données. 
                  Vos informations sont utilisées uniquement pour la gestion des réservations, le service client et les fins de sécurité. 
                  Nous ne partageons pas vos données avec des tiers sans votre consentement.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">9. Résolution des conflits</h2>
                <p className="text-gray-700 leading-relaxed">
                  Tout litige découlant de ces conditions ou de nos services sera d'abord traité par communication directe. 
                  Si la résolution ne peut être atteinte, les litiges seront soumis au droit anglais et à la juridiction 
                  des tribunaux anglais.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">10. Modifications des conditions</h2>
                <p className="text-gray-700 leading-relaxed">
                  Nous nous réservons le droit de modifier ces conditions générales à tout moment. Les conditions mises à jour 
                  seront publiées sur notre site web et s'appliqueront à toutes les réservations futures.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Informations de contact</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p><strong>Société :</strong> JSD MEDIA LLP</p>
                  <p><strong>Enregistrement :</strong> OC455142</p>
                  <p><strong>Adresse :</strong> 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</p>
                  <p><strong>Email :</strong> info@longtailboatkohsamui.com</p>
                </div>
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
