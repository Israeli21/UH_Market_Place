import React, { useState } from 'react';
import ItemList from './itemList';

interface Item {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: string;
}

interface DiscoverListProps {
  items: Item[];
}

const DiscoverList: React.FC<DiscoverListProps> = ({items}) => {
    return (
        <div className="container mx-auto p-4">
        <h1 className='text-cougRed text-2xl underline decoration-4 underline-offset-8 p-4'>Discover</h1>
        
        {/* Render the item cards in a vertical list */}
        <div className="space-y-6">
          {items.map((item) => (
            <ItemList
              key={item.id}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              price={item.price}
              // onAddToCart={() => console.log(`${item.title} added to cart`)}
            />
          ))}
        </div>
      </div>
    );
};

export default DiscoverList