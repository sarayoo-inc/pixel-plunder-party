
import React from 'react';
import { Bell, UserCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-retro-dark border-b-4 border-retro-purple sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6">
        <div className="flex items-center">
          <h1 className="font-pixel text-xl text-retro-purple tracking-wide">
            PIXEL<span className="text-retro-pink">PLUNDER</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="font-pixel text-sm text-white hover:text-retro-purple transition-colors">Home</a>
          <a href="#" className="font-pixel text-sm text-white hover:text-retro-purple transition-colors">Collection</a>
          <a href="#" className="font-pixel text-sm text-white hover:text-retro-purple transition-colors">Marketplace</a>
          <a href="#" className="font-pixel text-sm text-white hover:text-retro-purple transition-colors">About</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-6 w-6 text-white hover:text-retro-purple transition-colors" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-retro-pink rounded-full"></span>
          </Button>
          
          <Button variant="ghost" size="icon">
            <UserCircle2 className="h-6 w-6 text-white hover:text-retro-purple transition-colors" />
          </Button>
          
          <Button className="hidden md:block bg-retro-purple hover:bg-retro-pink text-white font-pixel text-sm py-2 px-4 rounded-none">
            Connect
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
