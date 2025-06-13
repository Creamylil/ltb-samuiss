
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { formula, people, bookingData } = await req.json();
    
    // Calculate price based on formula and number of people
    let basePrice = 0;
    if (formula === 'half-day') {
      basePrice = 6000; // 6000 THB for up to 5 people
      if (people > 5) {
        basePrice += (people - 5) * 1200; // +1200 THB per extra person
      }
    } else if (formula === 'full-day') {
      basePrice = 9000; // 9000 THB for up to 5 people
      if (people > 5) {
        basePrice += (people - 5) * 1400; // +1400 THB per extra person
      }
    }

    console.log(`Calculated price: ${basePrice} THB for ${people} people on ${formula} tour`);

    // Initialize Stripe with secret key
    const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeSecretKey) {
      throw new Error("Stripe secret key not configured");
    }

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: "2023-10-16",
    });

    // Create checkout session for one-time payment
    const session = await stripe.checkout.sessions.create({
      customer_email: bookingData.email,
      line_items: [
        {
          price_data: {
            currency: "thb",
            product_data: {
              name: `Long Tail Boat Tour - ${formula === 'half-day' ? 'Half Day (4h)' : 'Full Day (6-8h)'}`,
              description: `Private tour for ${people} person${people > 1 ? 's' : ''} - ${bookingData.date} at ${bookingData.pickupTime}`,
            },
            unit_amount: basePrice * 100, // Stripe expects amount in smallest currency unit (satang for THB)
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.get("origin")}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/booking`,
      metadata: {
        formula: formula,
        people: people.toString(),
        name: bookingData.name,
        email: bookingData.email,
        phone: bookingData.phone,
        phoneType: bookingData.phoneType,
        hotelName: bookingData.hotelName,
        hotelAddress: bookingData.hotelAddress,
        pickupTime: bookingData.pickupTime,
        date: bookingData.date,
        comment: bookingData.comment || '',
      }
    });

    console.log(`Created Stripe session: ${session.id}`);

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error('Error creating payment session:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
