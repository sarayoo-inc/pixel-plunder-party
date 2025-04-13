
import React from 'react';
import CollectibleCard, { CollectibleProps } from './CollectibleCard';

// Sample collectible data
const collectibles: CollectibleProps[] = [
  {
    id: 1,
    name: "Pixel Sword",
    rarity: "Common",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=300&h=300",
    price: 25
  },
  {
    id: 2,
    name: "Magic Staff",
    rarity: "Rare",
    imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=300&h=300",
    price: 75
  },
  {
    id: 3,
    name: "Dragon Shield",
    rarity: "Epic",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=300&h=300",
    price: 150
  },
  {
    id: 4,
    name: "Crown of Glory",
    rarity: "Legendary",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=300&h=300",
    price: 500
  },
  {
    id: 5,
    name: "Health Potion",
    rarity: "Common",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=300&h=300",
    price: 15
  },
  {
    id: 6,
    name: "Magic Amulet",
    rarity: "Epic",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=300&h=300",
    price: 180
  },
  {
    id: 7,
    name: "Golden Key",
    rarity: "Rare",
    imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=300&h=300",
    price: 90
  },
  {
    id: 8,
    name: "Ancient Scroll",
    rarity: "Epic",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=300&h=300",
    price: 145
  }
];

const CollectionGrid = () => {
  return (
    <section className="py-16 container mx-auto px-4 sm:px-6">
      <div className="flex justify-between items-center mb-12">
        <h2 className="font-pixel text-2xl text-white">
          <span className="text-retro-purple">TOP</span> COLLECTIBLES
        </h2>
        
        <div className="flex space-x-4">
          <button className="font-pixel text-xs text-white px-4 py-2 border-2 border-retro-purple hover:bg-retro-purple/20 transition-colors">
            ALL
          </button>
          <button className="font-pixel text-xs text-white px-4 py-2 border-2 border-white/20 hover:border-retro-purple hover:bg-retro-purple/20 transition-colors">
            RARE
          </button>
          <button className="font-pixel text-xs text-white px-4 py-2 border-2 border-white/20 hover:border-retro-purple hover:bg-retro-purple/20 transition-colors">
            EPIC
          </button>
          <button className="font-pixel text-xs text-white px-4 py-2 border-2 border-white/20 hover:border-retro-purple hover:bg-retro-purple/20 transition-colors">
            LEGENDARY
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {collectibles.map(collectible => (
          <CollectibleCard
            key={collectible.id}
            id={collectible.id}
            name={collectible.name}
            rarity={collectible.rarity}
            imageUrl={collectible.imageUrl}
            price={collectible.price}
          />
        ))}
      </div>
      
      <div className="mt-12 flex justify-center">
        <button className="font-pixel text-sm border-4 border-retro-purple bg-transparent hover:bg-retro-purple/20 text-white px-10 py-4 transition-colors">
          LOAD MORE
        </button>
      </div>
    </section>
  );
};

export default CollectionGrid;
