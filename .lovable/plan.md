

# Plan: Emails de confirmation avec Resend

## Secrets à configurer

Stocker deux secrets dans le projet :
- **RESEND_API_KEY** : `re_9Db85VZw_6FH2JgvRVSaQmV1HGw9M6Vg4`
- **ADMIN_EMAIL** : ton adresse email (à confirmer lors de l'implémentation)

## Modification de `update-booking-status/index.ts`

Après la mise à jour du statut en `completed`, envoyer 2 emails via l'API Resend (`https://api.resend.com/emails`) :

### Email 1 : Confirmation client
- **To** : `data.email` (email du booking)
- **From** : `onboarding@resend.dev` (expéditeur par défaut Resend en mode gratuit)
- **Objet** : "Booking Confirmed - Private Longtail Boat Tour"
- **Contenu HTML** : récapitulatif (date, personnes, horaire, dépot payé, reste à payer au capitaine, transfert, contact WhatsApp)

### Email 2 : Notification admin
- **To** : `ADMIN_EMAIL`
- **Objet** : "New Booking - [Nom] - [Date]"
- **Contenu HTML** : toutes les infos (nom, email, téléphone, date, personnes, hotel, commentaire, montants)

## Fichiers modifiés

| Fichier | Action |
|---------|--------|
| `supabase/functions/update-booking-status/index.ts` | Ajouter l'envoi des 2 emails après mise à jour du statut |

Pas de migration DB nécessaire. Pas de changement frontend.

