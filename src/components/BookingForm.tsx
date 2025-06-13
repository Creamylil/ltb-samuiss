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
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

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
  const [isProcessing, setIsProcessing] = useState(false);

  // Calculate total price
  useEffect(() => {
    let basePrice = 0;
    
    // Base price according to formula
    if (bookingData.formula === 'half-day') {
      basePrice = 6000;
    } else if (bookingData.formula === 'full-day') {
      basePrice = 9000;
    }

    // Extra people (after 5 people)
    if (bookingData.people > 5) {
      const extraPeoplePrice = bookingData.formula === 'full-day' ? 1400 : 1200;
      basePrice += (bookingData.people - 5) * extraPeoplePrice;
    }

    setTotalPrice(basePrice);
  }, [bookingData.formula, bookingData.people]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!bookingData.formula || !bookingData.date || !bookingData.name || !bookingData.email || !bookingData.hotelName || !bookingData.hotelAddress || !bookingData.pickupTime) {
      toast({
        title: "Champs requis",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive",
      });
      return;
    }

    if (bookingData.people > 10) {
      toast({
        title: "Limite dépassée",
        description: "Maximum 10 personnes par bateau. Veuillez réserver un deuxième bateau si vous êtes plus de 10 personnes.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);

    try {
      console.log('Creating payment session...');
      
      const { data, error } = await supabase.functions.invoke('create-payment', {
        body: {
          formula: bookingData.formula,
          people: bookingData.people,
          bookingData: {
            ...bookingData,
            date: bookingData.date ? format(bookingData.date, 'yyyy-MM-dd') : '',
          }
        }
      });

      if (error) {
        console.error('Error calling payment function:', error);
        throw error;
      }

      if (data?.url) {
        console.log('Redirecting to Stripe checkout:', data.url);
        // Open Stripe checkout in a new tab
        window.open(data.url, '_blank');
        
        toast({
          title: "Redirection vers le paiement",
          description: "Vous êtes redirigé vers la page de paiement sécurisée Stripe",
        });
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Erreur de paiement",
        description: "Une erreur est survenue lors de la création du paiement. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const pricePerPerson = totalPrice / bookingData.people;
  const dollarTotal = Math.round(totalPrice / 33);
  const dollarPerPerson = Math.round(pricePerPerson / 33);

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="shadow-2xl border-2 border-blue-100">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-orange-50">
          <CardTitle className="text-2xl text-center text-gray-800">
            🛥️ Réservez votre Long Tail Boat privé - À partir de 1,200 THB par personne avec transfert hôtel inclus
          </CardTitle>
          <div className="text-center space-y-2 mt-4">
            <div className="flex justify-center items-center space-x-6 text-sm">
              <div className="flex items-center text-green-600">
                <CheckCircle className="w-4 h-4 mr-1" />
                <span className="font-semibold">Skipper privé inclus</span>
              </div>
              <div className="flex items-center text-green-600">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="font-semibold">Transfert hôtel inclus</span>
              </div>
              <div className="flex items-center text-green-600">
                <Users className="w-4 h-4 mr-1" />
                <span className="font-semibold">Bateau 100% privé</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Package */}
              <div className="space-y-2">
                <Label htmlFor="formula" className="text-lg font-semibold">Choisissez votre formule *</Label>
                <Select value={bookingData.formula} onValueChange={(value: 'half-day' | 'full-day') => 
                  setBookingData(prev => ({ ...prev, formula: value }))
                }>
                  <SelectTrigger className="h-12 text-lg">
                    <SelectValue placeholder="Sélectionnez votre formule long tail boat" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="half-day">
                      <div className="flex flex-col">
                        <span className="font-semibold">Demi-journée (4 heures)</span>
                        <span className="text-sm text-gray-600">6,000 THB pour jusqu'à 5 personnes</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="full-day">
                      <div className="flex flex-col">
                        <span className="font-semibold">Journée complète (6-8 heures)</span>
                        <span className="text-sm text-gray-600">9,000 THB pour jusqu'à 5 personnes</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date */}
              <div className="space-y-2">
                <Label className="text-lg font-semibold">Sélectionnez la date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal h-12 text-lg"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {bookingData.date ? format(bookingData.date, "PPP", { locale: enUS }) : "Choisissez votre date d'aventure"}
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
                <Label htmlFor="people" className="text-lg font-semibold">Nombre d'invités (total) *</Label>
                <Select value={bookingData.people.toString()} onValueChange={(value) => 
                  setBookingData(prev => ({ ...prev, people: parseInt(value) }))
                }>
                  <SelectTrigger className="h-12 text-lg">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} invité{num > 1 ? 's' : ''}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {bookingData.people > 5 && (
                  <p className="text-sm text-blue-600 font-semibold">
                    +{(bookingData.people - 5) * (bookingData.formula === 'full-day' ? 1400 : 1200)} THB pour {bookingData.people - 5} invité{bookingData.people - 5 > 1 ? 's' : ''} supplémentaire{bookingData.people - 5 > 1 ? 's' : ''}
                  </p>
                )}
              </div>

              
              {/* Pickup Time */}
              <div className="space-y-2">
                <Label htmlFor="pickupTime" className="text-lg font-semibold">Heure de récupération préférée *</Label>
                <Select value={bookingData.pickupTime} onValueChange={(value) => 
                  setBookingData(prev => ({ ...prev, pickupTime: value }))
                }>
                  <SelectTrigger className="h-12 text-lg">
                    <SelectValue placeholder="Sélectionnez l'heure de récupération" />
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

              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-lg font-semibold">Nom complet *</Label>
                <Input
                  id="name"
                  value={bookingData.name}
                  onChange={(e) => setBookingData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Entrez votre nom complet"
                  className="h-12 text-lg"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-lg font-semibold">Adresse email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={bookingData.email}
                  onChange={(e) => setBookingData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="votre@email.com"
                  className="h-12 text-lg"
                />
              </div>

              {/* Phone Type */}
              <div className="space-y-2">
                <Label htmlFor="phoneType" className="text-lg font-semibold">Type de téléphone *</Label>
                <Select value={bookingData.phoneType} onValueChange={(value: 'whatsapp' | 'line' | 'normal') => 
                  setBookingData(prev => ({ ...prev, phoneType: value }))
                }>
                  <SelectTrigger className="h-12 text-lg">
                    <SelectValue placeholder="Sélectionnez le type de téléphone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                    <SelectItem value="line">Line</SelectItem>
                    <SelectItem value="normal">Téléphone normal</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-lg font-semibold">Numéro de téléphone *</Label>
                <Input
                  id="phone"
                  value={bookingData.phone}
                  onChange={(e) => setBookingData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="+33 1 23 45 67 89"
                  className="h-12 text-lg"
                />
              </div>

              {/* Hotel Name */}
              <div className="space-y-2">
                <Label htmlFor="hotelName" className="text-lg font-semibold">Nom de l'hôtel *</Label>
                <Input
                  id="hotelName"
                  value={bookingData.hotelName}
                  onChange={(e) => setBookingData(prev => ({ ...prev, hotelName: e.target.value }))}
                  placeholder="Entrez le nom de votre hôtel"
                  className="h-12 text-lg"
                />
              </div>

              {/* Hotel Address */}
              <div className="space-y-2">
                <Label htmlFor="hotelAddress" className="text-lg font-semibold">Adresse de l'hôtel *</Label>
                <Input
                  id="hotelAddress"
                  value={bookingData.hotelAddress}
                  onChange={(e) => setBookingData(prev => ({ ...prev, hotelAddress: e.target.value }))}
                  placeholder="Entrez l'adresse de votre hôtel"
                  className="h-12 text-lg"
                />
              </div>
            </div>

            {/* Comment */}
            <div className="space-y-2">
              <Label htmlFor="comment" className="text-lg font-semibold">Demandes spéciales ou commentaires</Label>
              <Textarea
                id="comment"
                value={bookingData.comment}
                onChange={(e) => setBookingData(prev => ({ ...prev, comment: e.target.value }))}
                placeholder="Demandes spéciales, exigences alimentaires ou commentaires..."
                className="min-h-[100px] text-lg"
              />
            </div>

            {/* Total price with marketing elements */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl border-2 border-green-200">
              <div className="text-center space-y-4">
                <div className="text-3xl font-bold text-green-600">
                  Total : {totalPrice.toLocaleString()} THB (${dollarTotal})
                </div>
                <div className="text-lg text-gray-700">
                  <strong>Seulement ${dollarPerPerson}/personne ({Math.round(pricePerPerson).toLocaleString()} THB)</strong> - Meilleur prix à Koh Samui !
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    <span className="font-semibold">Bateau privé & Skipper</span>
                  </div>
                  <div className="flex items-center justify-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    <span className="font-semibold">Transfert hôtel inclus</span>
                  </div>
                  <div className="flex items-center justify-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    <span className="font-semibold">Équipement de sécurité</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <p className="text-sm text-gray-700 font-medium">
                    ℹ️ Après le paiement, vous serez contacté par email ou téléphone pour organiser l'heure exacte de récupération et l'emplacement à votre hôtel.
                  </p>
                </div>
                <p className="text-sm text-gray-600 italic">
                  🔥 Places limitées disponibles - Réservez maintenant pour sécuriser votre date !
                </p>
              </div>
            </div>

            {/* Submit button */}
            <Button 
              type="submit" 
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-base md:text-xl font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
              disabled={!bookingData.formula || !bookingData.date || !bookingData.name || !bookingData.email || !bookingData.hotelName || !bookingData.hotelAddress || !bookingData.pickupTime || isProcessing}
            >
              <span className="break-words text-center leading-tight flex items-center justify-center">
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Traitement en cours...
                  </>
                ) : (
                  <>
                    🛥️ Réserver maintenant - {totalPrice.toLocaleString()} THB (${dollarTotal})
                  </>
                )}
              </span>
            </Button>
            
            
            <div className="text-center space-y-3">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-sm">
                <div className="flex items-center justify-center text-green-600 space-x-1">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium">Confirmation de réservation instantanée</span>
                </div>
                <div className="flex items-center justify-center text-blue-600 space-x-1">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium">Annulation gratuite (72h)</span>
                </div>
                <div className="flex items-center justify-center text-purple-600 space-x-1">
                  <Users className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium">Modifications gratuites (48h)</span>
                </div>
                <div className="flex items-center justify-center text-orange-600 space-x-1">
                  <Shield className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium">Passerelle de paiement sécurisée</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 max-w-2xl mx-auto">
                Votre réservation est protégée par nos politiques complètes d'annulation et de modification. 
                Tous les paiements sont traités via des canaux sécurisés et cryptés pour votre sécurité.
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingForm;
