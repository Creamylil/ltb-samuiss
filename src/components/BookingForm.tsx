
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, CheckCircle, Users, MapPin, Shield, Clock, CreditCard } from "lucide-react";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";

interface BookingData {
  formula: 'half-day' | 'full-day' | '';
  date: Date | undefined;
  people: number;
  name: string;
  email: string;
  phone: string;
  phoneType: 'whatsapp' | 'line' | 'normal' | '';
  hotelName: string;
  hotelAddress: string;
  pickupTime: string;
  comment: string;
  options: {
    cooler: boolean;
    fishing: boolean;
    lunch: boolean;
    fruits: boolean;
    champagne: boolean;
    birthday: boolean;
    speaker: boolean;
    extraHour: boolean;
  };
}

const BookingForm = () => {
  const [bookingData, setBookingData] = useState<BookingData>({
    formula: '',
    date: undefined,
    people: 2,
    name: '',
    email: '',
    phone: '',
    phoneType: '',
    hotelName: '',
    hotelAddress: '',
    pickupTime: '',
    comment: '',
    options: {
      cooler: false,
      fishing: false,
      lunch: false,
      fruits: false,
      champagne: false,
      birthday: false,
      speaker: false,
      extraHour: false,
    },
  });

  const [totalPrice, setTotalPrice] = useState(0);

  // Calculate total price
  useEffect(() => {
    let basePrice = 0;
    
    // Base price according to formula
    if (bookingData.formula === 'half-day') {
      basePrice = 5000;
    } else if (bookingData.formula === 'full-day') {
      basePrice = 8000;
    }

    // Extra people (after 5 people)
    if (bookingData.people > 5) {
      const extraPeoplePrice = bookingData.formula === 'full-day' ? 1400 : 1000;
      basePrice += (bookingData.people - 5) * extraPeoplePrice;
    }

    setTotalPrice(basePrice);
  }, [bookingData.formula, bookingData.people]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!bookingData.formula || !bookingData.date || !bookingData.name || !bookingData.email || !bookingData.hotelName || !bookingData.hotelAddress || !bookingData.pickupTime) {
      alert('Please fill in all required fields');
      return;
    }

    if (bookingData.people > 10) {
      alert('Maximum 10 people per boat. Please book a second boat if you are more than 10 people.');
      return;
    }

    // Here you would integrate Stripe Checkout
    console.log('Booking data:', bookingData);
    console.log('Total price:', totalPrice, 'THB');
    
    // Simulation of opening Stripe Checkout
    alert(`Redirecting to Stripe payment for ${totalPrice} THB ($${Math.round(totalPrice / 33)})`);
  };

  const pricePerPerson = totalPrice / bookingData.people;
  const dollarTotal = Math.round(totalPrice / 33);
  const dollarPerPerson = Math.round(pricePerPerson / 33);

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="shadow-2xl border-2 border-blue-100">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-orange-50">
          <CardTitle className="text-2xl text-center text-gray-800">
            🛥️ Book Your Private Long Tail Boat - From 1,000 THB per person with hotel transfer included
          </CardTitle>
          <div className="text-center space-y-2 mt-4">
            <div className="flex justify-center items-center space-x-6 text-sm">
              <div className="flex items-center text-green-600">
                <CheckCircle className="w-4 h-4 mr-1" />
                <span className="font-semibold">Private Skipper Included</span>
              </div>
              <div className="flex items-center text-green-600">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="font-semibold">Hotel Transfer Included</span>
              </div>
              <div className="flex items-center text-green-600">
                <Users className="w-4 h-4 mr-1" />
                <span className="font-semibold">100% Private Boat</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Package */}
              <div className="space-y-2">
                <Label htmlFor="formula" className="text-lg font-semibold">Choose Your Package *</Label>
                <Select value={bookingData.formula} onValueChange={(value: 'half-day' | 'full-day') => 
                  setBookingData(prev => ({ ...prev, formula: value }))
                }>
                  <SelectTrigger className="h-12 text-lg">
                    <SelectValue placeholder="Select your long tail boat package" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="half-day">
                      <div className="flex flex-col">
                        <span className="font-semibold">Half Day (4 hours)</span>
                        <span className="text-sm text-gray-600">5,000 THB for up to 5 people</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="full-day">
                      <div className="flex flex-col">
                        <span className="font-semibold">Full Day (6-8 hours)</span>
                        <span className="text-sm text-gray-600">8,000 THB for up to 5 people</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date */}
              <div className="space-y-2">
                <Label className="text-lg font-semibold">Select Date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal h-12 text-lg"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {bookingData.date ? format(bookingData.date, "PPP", { locale: enUS }) : "Choose your adventure date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={bookingData.date}
                      onSelect={(date) => setBookingData(prev => ({ ...prev, date }))}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Number of people */}
              <div className="space-y-2">
                <Label htmlFor="people" className="text-lg font-semibold">Number of guests (total) *</Label>
                <Select value={bookingData.people.toString()} onValueChange={(value) => 
                  setBookingData(prev => ({ ...prev, people: parseInt(value) }))
                }>
                  <SelectTrigger className="h-12 text-lg">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} guest{num > 1 ? 's' : ''}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {bookingData.people > 5 && (
                  <p className="text-sm text-blue-600 font-semibold">
                    +{(bookingData.people - 5) * (bookingData.formula === 'full-day' ? 1400 : 1000)} THB for {bookingData.people - 5} extra guest{bookingData.people - 5 > 1 ? 's' : ''}
                  </p>
                )}
              </div>

              {/* Pickup Time */}
              <div className="space-y-2">
                <Label htmlFor="pickupTime" className="text-lg font-semibold">Preferred Pickup Time *</Label>
                <Select value={bookingData.pickupTime} onValueChange={(value) => 
                  setBookingData(prev => ({ ...prev, pickupTime: value }))
                }>
                  <SelectTrigger className="h-12 text-lg">
                    <SelectValue placeholder="Select pickup time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="08:00">08:00 AM</SelectItem>
                    <SelectItem value="08:30">08:30 AM</SelectItem>
                    <SelectItem value="09:00">09:00 AM</SelectItem>
                    <SelectItem value="09:30">09:30 AM</SelectItem>
                    <SelectItem value="10:00">10:00 AM</SelectItem>
                    <SelectItem value="10:30">10:30 AM</SelectItem>
                    <SelectItem value="11:00">11:00 AM</SelectItem>
                    <SelectItem value="13:00">01:00 PM</SelectItem>
                    <SelectItem value="13:30">01:30 PM</SelectItem>
                    <SelectItem value="14:00">02:00 PM</SelectItem>
                    <SelectItem value="14:30">02:30 PM</SelectItem>
                    <SelectItem value="15:00">03:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-lg font-semibold">Full Name *</Label>
                <Input
                  id="name"
                  value={bookingData.name}
                  onChange={(e) => setBookingData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter your full name"
                  className="h-12 text-lg"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-lg font-semibold">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={bookingData.email}
                  onChange={(e) => setBookingData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="your@email.com"
                  className="h-12 text-lg"
                />
              </div>

              {/* Phone Type */}
              <div className="space-y-2">
                <Label htmlFor="phoneType" className="text-lg font-semibold">Phone Type *</Label>
                <Select value={bookingData.phoneType} onValueChange={(value: 'whatsapp' | 'line' | 'normal') => 
                  setBookingData(prev => ({ ...prev, phoneType: value }))
                }>
                  <SelectTrigger className="h-12 text-lg">
                    <SelectValue placeholder="Select phone type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                    <SelectItem value="line">Line</SelectItem>
                    <SelectItem value="normal">Regular Phone</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-lg font-semibold">Phone Number *</Label>
                <Input
                  id="phone"
                  value={bookingData.phone}
                  onChange={(e) => setBookingData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="+1 234 567 8900"
                  className="h-12 text-lg"
                />
              </div>

              {/* Hotel Name */}
              <div className="space-y-2">
                <Label htmlFor="hotelName" className="text-lg font-semibold">Hotel Name *</Label>
                <Input
                  id="hotelName"
                  value={bookingData.hotelName}
                  onChange={(e) => setBookingData(prev => ({ ...prev, hotelName: e.target.value }))}
                  placeholder="Enter your hotel name"
                  className="h-12 text-lg"
                />
              </div>

              {/* Hotel Address */}
              <div className="space-y-2">
                <Label htmlFor="hotelAddress" className="text-lg font-semibold">Hotel Address *</Label>
                <Input
                  id="hotelAddress"
                  value={bookingData.hotelAddress}
                  onChange={(e) => setBookingData(prev => ({ ...prev, hotelAddress: e.target.value }))}
                  placeholder="Enter your hotel address"
                  className="h-12 text-lg"
                />
              </div>
            </div>

            {/* Comment */}
            <div className="space-y-2">
              <Label htmlFor="comment" className="text-lg font-semibold">Special Requests or Comments</Label>
              <Textarea
                id="comment"
                value={bookingData.comment}
                onChange={(e) => setBookingData(prev => ({ ...prev, comment: e.target.value }))}
                placeholder="Any special requests, dietary requirements, or comments..."
                className="min-h-[100px] text-lg"
              />
            </div>

            {/* Total price with marketing elements */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl border-2 border-green-200">
              <div className="text-center space-y-4">
                <div className="text-3xl font-bold text-green-600">
                  Total: {totalPrice.toLocaleString()} THB (${dollarTotal})
                </div>
                <div className="text-lg text-gray-700">
                  <strong>Only ${dollarPerPerson}/person ({Math.round(pricePerPerson).toLocaleString()} THB)</strong> - Best value in Koh Samui!
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    <span className="font-semibold">Private Boat & Skipper</span>
                  </div>
                  <div className="flex items-center justify-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    <span className="font-semibold">Hotel Transfer Included</span>
                  </div>
                  <div className="flex items-center justify-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    <span className="font-semibold">Safety Equipment</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <p className="text-sm text-gray-700 font-medium">
                    ℹ️ After payment, you will be contacted by email or phone to arrange the exact pickup time and location at your hotel.
                  </p>
                </div>
                <p className="text-sm text-gray-600 italic">
                  🔥 Limited spots available - Book now to secure your date!
                </p>
              </div>
            </div>

            {/* Submit button */}
            <Button 
              type="submit" 
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-base md:text-xl font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
              disabled={!bookingData.formula || !bookingData.date || !bookingData.name || !bookingData.email || !bookingData.hotelName || !bookingData.hotelAddress || !bookingData.pickupTime}
            >
              <span className="break-words text-center leading-tight">
                🛥️ Book Now - {totalPrice.toLocaleString()} THB (${dollarTotal})
              </span>
            </Button>
            
            {/* Professional confirmation text */}
            <div className="text-center space-y-3">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-sm">
                <div className="flex items-center justify-center text-green-600 space-x-1">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium">Instant Booking Confirmation</span>
                </div>
                <div className="flex items-center justify-center text-blue-600 space-x-1">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium">Free Cancellation (72h)</span>
                </div>
                <div className="flex items-center justify-center text-purple-600 space-x-1">
                  <Users className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium">Free Modifications (48h)</span>
                </div>
                <div className="flex items-center justify-center text-orange-600 space-x-1">
                  <Shield className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium">Secure Payment Gateway</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 max-w-2xl mx-auto">
                Your booking is protected by our comprehensive cancellation and modification policies. 
                All payments are processed through secure, encrypted channels for your safety.
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingForm;
