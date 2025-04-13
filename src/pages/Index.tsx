
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CollectionGrid from '@/components/CollectionGrid';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-retro-dark">
      <Header />
      <main>
        <Hero />
        
        <div className="relative py-16">
          {/* Separator with pixelated edge */}
          <div className="absolute top-0 left-0 w-full h-4 bg-retro-purple"></div>
          
          <div className="container mx-auto px-4 sm:px-6 mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-pixel text-2xl text-white mb-4">
                <span className="text-retro-blue">DIGITAL</span> TREASURES AWAIT
              </h2>
              <p className="text-white/70">
                Discover unique pixel art collectibles created by talented artists from around the world.
                Each item is unique, with varying levels of rarity and special attributes.
              </p>
            </div>
          </div>
          
          <CollectionGrid />
          
          <div className="container mx-auto px-4 sm:px-6 py-16">
            <div className="bg-black border-4 border-retro-pink p-6 md:p-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="font-pixel text-xl text-retro-pink mb-2">JOIN THE ADVENTURE</h3>
                  <p className="text-white/70">Get updates on new collectible drops and exclusive offers.</p>
                </div>
                <div className="w-full md:w-auto flex">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-retro-dark border-2 border-retro-purple px-4 py-2 flex-1 md:w-64 font-pixel text-sm text-white"
                  />
                  <button className="bg-retro-purple hover:bg-retro-pink transition-colors border-2 border-black px-6 py-2 text-white font-pixel text-sm">
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
