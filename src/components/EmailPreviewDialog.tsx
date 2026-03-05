import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Eye, Mail } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Booking {
  id: string;
  date: string;
  people: number;
  name: string;
  email: string;
  phone_country: string;
  phone: string;
  phone_type: string;
  needs_transfer: boolean;
  hotel_name: string | null;
  hotel_address: string | null;
  pickup_time: string;
  comment: string | null;
  boat_price_thb: number;
  deposit_thb: number;
  captain_price_thb: number;
  transfer_price_thb: number;
}

function buildClientEmailHtml(booking: Booking): string {
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
      <p style="color: #94a3b8; text-align: center; margin-top: 30px; font-size: 12px;">Koh Samui Private Longtail Boat Tour</p>
    </div>
  `;
}

function buildAdminEmailHtml(booking: Booking): string {
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

interface EmailPreviewDialogProps {
  booking: Booking;
}

const EmailPreviewDialog: React.FC<EmailPreviewDialogProps> = ({ booking }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-1">
          <Mail className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-slate-800 border-slate-700 text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Eye className="w-5 h-5" /> Aperçu des emails — {booking.name}
          </DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="client" className="mt-4">
          <TabsList className="bg-slate-700">
            <TabsTrigger value="client" className="data-[state=active]:bg-sky-600">📧 Email Client</TabsTrigger>
            <TabsTrigger value="admin" className="data-[state=active]:bg-purple-600">📧 Email Admin</TabsTrigger>
          </TabsList>
          <TabsContent value="client" className="mt-4">
            <div className="bg-white rounded-lg p-2">
              <div
                dangerouslySetInnerHTML={{ __html: buildClientEmailHtml(booking) }}
              />
            </div>
          </TabsContent>
          <TabsContent value="admin" className="mt-4">
            <div className="bg-white rounded-lg p-2">
              <div
                dangerouslySetInnerHTML={{ __html: buildAdminEmailHtml(booking) }}
              />
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default EmailPreviewDialog;
