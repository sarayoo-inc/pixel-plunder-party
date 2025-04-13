
import React from 'react';
import { Badge } from '@/components/ui/badge';

export interface CollectibleProps {
  id: number;
  name: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  imageUrl: string;
  price: number;
}

const getRarityColor = (rarity: string): string => {
  switch (rarity) {
    case 'Common':
      return 'bg-gray-500';
    case 'Rare':
      return 'bg-retro-blue';
    case 'Epic':
      return 'bg-retro-purple';
    case 'Legendary':
      return 'bg-retro-pink';
    default:
      return 'bg-gray-500';
  }
};

const CollectibleCard: React.FC<CollectibleProps> = ({ id, name, rarity, imageUrl, price }) => {
  return (
    <div className="group">
      <div className="pixel-card bg-black overflow-hidden transition-transform duration-300 group-hover:translate-y-[-5px]">
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover"
            style={{ imageRendering: 'pixelated' }}
          />
          <Badge className={`absolute top-2 right-2 font-pixel text-[10px] ${getRarityColor(rarity)} rounded-none`}>
            {rarity}
          </Badge>
        </div>
        
        <div className="p-3 bg-retro-dark/90 border-t-4 border-retro-purple">
          <h3 className="font-pixel text-sm text-white truncate">{name}</h3>
          <div className="flex justify-between items-center mt-2">
            <p className="font-pixel text-xs text-retro-yellow">{price} PIXL</p>
            <p className="font-pixel text-xs text-gray-400">#{id.toString().padStart(4, '0')}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-2 transition-opacity opacity-0 group-hover:opacity-100">
        <button className="w-full bg-retro-purple hover:bg-retro-pink transition-colors text-white font-pixel text-xs py-2 border-2 border-black">
          COLLECT NOW
        </button>
      </div>
    </div>
  );
};

export default CollectibleCard;
