

# Plan: Save Booking Configurations to Database

## What We'll Do

Create a `bookings` table in the database to store every booking configuration submitted by clients. Each time a client fills out the form and proceeds to payment, the booking details will be saved.

## Database Migration

Create a `bookings` table with the following columns:

| Column | Type | Notes |
|--------|------|-------|
| id | uuid (PK) | Auto-generated |
| created_at | timestamptz | Default now() |
| date | date | Trip date |
| people | integer | Number of guests |
| name | text | Client name |
| email | text | Client email |
| phone_country | text | Country code (+66, etc.) |
| phone | text | Phone number |
| phone_type | text | whatsapp / line / normal |
| needs_transfer | boolean | Hotel transfer option |
| hotel_name | text | Nullable, only if transfer |
| hotel_address | text | Nullable, only if transfer |
| pickup_time | text | Selected time |
| comment | text | Nullable |
| boat_price_thb | integer | Total boat price |
| deposit_thb | integer | Deposit amount |
| captain_price_thb | integer | Amount to pay captain |
| transfer_price_thb | integer | Transfer cost (0 or 1600) |
| payment_status | text | Default 'pending' |
| stripe_session_id | text | Nullable, for tracking |

RLS: Allow anonymous inserts (public booking form, no auth required). No select/update/delete for anon users -- admin-only access later if needed.

## Code Changes

1. **`src/components/BookingForm.tsx`**: After successful Stripe session creation, insert the booking data into the `bookings` table with `payment_status: 'pending'`.

2. **`supabase/functions/create-payment/index.ts`** (alternative approach): Insert the booking server-side in the edge function before creating the Stripe session. This is more reliable since the edge function already has all the data. We'll use the service role key to bypass RLS.

**Chosen approach**: Insert in the edge function (server-side) for reliability. The booking gets saved even if the client closes the browser after payment redirect.

3. **`src/pages/PaymentSuccess.tsx`**: Optionally update the booking status to 'completed' when the payment success page loads (using the Stripe session ID from the URL).

## Summary of Changes

- 1 database migration (create `bookings` table + RLS policy for service role inserts)
- Edit `create-payment` edge function to insert booking record
- Optionally update `PaymentSuccess` page to mark booking as completed

