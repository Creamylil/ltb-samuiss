
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { people, depositTHB, totalPriceTHB, captainPriceTHB, bookingData } = await req.json();
    
    console.log(`Processing deposit payment for ${people} guests`);
    console.log(`Total: ${totalPriceTHB} THB, Deposit: ${depositTHB} THB, Captain: ${captainPriceTHB} THB`);
    
    // Convert deposit from THB to USD (approximate rate: 35 THB = 1 USD)
    const THB_TO_USD_RATE = 35;
    const depositUSD = Math.ceil(depositTHB / THB_TO_USD_RATE);

    console.log(`Deposit in USD: $${depositUSD}`);

    const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeSecretKey) {
      console.error("Stripe secret key is missing");
      throw new Error("Payment configuration error. Please contact support.");
    }

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: "2023-10-16",
    });

    const session = await stripe.checkout.sessions.create({
      customer_email: bookingData.email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `Private Longtail Boat Tour - Deposit`,
              description: `Deposit for ${people} guest${people > 1 ? 's' : ''} - ${bookingData.date} at ${bookingData.pickupTime}. Remaining ฿${captainPriceTHB.toLocaleString()} THB to pay to captain on the day.`,
            },
            unit_amount: depositUSD * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.get("origin")}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/booking`,
      metadata: {
        people: people.toString(),
        totalPriceTHB: totalPriceTHB.toString(),
        depositTHB: depositTHB.toString(),
        captainPriceTHB: captainPriceTHB.toString(),
        depositUSD: depositUSD.toString(),
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

    console.log(`Stripe session created: ${session.id}`);

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error('Error creating payment session:', error);
    
    let errorMessage = 'An error occurred while processing your payment request.';
    if (error.message.includes('Invalid API Key')) {
      errorMessage = 'Payment configuration error. Please contact support.';
    } else if (error.message.includes('network') || error.message.includes('connection')) {
      errorMessage = 'Network error. Please check your connection and try again.';
    }
    
    return new Response(JSON.stringify({ 
      error: errorMessage,
      details: error.message 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
