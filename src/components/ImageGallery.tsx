
import React from 'react';
import { Card } from "@/components/ui/card";

const ImageGallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Long-tail boat on turquoise water",
      title: "Our traditional boat"
    },
    {
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Pig Island and its pigs",
      title: "Pig Island and its inhabitants"
    },
    {
      src: "https://images.unsplash.com/photo-1544713850-6e37e8b7f0c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Snorkeling in crystal clear waters",
      title: "Paradise snorkeling"
    },
    {
      src: "https://images.unsplash.com/photo-1502780402662-acc01917ee64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Lunch on the beach",
      title: "Lunch with feet in the sand"
    },
    {
      src: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Family enjoying the tour",
      title: "Moments of happiness with family"
    },
    {
      src: "https://images.unsplash.com/photo-1574900897077-f5b8d52b1e49?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Sunset from the boat",
      title: "Magical sunset"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          📸 The Experience in Images
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="relative group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Discover more photos on our social networks</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">📘 Facebook</a>
            <a href="#" className="text-pink-600 hover:text-pink-800">📷 Instagram</a>
            <a href="#" className="text-red-600 hover:text-red-800">🎬 YouTube</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
