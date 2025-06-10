
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, CheckCircle, Users, MapPin } from "lucide-react";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";

interface BookingData {
  formula: 'half-day' | 'full-day' | '';
  date: Date | undefined;
  people: number;
  name: string;
  email: string;
  phone: string;
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
      basePrice = 6500;
    }

    // Extra people (after 5 people)
    if (bookingData.people > 5) {
      basePrice += (bookingData.people - 5) * 1000;
    }

    // À la carte options
    let optionsPrice = 0;
    if (bookingData.options.cooler) optionsPrice += 1000;
    if (bookingData.options.fishing) optionsPrice += 300;
    if (bookingData.options.lunch) optionsPrice += 450 * bookingData.people;
    if (bookingData.options.fruits) optionsPrice += 150 * bookingData.people;
    if (bookingData.options.champagne) optionsPrice += 1800;
    if (bookingData.options.birthday) optionsPrice += 600;
    if (bookingData.options.speaker) optionsPrice += 100;
    if (bookingData.options.extraHour) optionsPrice += 1500;

    setTotalPrice(basePrice + optionsPrice);
  }, [bookingData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!bookingData.formula || !bookingData.date || !bookingData.name || !bookingData.email) {
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

  const updateOption = (option: keyof BookingData['options'], checked: boolean) => {
    setBookingData(prev => ({
      ...prev,
      options: {
        ...prev.options,
        [option]: checked
      }
    }));
  };

  const optionsData = [
    { key: 'cooler', label: 'Cooler with fresh drinks', price: 1000, type: 'fixed' },
    { key: 'fishing', label: 'Fishing equipment', price: 300, type: 'fixed' },
    { key: 'lunch', label: 'Thai homemade lunch', price: 450, type: 'per_person' },
    { key: 'fruits', label: 'Tropical fruits + drink', price: 150, type: 'per_person' },
    { key: 'champagne', label: 'Champagne bottle', price: 1800, type: 'fixed' },
    { key: 'birthday', label: 'Birthday package', price: 600, type: 'fixed' },
    { key: 'speaker', label: 'Bluetooth speaker + playlist', price: 100, type: 'fixed' },
    { key: 'extraHour', label: 'Extra hour', price: 1500, type: 'fixed' },
  ];

  const pricePerPerson = totalPrice / bookingData.people;
  const dollarTotal = Math.round(totalPrice / 33);
  const dollarPerPerson = Math.round(pricePerPerson / 33);

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="shadow-2xl border-2 border-blue-100">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-orange-50">
          <CardTitle className="text-2xl text-center text-gray-800">
            🛥️ Book Your Private Long Tail Boat - Best Price Guaranteed
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
                        <span className="text-sm text-gray-600">5,000 THB ($150) for up to 5 people</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="full-day">
                      <div className="flex flex-col">
                        <span className="font-semibold">Full Day (6-8 hours)</span>
                        <span className="text-sm text-gray-600">6,500 THB ($195) for up to 5 people</span>
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
                    +{(bookingData.people - 5) * 1000} THB (${(bookingData.people - 5) * 30}) for {bookingData.people - 5} extra guest{bookingData.people - 5 > 1 ? 's' : ''}
                  </p>
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

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-lg font-semibold">Phone Number</Label>
                <Input
                  id="phone"
                  value={bookingData.phone}
                  onChange={(e) => setBookingData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="+1 234 567 8900"
                  className="h-12 text-lg"
                />
              </div>
            </div>

            {/* À la carte options */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-800">🎒 Premium Add-ons (Optional)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {optionsData.map((option) => (
                  <div key={option.key} className="flex items-center space-x-3 p-4 border-2 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all">
                    <Checkbox
                      id={option.key}
                      checked={bookingData.options[option.key as keyof BookingData['options']]}
                      onCheckedChange={(checked) => updateOption(option.key as keyof BookingData['options'], checked as boolean)}
                    />
                    <Label htmlFor={option.key} className="flex-1 cursor-pointer">
                      <span className="font-semibold text-base">{option.label}</span>
                      <span className="block text-sm text-gray-600">
                        {option.price} THB (${Math.round(option.price / 33)}) {option.type === 'per_person' ? '/ person' : ''}
                        {option.type === 'per_person' && ` - Total: ${option.price * bookingData.people} THB ($${Math.round((option.price * bookingData.people) / 33)})`}
                      </span>
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Total price with marketing elements */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl border-2 border-green-200">
              <div className="text-center space-y-4">
                <div className="text-3xl font-bold text-green-600">
                  Total: {totalPrice.toLocaleString()} THB (${dollarTotal})
                </div>
                <div className="text-lg text-gray-700">
                  <strong>Only ${dollarPerPerson}/person</strong> - Best value in Koh Samui!
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    <span className="font-semibold">Private Skipper</span>
                  </div>
                  <div className="flex items-center justify-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    <span className="font-semibold">Hotel Transfer</span>
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
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-xl font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
              disabled={!bookingData.formula || !bookingData.date || !bookingData.name || !bookingData.email}
            >
              🛥️ Secure Your Long Tail Boat Now - ${dollarTotal} Total
            </Button>
            <p className="text-center text-sm text-gray-600">
              ✅ Instant confirmation ✅ Free cancellation up to 48h ✅ Secure payment
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingForm;
