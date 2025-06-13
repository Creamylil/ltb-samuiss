
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle } from 'lucide-react';

interface WhatsAppCTAProps {
  className?: string;
  text?: string;
  message?: string;
  variant?: "default" | "outline" | "secondary";
  size?: "default" | "sm" | "lg";
}

const WhatsAppCTA = ({ 
  className = "", 
  text = "Contact us on WhatsApp", 
  message = "Hello! I'm interested in booking a longtail boat tour in Koh Samui. Can you help me?",
  variant = "default",
  size = "default"
}: WhatsAppCTAProps) => {
  const whatsappNumber = "+33767028161";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;

  return (
    <Button 
      asChild 
      className={`bg-green-500 hover:bg-green-600 text-white ${className}`}
      variant={variant}
      size={size}
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="w-5 h-5 mr-2" />
        {text}
      </a>
    </Button>
  );
};

export default WhatsAppCTA;
