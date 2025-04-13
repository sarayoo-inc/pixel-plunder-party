import React from 'react';
import { Github, Twitter, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t-4 border-retro-purple py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="font-pixel text-xl text-retro-purple mb-6">
              PIXEL<span className="text-retro-pink">PLUNDER</span>
            </h3>
            <p className="text-white/70 text-sm">
              The ultimate retro-style platform for collecting, trading, and showcasing pixel art collectibles.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-retro-purple transition-colors">
                <MessageSquare size={20} />
              </a>
              <a href="#" className="text-white hover:text-retro-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-retro-purple transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-pixel text-sm text-white mb-4">MARKETPLACE</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-retro-purple text-sm">All Collectibles</a></li>
              <li><a href="#" className="text-white/70 hover:text-retro-purple text-sm">New Arrivals</a></li>
              <li><a href="#" className="text-white/70 hover:text-retro-purple text-sm">Featured Items</a></li>
              <li><a href="#" className="text-white/70 hover:text-retro-purple text-sm">Rare Finds</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-pixel text-sm text-white mb-4">ACCOUNT</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-retro-purple text-sm">Profile</a></li>
              <li><a href="#" className="text-white/70 hover:text-retro-purple text-sm">My Collection</a></li>
              <li><a href="#" className="text-white/70 hover:text-retro-purple text-sm">Wishlist</a></li>
              <li><a href="#" className="text-white/70 hover:text-retro-purple text-sm">Settings</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-pixel text-sm text-white mb-4">RESOURCES</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-retro-purple text-sm">Help Center</a></li>
              <li><a href="#" className="text-white/70 hover:text-retro-purple text-sm">Platform Guide</a></li>
              <li><a href="#" className="text-white/70 hover:text-retro-purple text-sm">Community Forums</a></li>
              <li><a href="#" className="text-white/70 hover:text-retro-purple text-sm">Rarity Chart</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-xs">© 2025 PixelPlunder. All pixel rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-xs text-white/50">
              <li><a href="#" className="hover:text-retro-purple">Terms</a></li>
              <li><a href="#" className="hover:text-retro-purple">Privacy</a></li>
              <li><a href="#" className="hover:text-retro-purple">Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
