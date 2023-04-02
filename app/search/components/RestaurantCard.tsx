import React from 'react';
import Link from 'next/link';
import { RestaurantCardType } from '../../page';
import Price from '../../components/Price';
interface Props {
  restaurant: RestaurantCardType;
}

export default function RestaurantCard({ restaurant }: Props) {
  const { id, name, main_image, cuisine, slug, location, price } = restaurant;
  return (
    <div className="border-b flex pb-5 items-center">
      <img
        src={main_image}
        alt=""
        className="w-44 h-40 rounded object-cover"
      />
      <div className="pl-5">
        <h2 className="text-3xl">{name}</h2>
        <div className="flex items-start mt-1">
          <div className="flex mb-1">*****</div>
          <p className="ml-2 text-sm">Awesome</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <Price price={price} />
            <p className="mr-4 capitalize">{cuisine.name}</p>
            <p className="mr-4 capitalize">{location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href="/restaurant/milestones">View more information</Link>
        </div>
      </div>
    </div>
  );
}
