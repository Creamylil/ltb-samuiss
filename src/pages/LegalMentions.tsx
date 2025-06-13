
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
                <h2 className="text-xl font-semibold mb-3">Informations sur la société</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p><strong>Nom de la société :</strong> JSD MEDIA LLP</p>
                  <p><strong>Numéro d'entreprise :</strong> OC455142</p>
                  <p><strong>Adresse du siège social :</strong> 71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ</p>
                  <p><strong>Pays d'incorporation :</strong> Royaume-Uni</p>
                  <p><strong>Type d'entreprise :</strong> Limited Liability Partnership</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Coordonnées</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p><strong>Email :</strong> info@longtailboatkohsamui.com</p>
                  <p><strong>Site web :</strong> www.longtailboatkohsamui.com</p>
                  <p><strong>Horaires :</strong> 8h00 - 20h00 (Heure de Thaïlande)</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Informations sur les dirigeants</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p>Les informations sur les dirigeants et membres de la société sont disponibles via Companies House (UK) sous le numéro d'entreprise OC455142.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Hébergement du site web</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p><strong>Fournisseur d'hébergement :</strong> Lovable</p>
                  <p><strong>Localisation du serveur :</strong> Infrastructure Cloud</p>
                  <p><strong>Certificat SSL :</strong> Chiffrement Secure Socket Layer activé</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Propriété intellectuelle</h2>
                <p className="text-gray-700 leading-relaxed">
                  Tout le contenu de ce site web, y compris les textes, images, logos, éléments de design et logiciels, 
                  sont protégés par le droit d'auteur et appartiennent à JSD MEDIA LLP sauf indication contraire. 
                  La reproduction, distribution ou utilisation non autorisée de tout contenu est strictement interdite 
                  sans autorisation écrite du propriétaire des droits d'auteur.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Protection des données et confidentialité</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p><strong>Responsable du traitement :</strong> JSD MEDIA LLP</p>
                  <p><strong>Enregistrement protection des données :</strong> Enregistré auprès de l'ICO (Information Commissioner's Office) selon les exigences du RGPD UK</p>
                  <p><strong>Traitement des données :</strong> Nous collectons et traitons les données personnelles conformément au RGPD UK et aux lois applicables sur la protection des données</p>
                  <p><strong>Finalité des données :</strong> Les données personnelles sont utilisées uniquement pour la gestion des réservations, le service client et les opérations</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Cookies et suivi</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p><strong>Utilisation des cookies :</strong> Ce site web utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic du site</p>
                  <p><strong>Types de cookies :</strong> Cookies essentiels pour le fonctionnement du site, cookies analytiques pour les statistiques d'utilisation</p>
                  <p><strong>Consentement :</strong> En utilisant notre site web, vous consentez à l'utilisation des cookies conformément à notre Politique de Cookies</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Licences touristiques et d'exploitation</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p><strong>Licence touristique thaïlandaise :</strong> Autorisé à opérer des services touristiques en Thaïlande</p>
                  <p><strong>Licence d'exploitation marine :</strong> Autorisé à opérer des activités de tourisme maritime autour de Koh Samui</p>
                  <p><strong>Certifications de sécurité :</strong> Tous les navires et équipements respectent les normes de sécurité requises</p>
                  <p><strong>Assurance :</strong> Couverture d'assurance responsabilité civile et maritime complète</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Droit applicable et juridiction</h2>
                <p className="text-gray-700 leading-relaxed">
                  Ces mentions légales et toutes les questions connexes sont régies par le droit anglais. 
                  Tout litige découlant de l'utilisation de ce site web ou de nos services sera 
                  soumis à la juridiction exclusive des tribunaux anglais, sauf indication contraire 
                  dans nos Conditions Générales.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Clause de non-responsabilité du site web</h2>
                <p className="text-gray-700 leading-relaxed">
                  Bien que nous nous efforcions d'assurer l'exactitude et l'exhaustivité des informations sur ce site web, 
                  nous ne donnons aucune garantie ou représentation concernant l'exactitude, l'exhaustivité ou 
                  l'adéquation des informations à un usage particulier. Les utilisateurs accèdent et utilisent ce 
                  site web à leurs propres risques.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Contact pour les questions légales</h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p>Pour toute question ou préoccupation légale concernant ces mentions légales :</p>
                  <p><strong>Email :</strong> legal@longtailboatkohsamui.com</p>
                  <p><strong>Adresse postale :</strong> JSD MEDIA LLP, 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</p>
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

export default LegalMentions;
