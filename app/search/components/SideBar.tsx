import { Location, Cuisine, PRICE } from '@prisma/client';
import Link from 'next/link';
import React from 'react';

export default function SideBar({
  locations,
  cuisines,
  searchParams,
}: {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams: { city?: string; cuisine?: string; price?: PRICE };
}) {
  const prices = [
    {
      price: PRICE.CHEAP,
      label: '$',
      className: 'border w-full text-reg text-center font-light rounded-l p-2',
    },
    {
      price: PRICE.REGULAR,
      label: '$$',
      className: 'border w-full text-reg text-center font-light p-2',
    },
    {
      price: PRICE.EXPENSIVE,
      label: '$$$',
      className: 'border w-full text-reg text-center font-light rounded-r p-2',
    },
  ];

  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Region</h1>
        <ul>
          {locations.map((location) => (
            <li key={location.id}>
              <Link
                className="font-light text-reg capitalize"
                href={{
                  pathname: '/search',
                  query: {
                    ...searchParams,
                    city: location.name,
                  },
                }}>
                {location.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-b pb-4 mt-3">
        <h1 className="mb-2">Cuisine</h1>
        <ul>
          {cuisines.map((cuisine) => (
            <li key={cuisine.id}>
              <Link
                href={{
                  pathname: '/search',
                  query: {
                    ...searchParams,
                    cuisine: cuisine.name,
                  },
                }}
                className="font-light text-reg capitalize"
                key={cuisine.id}>
                {cuisine.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          {prices.map(({ price, label, className }) => (
            <Link
              key={price}
              href={{
                pathname: '/search',
                query: {
                  ...searchParams,
                  price,
                },
              }}
              className={className}>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
