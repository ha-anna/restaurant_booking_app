import React from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import RestaurantCard from './components/RestaurantCard';
import { PrismaClient, Cuisine, Location, PRICE } from '@prisma/client';

const prisma = new PrismaClient();

const fetchRestaurantsByLocation = async (
  location: string
): Promise<Restaurant[]> => {
  const restaurants = await prisma.restaurant.findMany({
    where: {
      location: {
        name: { equals: location },
      },
    },
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      slug: true,
      location: true,
      price: true,
    },
  });
  if (!restaurants) {
    throw new Error('Restaurant not found');
  }
  return restaurants;
};

export default async function Search({
  searchParams,
}: {
  searchParams: { city: string };
}) {
  const restaurants = await fetchRestaurantsByLocation(
    searchParams.city.toLowerCase()
  );

  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SideBar />
        <div className="w-5/6 pl-5 pr-5">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))}
          {!restaurants && (
            <p className="pt-6 pb-6 text-lg text-gray-500">
              Oops! No restaurants that match the criteria...
            </p>
          )}
        </div>
      </div>
    </>
  );
}

// searching for the correct restaurants
// lowercase
// no data display
