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
    people: 5,
    name: '',
    email: '',
    phone: '',
    phoneType: '',
    hotelName: '',
    hotelAddress: '',
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

  // Calculate total price based on formula and people count
  useEffect(() => {
    let pricePerPerson = 0;
    let minimumPeople = 1;

    if (bookingData.formula === 'half-day') {
      pricePerPerson = 1200;
      minimumPeople = 5;
    } else if (bookingData.formula === 'full-day') {
      pricePerPerson = 1000;
      minimumPeople = 1;
    }

    const actualPeople = Math.max(bookingData.people, minimumPeople);
    const basePrice = pricePerPerson * actualPeople;

    setTotalPrice(basePrice);
  }, [bookingData.people, bookingData.formula]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!bookingData.formula || !bookingData.date || !bookingData.name || !bookingData.email || !bookingData.hotelName || !bookingData.hotelAddress) {
      alert('Please fill in all required fields');
      return;
    }

    if (bookingData.people > 10) {
      alert('Maximum 10 people per boat. Please book a second boat if you are more than 10 people.');
      return;
    }

    // Validation for minimum people on half-day
    if (bookingData.formula === 'half-day' && bookingData.people < 5) {
      alert('Half Day tours require a minimum of 5 people. Please select Full Day for smaller groups.');
      return;
    }

    // Here you would integrate Stripe Checkout
    console.log('Booking data:', bookingData);
    console.log('Total price:', totalPrice, 'THB');
    
    // Simulation of opening Stripe Checkout
    alert(`Redirecting to Stripe payment for ${totalPrice} THB ($${Math.round(totalPrice / 33)})`);
  };

  const updateOption = (option: keyof BookingData['options'], checked: boolean) => {
    setBookingData(prev => ({
      ...prev,
      options: {
        ...prev.options,
        [option]: checked
      }
    }));
  };

  // Premium options data kept for future reactivation
  const optionsData = [
    { key: 'cooler', label: 'Cooler with fresh drinks', price: 1000, type: 'fixed' },
    { key: 'fishing', label: 'Fishing equipment', price: 300, type: 'fixed' },
    { key: 'lunch', label: 'Thai homemade lunch', price: 450, type: 'per_person' },
    { key: 'fruits', label: 'Tropical fruits + drink', price: 350, type: 'per_person' },
    { key: 'champagne', label: 'Champagne bottle', price: 1800, type: 'fixed' },
    { key: 'birthday', label: 'Birthday package', price: 600, type: 'fixed' },
    { key: 'speaker', label: 'Bluetooth speaker + playlist', price: 100, type: 'fixed' },
    { key: 'extraHour', label: 'Extra hour (1 hour)', price: 1500, type: 'fixed' },
  ];

  const getMinimumPeople = () => {
    return bookingData.formula === 'half-day' ? 5 : 1;
  };

  const getPricePerPerson = () => {
    if (bookingData.formula === 'half-day') return 1200;
    if (bookingData.formula === 'full-day') return 1000;
    return 0;
  };

  const actualPeople = Math.max(bookingData.people, getMinimumPeople());
  const pricePerPerson = getPricePerPerson();
  const dollarTotal = Math.round(totalPrice / 33);
  const dollarPerPerson = pricePerPerson > 0 ? Math.round(pricePerPerson / 33) : 0;

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
                  setBookingData(prev => ({ ...prev, formula: value, people: value === 'half-day' ? Math.max(prev.people, 5) : prev.people }))
                }>
                  <SelectTrigger className="h-12 text-lg">
                    <SelectValue placeholder="Select your long tail boat package" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="half-day">
                      <div className="flex flex-col">
                        <span className="font-semibold">Half Day (4 hours)</span>
                        <span className="text-sm text-gray-600">1,200 THB per person - Minimum 5 people</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="full-day">
                      <div className="flex flex-col">
                        <span className="font-semibold">Full Day (6-8 hours)</span>
                        <span className="text-sm text-gray-600">1,000 THB per person - No minimum</span>
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
                <Label htmlFor="people" className="text-lg font-semibold">Number of guests *</Label>
                <Select 
                  value={bookingData.people.toString()} 
                  onValueChange={(value) => setBookingData(prev => ({ ...prev, people: parseInt(value) }))}
                >
                  <SelectTrigger className="h-12 text-lg">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => i + 1).map(num => {
                      const isDisabled = bookingData.formula === 'half-day' && num < 5;
                      return (
                        <SelectItem key={num} value={num.toString()} disabled={isDisabled}>
                          {num} guest{num > 1 ? 's' : ''} 
                          {isDisabled && ' (Half Day min: 5)'}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
                {bookingData.formula === 'half-day' && bookingData.people < 5 && (
                  <p className="text-sm text-orange-600">Half Day tours require minimum 5 people</p>
                )}
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
                {bookingData.formula && (
                  <div className="text-lg text-gray-700">
                    <strong>${dollarPerPerson}/person</strong> - 
                    {bookingData.formula === 'half-day' && actualPeople !== bookingData.people && (
                      <span className="text-orange-600"> (Billed for minimum {actualPeople} people)</span>
                    )}
                  </div>
                )}
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
                <p className="text-sm text-gray-600 italic">
                  🔥 Limited spots available - Book now to secure your date!
                </p>
              </div>
            </div>

            {/* Submit button */}
            <Button 
              type="submit" 
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg md:text-xl font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
              disabled={!bookingData.formula || !bookingData.date || !bookingData.name || !bookingData.email || !bookingData.hotelName || !bookingData.hotelAddress}
            >
              <span className="break-words text-center leading-tight text-base md:text-lg">
                🛥️ Secure Your Long Tail Boat Now - {totalPrice.toLocaleString()} THB (${dollarTotal})
              </span>
            </Button>
            
            {/* Professional confirmation text with pickup info */}
            <div className="text-center space-y-3">
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="text-sm text-blue-800 font-semibold">
                  📞 After payment confirmation, you will be contacted by email or phone to arrange pickup time and location for your hotel transfer.
                </p>
              </div>
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
