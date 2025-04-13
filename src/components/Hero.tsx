
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background grid pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#9b87f5_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
      
      {/* Floating pixel elements */}
      <div className="absolute top-20 right-10 w-12 h-12 bg-retro-blue animate-pixel-float [animation-delay:0.5s] opacity-60 pixel-borders hidden md:block"></div>
      <div className="absolute bottom-32 left-10 w-8 h-8 bg-retro-pink animate-pixel-float [animation-delay:1s] opacity-60 pixel-borders hidden md:block"></div>
      <div className="absolute top-40 left-20 w-10 h-10 bg-retro-yellow animate-pixel-float [animation-delay:1.5s] opacity-60 pixel-borders hidden md:block"></div>
      <div className="absolute bottom-20 right-32 w-14 h-14 bg-retro-green animate-pixel-float [animation-delay:2s] opacity-60 pixel-borders hidden md:block"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-pixel text-3xl md:text-5xl text-white leading-tight mb-6">
            <span className="block text-retro-purple">COLLECT.</span>
            <span className="block text-retro-pink">TRADE.</span>
            <span className="block text-retro-blue">PLUNDER.</span>
          </h1>
          
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Dive into a world of rare pixel collectibles. Build your collection, trade with others, and embark on digital adventures in our retro-inspired marketplace.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-retro-purple hover:bg-retro-pink text-white font-pixel text-sm py-6 px-8 rounded-none pixel-borders">
              START COLLECTING
            </Button>
            <Button variant="outline" className="border-4 border-retro-blue bg-transparent text-retro-blue hover:bg-retro-blue/10 font-pixel text-sm py-6 px-8 rounded-none">
              EXPLORE MARKETPLACE
            </Button>
          </div>
          
          <div className="mt-12 pixel-borders bg-black/30 p-4 inline-block">
            <p className="font-pixel text-xs text-retro-yellow animate-pixel-pulse">
              10,000 UNIQUE COLLECTIBLES AVAILABLE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
