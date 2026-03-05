
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { CalendarIcon, CheckCircle, Users, MapPin, Shield, Clock, Anchor, Car } from 'lucide-react';
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import ReassuranceSection from './ReassuranceSection';

interface BookingData {
  date: Date | undefined;
  people: number;
  name: string;
  email: string;
  phoneCountry: string;
  phone: string;
  phoneType: 'whatsapp' | 'line' | 'normal' | '';
  hotelName: string;
  hotelAddress: string;
  pickupTime: string;
  comment: string;
}

const COUNTRY_CODES = [
  { code: "+66", country: "🇹🇭 Thailand", short: "TH" },
  { code: "+33", country: "🇫🇷 France", short: "FR" },
  { code: "+44", country: "🇬🇧 UK", short: "GB" },
  { code: "+1", country: "🇺🇸 USA / Canada", short: "US" },
  { code: "+49", country: "🇩🇪 Germany", short: "DE" },
  { code: "+61", country: "🇦🇺 Australia", short: "AU" },
  { code: "+65", country: "🇸🇬 Singapore", short: "SG" },
  { code: "+81", country: "🇯🇵 Japan", short: "JP" },
  { code: "+82", country: "🇰🇷 South Korea", short: "KR" },
  { code: "+86", country: "🇨🇳 China", short: "CN" },
  { code: "+91", country: "🇮🇳 India", short: "IN" },
  { code: "+7", country: "🇷🇺 Russia", short: "RU" },
  { code: "+39", country: "🇮🇹 Italy", short: "IT" },
  { code: "+34", country: "🇪🇸 Spain", short: "ES" },
  { code: "+31", country: "🇳🇱 Netherlands", short: "NL" },
  { code: "+46", country: "🇸🇪 Sweden", short: "SE" },
  { code: "+47", country: "🇳🇴 Norway", short: "NO" },
  { code: "+45", country: "🇩🇰 Denmark", short: "DK" },
  { code: "+41", country: "🇨🇭 Switzerland", short: "CH" },
  { code: "+32", country: "🇧🇪 Belgium", short: "BE" },
  { code: "+351", country: "🇵🇹 Portugal", short: "PT" },
  { code: "+48", country: "🇵🇱 Poland", short: "PL" },
  { code: "+43", country: "🇦🇹 Austria", short: "AT" },
  { code: "+852", country: "🇭🇰 Hong Kong", short: "HK" },
  { code: "+60", country: "🇲🇾 Malaysia", short: "MY" },
  { code: "+62", country: "🇮🇩 Indonesia", short: "ID" },
  { code: "+63", country: "🇵🇭 Philippines", short: "PH" },
  { code: "+84", country: "🇻🇳 Vietnam", short: "VN" },
  { code: "+971", country: "🇦🇪 UAE", short: "AE" },
  { code: "+972", country: "🇮🇱 Israel", short: "IL" },
  { code: "+55", country: "🇧🇷 Brazil", short: "BR" },
  { code: "+52", country: "🇲🇽 Mexico", short: "MX" },
  { code: "+27", country: "🇿🇦 South Africa", short: "ZA" },
  { code: "+64", country: "🇳🇿 New Zealand", short: "NZ" },
];

const TAXI_PRICE = 1600;

function getPricingTier(people: number) {
  if (people <= 3) return { captainPrice: 1800, boatPrice: 3200 };
  if (people <= 4) return { captainPrice: 2000, boatPrice: 4200 };
  if (people <= 7) return { captainPrice: 2500, boatPrice: 5000 };
  return { captainPrice: 3000, boatPrice: 6000 };
}

