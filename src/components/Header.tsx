
import React from 'react';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 p-4">
      <div className="container mx-auto">
        <div className="flex justify-center md:justify-start">
          <img 
            src="/lovable-uploads/6a900ce2-9e5b-422c-b9c0-b0b9ab4195c3.png"
            alt="Long Tail Boat Koh Samui Logo"
            className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
