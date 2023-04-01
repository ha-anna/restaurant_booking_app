import React from 'react';
import MenuCard from './MenuCard';
import { Item } from '@prisma/client';

export default function Menu({ menu }: { menu: Item[] }) {
  return (
    <div className="bg-white mt-5">
      <div>
        <div className="mt-4 pb-1 mb-1">
          <h1 className="font-bold text-4xl">Menu</h1>
        </div>
        <div className="flex flex-wrap justify-between">
          {menu.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
            />
          ))}
          {menu.length < 1 && (
            <p className="pt-6 pb-6 text-lg text-gray-500">
              No menu available...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