const BookingForm = () => {
  const [bookingData, setBookingData] = useState<BookingData>({
    date: undefined,
    people: 2,
    name: '',
    email: '',
    phoneCountry: '+66',
    phone: '',
    phoneType: '',
    hotelName: '',
    hotelAddress: '',
    pickupTime: '',
    comment: ''
  });

  const [needsTransfer, setNeedsTransfer] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const { captainPrice, boatPrice } = getPricingTier(bookingData.people);
  const margin = boatPrice - captainPrice;
  const totalPrice = needsTransfer ? boatPrice + TAXI_PRICE : boatPrice;
  const deposit = needsTransfer ? margin + TAXI_PRICE : margin;
  const remainingToCaptain = captainPrice;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!bookingData.date || !bookingData.name || !bookingData.email || !bookingData.pickupTime) {
      toast({
        title: "Required fields",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    if (needsTransfer && (!bookingData.hotelName || !bookingData.hotelAddress)) {
      toast({
        title: "Required fields",
        description: "Please fill in your hotel name and address for the transfer",
        variant: "destructive"
      });
      return;
    }

    if (!termsAccepted) {
      toast({
        title: "Terms and conditions",
        description: "Please accept the terms and conditions to proceed",
        variant: "destructive"
      });
      return;
    }

    if (bookingData.people > 10) {
      toast({
        title: "Limit exceeded",
        description: "Maximum 10 people per boat. Please book a second boat if you are more than 10 people.",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);

    try {
      const { data, error } = await supabase.functions.invoke('create-payment', {
        body: {
          people: bookingData.people,
          depositTHB: deposit,
          totalPriceTHB: totalPrice,
          captainPriceTHB: remainingToCaptain,
          needsTransfer,
          bookingData: {
            ...bookingData,
            phone: `${bookingData.phoneCountry} ${bookingData.phone}`,
            date: bookingData.date ? format(bookingData.date, 'yyyy-MM-dd') : ''
          }
        }
      });

      if (error) throw error;

      if (data?.url) {
        window.open(data.url, '_blank');
        toast({
          title: "Redirecting to payment",
          description: "You are being redirected to the secure payment page for the deposit"
        });
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Payment error",
        description: "An error occurred while creating the payment. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="shadow-2xl border-2 border-blue-100">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-orange-50">
          <div className="text-center space-y-2 mt-4">
            <div className="flex justify-center items-center space-x-6 text-sm flex-wrap gap-y-2">
              <div className="flex items-center text-green-600">
                <CheckCircle className="w-4 h-4 mr-1" />
                <span className="font-semibold">Private longtail boat</span>
              </div>
              <div className="flex items-center text-green-600">
                <Anchor className="w-4 h-4 mr-1" />
                <span className="font-semibold">Local captain included</span>
              </div>
              <div className="flex items-center text-green-600">
                <Car className="w-4 h-4 mr-1" />
                <span className="font-semibold">Optional hotel transfer</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-8">

            <div className="grid md:grid-cols-2 gap-6">
              {/* Number of guests */}
              <div className="space-y-2">
                <Label htmlFor="people" className="text-lg font-semibold">Number of guests *</Label>
                <Select value={bookingData.people.toString()} onValueChange={(value) =>
                  setBookingData((prev) => ({ ...prev, people: parseInt(value) }))
                }>
                  <SelectTrigger className="h-12 text-lg">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((num) =>
                      <SelectItem key={num} value={num.toString()}>
                        {num} guest{num > 1 ? 's' : ''}
                      </SelectItem>
                    )}
                  </SelectContent>
                </Select>

                {/* Boat price display */}
                <p className="text-sm text-gray-500">Boat price: <strong className="text-blue-600">฿{boatPrice.toLocaleString()} THB</strong></p>
              </div>

              {/* Date */}
              <div className="space-y-2">
                <Label className="text-lg font-semibold">Select date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal h-12 text-lg">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {bookingData.date ? format(bookingData.date, "PPP", { locale: enUS }) : "Choose your adventure date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={bookingData.date}
                      onSelect={(date) => setBookingData((prev) => ({ ...prev, date }))}
                      disabled={(date) => {
                        const minDate = new Date();
                        minDate.setDate(minDate.getDate() + 2);
                        minDate.setHours(0, 0, 0, 0);
                        return date < minDate;
                      }}
                      initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Transfer checkbox */}
            <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <Checkbox
                id="transfer"
                checked={needsTransfer}
                onCheckedChange={(checked) => setNeedsTransfer(checked as boolean)}
              />
              <div className="flex-1">
                <Label htmlFor="transfer" className="text-base font-semibold cursor-pointer flex items-center gap-2">
                  <Car className="w-4 h-4 text-blue-600" />
                  I need hotel transfer (+฿{TAXI_PRICE.toLocaleString()} THB)
                </Label>
                <p className="text-sm text-gray-500 mt-0.5">Round-trip transfer: hotel → pier → hotel</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Pickup Time - conditional based on transfer */}
              {needsTransfer ? (
                <div className="space-y-2">
                  <Label htmlFor="pickupTime" className="text-lg font-semibold">Preferred pickup time *</Label>
                  <Select value={bookingData.pickupTime} onValueChange={(value) =>
                    setBookingData((prev) => ({ ...prev, pickupTime: value }))
                  }>
                    <SelectTrigger className="h-12 text-lg">
                      <SelectValue placeholder="Select pickup time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="08:00">08:00</SelectItem>
                      <SelectItem value="08:30">08:30</SelectItem>
                      <SelectItem value="09:00">09:00</SelectItem>
                      <SelectItem value="09:30">09:30</SelectItem>
                      <SelectItem value="10:00">10:00</SelectItem>
                      <SelectItem value="10:30">10:30</SelectItem>
                      <SelectItem value="11:00">11:00</SelectItem>
                      <SelectItem value="13:00">13:00</SelectItem>
                      <SelectItem value="13:30">13:30</SelectItem>
                      <SelectItem value="14:00">14:00</SelectItem>
                      <SelectItem value="14:30">14:30</SelectItem>
                      <SelectItem value="15:00">15:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              ) : (
                <div className="space-y-2">
                  <Label htmlFor="pickupTime" className="text-lg font-semibold">Arrival time at pier *</Label>
                  <Select value={bookingData.pickupTime} onValueChange={(value) =>
                    setBookingData((prev) => ({ ...prev, pickupTime: value }))
                  }>
                    <SelectTrigger className="h-12 text-lg">
                      <SelectValue placeholder="Select arrival time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="08:00">08:00</SelectItem>
                      <SelectItem value="08:30">08:30</SelectItem>
                      <SelectItem value="09:00">09:00</SelectItem>
                      <SelectItem value="09:30">09:30</SelectItem>
                      <SelectItem value="10:00">10:00</SelectItem>
                      <SelectItem value="10:30">10:30</SelectItem>
                      <SelectItem value="11:00">11:00</SelectItem>
                      <SelectItem value="13:00">13:00</SelectItem>
                      <SelectItem value="13:30">13:30</SelectItem>
                      <SelectItem value="14:00">14:00</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-amber-600 font-medium">⚠️ Last departure from the pier is at 2:00 PM</p>
                </div>
              )}

              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-lg font-semibold">Full name *</Label>
                <Input
                  id="name"
                  value={bookingData.name}
                  onChange={(e) => setBookingData((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter your full name"
                  className="h-12 text-lg" />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-lg font-semibold">Email address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={bookingData.email}
                  onChange={(e) => setBookingData((prev) => ({ ...prev, email: e.target.value }))}
                  placeholder="your@email.com"
                  className="h-12 text-lg" />
              </div>

              {/* Phone Type */}
              <div className="space-y-2">
                <Label htmlFor="phoneType" className="text-lg font-semibold">Phone type *</Label>
                <Select value={bookingData.phoneType} onValueChange={(value: 'whatsapp' | 'line' | 'normal') =>
                  setBookingData((prev) => ({ ...prev, phoneType: value }))
                }>
                  <SelectTrigger className="h-12 text-lg">
                    <SelectValue placeholder="Select phone type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                    <SelectItem value="line">Line</SelectItem>
                    <SelectItem value="normal">Regular phone</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-lg font-semibold">Phone number *</Label>
                <div className="flex gap-2">
                  <Select value={bookingData.phoneCountry} onValueChange={(value) =>
                    setBookingData((prev) => ({ ...prev, phoneCountry: value }))
                  }>
                    <SelectTrigger className="h-12 text-base w-[140px] flex-shrink-0">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {COUNTRY_CODES.map((c) => (
                        <SelectItem key={c.code} value={c.code}>
                          {c.country} ({c.code})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    id="phone"
                    value={bookingData.phone}
                    onChange={(e) => setBookingData((prev) => ({ ...prev, phone: e.target.value }))}
                    placeholder="123 456 789"
                    className="h-12 text-lg flex-1" />
                </div>
              </div>

              {/* Hotel fields - only shown when transfer is selected */}
              {needsTransfer && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="hotelName" className="text-lg font-semibold">Hotel name *</Label>
                    <Input
                      id="hotelName"
                      value={bookingData.hotelName}
                      onChange={(e) => setBookingData((prev) => ({ ...prev, hotelName: e.target.value }))}
                      placeholder="Enter your hotel name"
                      className="h-12 text-lg" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hotelAddress" className="text-lg font-semibold">Hotel address *</Label>
                    <Input
                      id="hotelAddress"
                      value={bookingData.hotelAddress}
                      onChange={(e) => setBookingData((prev) => ({ ...prev, hotelAddress: e.target.value }))}
                      placeholder="Enter your hotel address"
                      className="h-12 text-lg" />
                  </div>
                </>
              )}
            </div>

            {/* Comment */}
            <div className="space-y-2">
              <Label htmlFor="comment" className="text-lg font-semibold">Special requests or comments</Label>
              <Textarea
                id="comment"
                value={bookingData.comment}
                onChange={(e) => setBookingData((prev) => ({ ...prev, comment: e.target.value }))}
                placeholder="Special requests, dietary requirements or comments..."
                className="min-h-[100px] text-lg" />
            </div>

            {/* Terms and Conditions Checkbox */}
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg border">
              <Checkbox
                id="terms"
                checked={termsAccepted}
                onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
                className="mt-1" />
              <div className="flex-1">
                <Label htmlFor="terms" className="text-sm font-medium leading-relaxed cursor-pointer">
                  I accept the{" "}
                  <Link to="/terms-conditions" className="text-blue-600 hover:text-blue-800 underline" target="_blank">
                    terms and conditions
                  </Link>
                  {" "}and{" "}
                  <Link to="/sales-conditions" className="text-blue-600 hover:text-blue-800 underline" target="_blank">
                    terms of use
                  </Link>
                  . *
                </Label>
              </div>
            </div>

            {/* Price Summary */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl border-2 border-green-200">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800 mb-1">
                    Total price: ฿{totalPrice.toLocaleString()} THB
                  </div>
                  <div className="text-sm text-gray-500">
                    for {bookingData.people} guest{bookingData.people > 1 ? 's' : ''}
                    {needsTransfer ? ' — with hotel transfer' : ' — without transfer'}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 space-y-3">
                  <div className="flex justify-between items-center text-lg">
                    <span className="font-semibold text-orange-700">💳 Deposit to pay today:</span>
                    <span className="font-bold text-orange-700 text-xl">฿{deposit.toLocaleString()} THB</span>
                  </div>
                  <div className="flex justify-between items-center text-lg">
                    <span className="font-semibold text-blue-700">🛥️ Pay to captain on the day:</span>
                    <span className="font-bold text-blue-700 text-xl">฿{remainingToCaptain.toLocaleString()} THB</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-orange-200 text-sm text-gray-700">
                  <p className="font-medium">
                    ⚠️ The remaining balance of <strong>฿{remainingToCaptain.toLocaleString()} THB</strong> must be paid directly to the captain on the day of the tour.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-3">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Includes:</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      <span className="font-semibold">Private longtail boat</span>
                    </div>
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      <span className="font-semibold">Local captain</span>
                    </div>
                    {needsTransfer && (
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        <span className="font-semibold">Hotel transfer (round trip)</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Reassurance Section */}
            <ReassuranceSection />

            {/* Submit button */}
            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-base md:text-xl font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
              disabled={!bookingData.date || !bookingData.name || !bookingData.email || !bookingData.pickupTime || !termsAccepted || isProcessing || (needsTransfer && (!bookingData.hotelName || !bookingData.hotelAddress))}>
              <span className="break-words text-center leading-tight flex items-center justify-center">
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>🛥️ Pay Deposit Now - ฿{deposit.toLocaleString()} THB</>
                )}
              </span>
            </Button>

            <div className="text-center space-y-3">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-sm">
                <div className="flex items-center justify-center text-green-600 space-x-1">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium">Instant confirmation</span>
                </div>
                <div className="flex items-center justify-center text-blue-600 space-x-1">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium">Free cancellation (72h)</span>
                </div>
                <div className="flex items-center justify-center text-purple-600 space-x-1">
                  <Users className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium">Free modifications (48h)</span>
                </div>
                <div className="flex items-center justify-center text-orange-600 space-x-1">
                  <Shield className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium">Secure payment</span>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingForm;
