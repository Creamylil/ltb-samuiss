import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Users, Minus, Plus } from "lucide-react";

const PRICING_TIERS = [
  { max: 3, price: 4000 },
  { max: 4, price: 4600 },
  { max: 7, price: 5600 },
  { max: 10, price: 6600 },
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

  const scrollToBooking = () => {
    document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-3">
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
              ฿{price.toLocaleString()} <span className="text-xs font-normal text-gray-500">THB</span>
            </div>
            <p className="text-[10px] sm:text-xs text-gray-400 leading-tight">Private boat + transfer</p>
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
