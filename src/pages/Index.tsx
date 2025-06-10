
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-600 to-blue-800 text-white">
      <div className="text-center space-y-8 px-4">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            🏝️ Koh Samui Tours
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Découvrez les joyaux cachés de Koh Samui à bord de nos long-tail boats traditionnels
          </p>
        </div>
        
        <div className="space-y-4">
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300"
            onClick={() => navigate('/booking')}
          >
            🛥️ Réserver votre tour privé
          </Button>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-sm opacity-75">
            <span>✅ Tour 100% privatisé</span>
            <span>🐷 Visite de Pig Island</span>
            <span>🚐 Transfert inclus</span>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg opacity-80 mb-4">Une expérience authentique vous attend</p>
          <div className="text-4xl animate-bounce">⬇️</div>
        </div>
      </div>
    </div>
  );
};

export default Index;
