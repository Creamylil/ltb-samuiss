
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
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
    // For now, we simulate the process
    console.log('Booking data:', bookingData);
    console.log('Total price:', totalPrice, 'THB');
    
    // Simulation of opening Stripe Checkout
    alert(`Redirecting to Stripe payment for ${totalPrice} THB`);
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

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Booking Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Package */}
              <div className="space-y-2">
                <Label htmlFor="formula">Package *</Label>
                <Select value={bookingData.formula} onValueChange={(value: 'half-day' | 'full-day') => 
                  setBookingData(prev => ({ ...prev, formula: value }))
                }>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your package" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="half-day">Half Day (4h) - 5,000 THB</SelectItem>
                    <SelectItem value="full-day">Full Day (6-8h) - 6,500 THB</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date */}
              <div className="space-y-2">
                <Label>Date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {bookingData.date ? format(bookingData.date, "PPP", { locale: enUS }) : "Select a date"}
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
                <Label htmlFor="people">Number of people *</Label>
                <Select value={bookingData.people.toString()} onValueChange={(value) => 
                  setBookingData(prev => ({ ...prev, people: parseInt(value) }))
                }>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} person{num > 1 ? 's' : ''}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {bookingData.people > 5 && (
                  <p className="text-sm text-blue-600">
                    +{(bookingData.people - 5) * 1000} THB for {bookingData.people - 5} extra person{bookingData.people - 5 > 1 ? 's' : ''}
                  </p>
                )}
              </div>

              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">Full name *</Label>
                <Input
                  id="name"
                  value={bookingData.name}
                  onChange={(e) => setBookingData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={bookingData.email}
                  onChange={(e) => setBookingData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={bookingData.phone}
                  onChange={(e) => setBookingData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="+1 234 567 8900"
                />
              </div>
            </div>

            {/* À la carte options */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">À la carte options</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {optionsData.map((option) => (
                  <div key={option.key} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                    <Checkbox
                      id={option.key}
                      checked={bookingData.options[option.key as keyof BookingData['options']]}
                      onCheckedChange={(checked) => updateOption(option.key as keyof BookingData['options'], checked as boolean)}
                    />
                    <Label htmlFor={option.key} className="flex-1 cursor-pointer">
                      <span className="font-medium">{option.label}</span>
                      <span className="block text-sm text-gray-600">
                        {option.price} THB {option.type === 'per_person' ? '/ person' : ''}
                        {option.type === 'per_person' && ` (${option.price * bookingData.people} THB total)`}
                      </span>
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Total price */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex justify-between items-center text-xl font-bold">
                <span>Total price:</span>
                <span className="text-blue-600">{totalPrice.toLocaleString()} THB</span>
              </div>
              {totalPrice > 0 && (
                <p className="text-sm text-gray-600 mt-2">
                  Approximately {Math.round(totalPrice / 35)} EUR (indicative rate)
                </p>
              )}
            </div>

            {/* Submit button */}
            <Button 
              type="submit" 
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 text-lg font-semibold rounded-lg"
              disabled={!bookingData.formula || !bookingData.date || !bookingData.name || !bookingData.email}
            >
              Book now and pay {totalPrice.toLocaleString()} THB
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingForm;
