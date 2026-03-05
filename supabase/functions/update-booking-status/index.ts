import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

async function sendEmail(to: string, subject: string, html: string) {
  const resendApiKey = Deno.env.get("RESEND_API_KEY");
  if (!resendApiKey) {
    console.error("RESEND_API_KEY not configured");
    return;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${resendApiKey}`,
    },
    body: JSON.stringify({
      from: "Koh Samui Boat Tour <onboarding@resend.dev>",
      to: [to],
      subject,
      html,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error(`Failed to send email to ${to}:`, err);
  } else {
    console.log(`Email sent to ${to}`);
  }
}

function buildClientEmail(booking: any): string {
  const balanceDue = booking.boat_price_thb + booking.captain_price_thb + booking.transfer_price_thb - booking.deposit_thb;
  
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #0ea5e9; text-align: center;">🎉 Booking Confirmed!</h1>
      <p>Hi ${booking.name},</p>
      <p>Your private longtail boat tour is confirmed! Here's a summary:</p>
      
      <div style="background: #f0f9ff; border-radius: 12px; padding: 20px; margin: 20px 0;">
        <h2 style="color: #0369a1; margin-top: 0;">Trip Details</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #64748b;">📅 Date</td><td style="padding: 8px 0; font-weight: bold;">${booking.date}</td></tr>
          <tr><td style="padding: 8px 0; color: #64748b;">👥 Guests</td><td style="padding: 8px 0; font-weight: bold;">${booking.people}</td></tr>
          <tr><td style="padding: 8px 0; color: #64748b;">⏰ Pickup Time</td><td style="padding: 8px 0; font-weight: bold;">${booking.pickup_time}</td></tr>
          ${booking.needs_transfer ? `<tr><td style="padding: 8px 0; color: #64748b;">🏨 Hotel</td><td style="padding: 8px 0; font-weight: bold;">${booking.hotel_name || 'N/A'}</td></tr>` : ''}
        </table>
      </div>

      <div style="background: #f0fdf4; border-radius: 12px; padding: 20px; margin: 20px 0;">
        <h2 style="color: #166534; margin-top: 0;">💰 Payment Summary</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #64748b;">Deposit paid online</td><td style="padding: 8px 0; font-weight: bold; color: #16a34a;">${booking.deposit_thb.toLocaleString()} THB</td></tr>
          <tr><td style="padding: 8px 0; color: #64748b;">Balance due to captain</td><td style="padding: 8px 0; font-weight: bold; color: #ea580c;">${balanceDue.toLocaleString()} THB</td></tr>
        </table>
      </div>

      <div style="background: #fefce8; border-radius: 12px; padding: 20px; margin: 20px 0;">
        <h2 style="color: #854d0e; margin-top: 0;">📋 What's Next?</h2>
        <ul style="color: #713f12; padding-left: 20px;">
          <li>We'll confirm your pickup details before the trip</li>
          <li>Pay the remaining balance in cash to the captain on the day</li>
          <li>Bring sunscreen, towel, and a smile! 😎</li>
        </ul>
      </div>

      <div style="text-align: center; margin-top: 30px;">
        <a href="https://wa.me/66612345678" style="display: inline-block; background: #25d366; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">💬 Contact us on WhatsApp</a>
      </div>

      <p style="color: #94a3b8; text-align: center; margin-top: 30px; font-size: 12px;">
        Koh Samui Private Longtail Boat Tour
      </p>
    </div>
  `;
}

function buildAdminEmail(booking: any): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #7c3aed;">🚀 New Booking Received!</h1>
      
      <div style="background: #f5f3ff; border-radius: 12px; padding: 20px; margin: 20px 0;">
        <h2 style="color: #6d28d9; margin-top: 0;">Client Info</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 6px 0; color: #64748b;">Name</td><td style="padding: 6px 0; font-weight: bold;">${booking.name}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;">Email</td><td style="padding: 6px 0;">${booking.email}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;">Phone</td><td style="padding: 6px 0;">${booking.phone_country} ${booking.phone} (${booking.phone_type})</td></tr>
        </table>
      </div>

      <div style="background: #f0f9ff; border-radius: 12px; padding: 20px; margin: 20px 0;">
        <h2 style="color: #0369a1; margin-top: 0;">Trip Details</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 6px 0; color: #64748b;">Date</td><td style="padding: 6px 0; font-weight: bold;">${booking.date}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;">Guests</td><td style="padding: 6px 0;">${booking.people}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;">Pickup</td><td style="padding: 6px 0;">${booking.pickup_time}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;">Transfer</td><td style="padding: 6px 0;">${booking.needs_transfer ? '✅ Yes' : '❌ No'}</td></tr>
          ${booking.hotel_name ? `<tr><td style="padding: 6px 0; color: #64748b;">Hotel</td><td style="padding: 6px 0;">${booking.hotel_name}</td></tr>` : ''}
          ${booking.hotel_address ? `<tr><td style="padding: 6px 0; color: #64748b;">Hotel Address</td><td style="padding: 6px 0;">${booking.hotel_address}</td></tr>` : ''}
          ${booking.comment ? `<tr><td style="padding: 6px 0; color: #64748b;">Comment</td><td style="padding: 6px 0;">${booking.comment}</td></tr>` : ''}
        </table>
      </div>

      <div style="background: #f0fdf4; border-radius: 12px; padding: 20px; margin: 20px 0;">
        <h2 style="color: #166534; margin-top: 0;">💰 Financials</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 6px 0; color: #64748b;">Boat</td><td style="padding: 6px 0;">${booking.boat_price_thb.toLocaleString()} THB</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;">Captain</td><td style="padding: 6px 0;">${booking.captain_price_thb.toLocaleString()} THB</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;">Transfer</td><td style="padding: 6px 0;">${booking.transfer_price_thb.toLocaleString()} THB</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b; font-weight: bold;">Deposit paid</td><td style="padding: 6px 0; font-weight: bold; color: #16a34a;">${booking.deposit_thb.toLocaleString()} THB</td></tr>
        </table>
      </div>
    </div>
  `;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { sessionId } = await req.json();

    if (!sessionId) {
      throw new Error("Missing session ID");
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { data, error } = await supabase
      .from("bookings")
      .update({ payment_status: "completed" })
      .eq("stripe_session_id", sessionId)
      .select()
      .single();

    if (error) {
      console.error("Error updating booking status:", error);
      throw error;
    }

    console.log(`Booking ${data.id} marked as completed`);

    // Send confirmation emails
    const adminEmail = Deno.env.get("ADMIN_EMAIL");

    await Promise.all([
      sendEmail(data.email, "Booking Confirmed – Private Longtail Boat Tour 🚤", buildClientEmail(data)),
      adminEmail
        ? sendEmail(adminEmail, `New Booking – ${data.name} – ${data.date}`, buildAdminEmail(data))
        : Promise.resolve(),
    ]);

    return new Response(JSON.stringify({ success: true, booking: data }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error updating booking status:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
