import React from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import RestaurantCard from './components/RestaurantCard';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const fetchRestaurantsByLocation = async (location: string) => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    cuisine: true,
    slug: true,
    location: true,
    price: true,
  };

  const restaurants = await prisma.restaurant.findMany({
    where: {
      location: {
        name: { equals: location.toLowerCase() },
      },
    },
    select: select,
  });
  if (!restaurants) {
    throw new Error('Restaurant not found');
  }
  return restaurants;
};

const fetchLocations = async () => {
  return prisma.location.findMany();
};
const fetchCuisines = async () => {
  return prisma.cuisine.findMany();
};

export default async function Search({
  searchParams,
}: {
  searchParams: { city: string };
}) {
  const restaurants = await fetchRestaurantsByLocation(searchParams.city);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();

  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SideBar
          locations={locations}
          cuisines={cuisines}
        />
        <div className="w-5/6 pl-5 pr-5">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))}
          {restaurants.length < 1 && (
            <div className="pt-6 pb-6 text-gray-400 flex flex-col justify-center items-center h-80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24">
                <path
                  fill="#9CA3AF"
                  d="M12 7c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1zm-.01-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm1-3h-2v-2h2v2z"
                />
              </svg>
              <p className="text-lg pt-3 mt-4">
                Sorry! No restaurants available for that location...
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
