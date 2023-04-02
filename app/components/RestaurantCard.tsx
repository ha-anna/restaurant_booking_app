import Link from 'next/link';
import React from 'react';
import { RestaurantCardType } from '../page';
import Price from './Price';

interface Props {
  restaurant: RestaurantCardType;
}

export default function RestaurantCard({ restaurant }: Props) {
  const { id, name, main_image, cuisine, slug, location, price } = restaurant;
  return (
    <div className="w-64 h-80 m-3 rounded overflow-hidden border">
      <Link
        href={`/restaurant/${slug}`}
        className="h-80 cursor-pointer flex flex-col">
        <img
          src={main_image}
          alt=""
          className="w-full h-36"
        />
        <div className="p-3">
          <h3 className="font-bold text-2xl mb-3">{name}</h3>
          <div className="flex items-start">
            <div className="flex">*****</div>
            <p className="ml-2">77 reviews</p>
          </div>
          <div className="flex text-reg font-light capitalize mt-2">
            <p className=" mr-3">{cuisine.name}</p>
            <Price price={price} />
            <p>{location.name}</p>
          </div>
        </div>
        <p className="text-sm font-bold mt-auto p-3 text-right">
          Booked 3 times today
        </p>
      </Link>
    </div>
  );
}
