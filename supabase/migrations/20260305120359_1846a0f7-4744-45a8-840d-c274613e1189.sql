CREATE TABLE public.bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  date date NOT NULL,
  people integer NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  phone_country text NOT NULL,
  phone text NOT NULL,
  phone_type text NOT NULL DEFAULT 'normal',
  needs_transfer boolean NOT NULL DEFAULT false,
  hotel_name text,
  hotel_address text,
  pickup_time text NOT NULL,
  comment text,
  boat_price_thb integer NOT NULL,
  deposit_thb integer NOT NULL,
  captain_price_thb integer NOT NULL,
  transfer_price_thb integer NOT NULL DEFAULT 0,
  payment_status text NOT NULL DEFAULT 'pending',
  stripe_session_id text
);

ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;