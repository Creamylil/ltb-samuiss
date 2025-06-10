
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
import { fr } from "date-fns/locale";

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

  // Calcul du prix total
  useEffect(() => {
    let basePrice = 0;
    
    // Prix de base selon la formule
    if (bookingData.formula === 'half-day') {
      basePrice = 5000;
    } else if (bookingData.formula === 'full-day') {
      basePrice = 6500;
    }

    // Personnes supplémentaires (après 5 personnes)
    if (bookingData.people > 5) {
      basePrice += (bookingData.people - 5) * 1000;
    }

    // Options à la carte
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
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    if (bookingData.people > 10) {
      alert('Maximum 10 personnes par bateau. Veuillez réserver un deuxième bateau si vous êtes plus de 10 personnes.');
      return;
    }

    // Ici vous intégreriez Stripe Checkout
    // Pour le moment, on simule le processus
    console.log('Données de réservation:', bookingData);
    console.log('Prix total:', totalPrice, 'THB');
    
    // Simulation d'ouverture de Stripe Checkout
    alert(`Redirection vers le paiement Stripe pour ${totalPrice} THB`);
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
    { key: 'cooler', label: 'Glacière avec boissons fraîches', price: 1000, type: 'fixed' },
    { key: 'fishing', label: 'Matériel de pêche', price: 300, type: 'fixed' },
    { key: 'lunch', label: 'Déjeuner thaï maison', price: 450, type: 'per_person' },
    { key: 'fruits', label: 'Fruits tropicaux + boisson', price: 150, type: 'per_person' },
    { key: 'champagne', label: 'Bouteille de champagne', price: 1800, type: 'fixed' },
    { key: 'birthday', label: 'Pack anniversaire', price: 600, type: 'fixed' },
    { key: 'speaker', label: 'Enceinte Bluetooth + playlist', price: 100, type: 'fixed' },
    { key: 'extraHour', label: 'Heure supplémentaire', price: 1500, type: 'fixed' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Formulaire de réservation</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Formule */}
              <div className="space-y-2">
                <Label htmlFor="formula">Formule *</Label>
                <Select value={bookingData.formula} onValueChange={(value: 'half-day' | 'full-day') => 
                  setBookingData(prev => ({ ...prev, formula: value }))
                }>
                  <SelectTrigger>
                    <SelectValue placeholder="Choisissez votre formule" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="half-day">Demi-journée (4h) - 5 000 THB</SelectItem>
                    <SelectItem value="full-day">Journée complète (6-8h) - 6 500 THB</SelectItem>
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
                      {bookingData.date ? format(bookingData.date, "PPP", { locale: fr }) : "Sélectionner une date"}
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

              {/* Nombre de personnes */}
              <div className="space-y-2">
                <Label htmlFor="people">Nombre de personnes *</Label>
                <Select value={bookingData.people.toString()} onValueChange={(value) => 
                  setBookingData(prev => ({ ...prev, people: parseInt(value) }))
                }>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} personne{num > 1 ? 's' : ''}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {bookingData.people > 5 && (
                  <p className="text-sm text-blue-600">
                    +{(bookingData.people - 5) * 1000} THB pour {bookingData.people - 5} personne{bookingData.people - 5 > 1 ? 's' : ''} supplémentaire{bookingData.people - 5 > 1 ? 's' : ''}
                  </p>
                )}
              </div>

              {/* Nom */}
              <div className="space-y-2">
                <Label htmlFor="name">Nom complet *</Label>
                <Input
                  id="name"
                  value={bookingData.name}
                  onChange={(e) => setBookingData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Votre nom complet"
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
                  placeholder="votre@email.com"
                />
              </div>

              {/* Téléphone */}
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  id="phone"
                  value={bookingData.phone}
                  onChange={(e) => setBookingData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="+33 6 XX XX XX XX"
                />
              </div>
            </div>

            {/* Options à la carte */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Options à la carte</h3>
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
                        {option.price} THB {option.type === 'per_person' ? '/ personne' : ''}
                        {option.type === 'per_person' && ` (${option.price * bookingData.people} THB total)`}
                      </span>
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Prix total */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex justify-between items-center text-xl font-bold">
                <span>Prix total :</span>
                <span className="text-blue-600">{totalPrice.toLocaleString()} THB</span>
              </div>
              {totalPrice > 0 && (
                <p className="text-sm text-gray-600 mt-2">
                  Soit environ {Math.round(totalPrice / 35)} EUR (taux indicatif)
                </p>
              )}
            </div>

            {/* Bouton de soumission */}
            <Button 
              type="submit" 
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 text-lg font-semibold rounded-lg"
              disabled={!bookingData.formula || !bookingData.date || !bookingData.name || !bookingData.email}
            >
              Réserver maintenant et payer {totalPrice.toLocaleString()} THB
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingForm;
