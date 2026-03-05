
import React from 'react';
import { MessageCircle, Car, Shield, CloudSun, Lock, CalendarCheck, AlertTriangle } from 'lucide-react';

const ReassuranceSection = () => {
  const items = [
    {
      icon: MessageCircle,
      title: "After your deposit is paid",
      description: "Once your deposit is confirmed, we will contact you via your preferred method (WhatsApp, Line or Phone) to finalize all details.",
      color: "text-blue-600",
    },
    {
      icon: Car,
      title: "Hotel pickup included",
      description: "Our driver will pick you up at your hotel and bring you back after the tour — round trip included.",
      color: "text-green-600",
    },
    {
      icon: Shield,
      title: "Licensed & experienced captain",
      description: "Your captain is experienced and licensed. Life jackets are provided for all passengers, including children.",
      color: "text-purple-600",
    },
    {
      icon: CloudSun,
      title: "Weather guarantee",
      description: "If weather conditions are unsafe, we offer a full refund or free reschedule — no questions asked.",
      color: "text-sky-600",
    },
    {
      icon: Lock,
      title: "Secure payment",
      description: "Secure payment via Stripe — your card details are never stored on our servers.",
      color: "text-emerald-600",
    },
    {
      icon: CalendarCheck,
      title: "Flexible booking",
      description: "Free cancellation up to 72h before · Free modification up to 48h before departure.",
      color: "text-orange-600",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-5">
        <h2 className="text-lg font-bold text-gray-800 text-center">
          ✅ Why book with confidence?
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              <item.icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${item.color}`} />
              <div>
                <p className="font-semibold text-gray-800 text-sm">{item.title}</p>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* High season notice */}
      <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-5 flex items-start space-x-3">
        <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-bold text-amber-800 text-sm">🌴 High season tip</p>
          <p className="text-amber-700 text-sm">
            We recommend booking at least <strong>2-3 days in advance</strong> to guarantee availability. 
            Spots fill up quickly during peak season!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReassuranceSection;
