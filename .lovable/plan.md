

## Plan: Add Reassurance Elements

### 1. New `ReassuranceSection` component (`src/components/ReassuranceSection.tsx`)
A component displayed below the booking form price summary, with icon-based bullet points:

- **After your deposit is paid**: "Once your deposit is confirmed, we will contact you via your preferred method (WhatsApp, Line or Phone) to finalize all details."
- **Hotel pickup included**: "Our driver will pick you up at your hotel and bring you back after the tour — round trip included."
- **Licensed captain**: "Your captain is experienced and licensed. Life jackets are provided for all passengers."
- **Weather guarantee**: "If weather conditions are unsafe, we offer a full refund or free reschedule."
- **Secure payment**: "Secure payment via Stripe — your card details are never stored on our servers."
- **Flexible booking**: "Free cancellation up to 72h before | Free modification up to 48h before."
- **High season notice** (highlighted box): "High season tip: We recommend booking at least 2-3 days in advance to guarantee availability."

### 2. Update `BookingForm.tsx`
Import and render `<ReassuranceSection />` between the price summary and the submit button.

### 3. Update FAQ (`src/components/FAQ.tsx`)
Add 3 new FAQ entries:
- "What happens after I pay the deposit?" — Explanation of the contact + pickup flow.
- "Should I book in advance during high season?" — Recommend 2-3 days ahead.
- "What is the cancellation and refund policy?" — 72h free cancel, weather refund, 48h free modification.

### 4. Update `PaymentSuccess.tsx`
Add a visual "What happens next" timeline with 4 steps:
1. Deposit confirmed (done)
2. We contact you to confirm details
3. Driver picks you up at your hotel
4. Enjoy your private boat tour & pay the captain

No changes to Header, Footer, or general UX layout.

