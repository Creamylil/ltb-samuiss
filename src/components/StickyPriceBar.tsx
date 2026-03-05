import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Users, Minus, Plus, CalendarCheck } from "lucide-react";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";

const PRICING_TIERS = [
  { max: 3, price: 3200 },
  { max: 4, price: 4200 },
  { max: 7, price: 5000 },
  { max: 10, price: 6000 },
];

function getPrice(guests: number): number {
  for (const tier of PRICING_TIERS) {
    if (guests <= tier.max) return tier.price;
  }
  return PRICING_TIERS[PRICING_TIERS.length - 1].price;
}

const StickyPriceBar = () => {
  const [guests, setGuests] = useState(2);

  const price = getPrice(guests);

  const earliestDate = new Date();
  earliestDate.setDate(earliestDate.getDate() + 2);
  const formattedDate = format(earliestDate, "EEEE, MMMM d", { locale: enUS });

  const scrollToBooking = () => {
    document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-1.5 py-1.5 text-[11px] text-green-700 font-medium border-b border-gray-100">
          <CalendarCheck className="w-3.5 h-3.5" />
          <span>Your tour from {formattedDate}</span>
        </div>
        <div className="flex items-center justify-between gap-3 py-2.5">
          {/* Guest selector */}
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-600 hidden sm:block" />
            <div className="flex items-center bg-gray-100 rounded-full">
              <button
                onClick={() => setGuests(Math.max(1, guests - 1))}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors"
                aria-label="Remove guest"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-8 text-center font-semibold text-sm">{guests}</span>
              <button
                onClick={() => setGuests(Math.min(10, guests + 1))}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors"
                aria-label="Add guest"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
            <span className="text-xs text-gray-500 hidden sm:block">
              {guests === 1 ? "guest" : "guests"}
            </span>
          </div>

          {/* Price display */}
          <div className="text-center">
            <div className="text-lg sm:text-xl font-bold text-blue-600">
              from ฿{price.toLocaleString()} <span className="text-xs font-normal text-gray-500">THB</span>
            </div>
            <p className="text-[10px] sm:text-xs text-gray-400 leading-tight">Private boat · Transfer optional</p>
          </div>

          {/* CTA */}
          <Button
            onClick={scrollToBooking}
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full text-xs sm:text-sm px-4 sm:px-6 py-2 font-semibold whitespace-nowrap"
          >
            <span className="hidden sm:inline">Book Now →</span>
            <span className="sm:hidden">Book →</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyPriceBar;
