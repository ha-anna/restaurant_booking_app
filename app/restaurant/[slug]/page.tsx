import React from 'react';
import RestaurantNavBar from './components/RestaurantNavBar';
import Title from './components/Title';
import Rating from './components/Rating';
import Description from './components/Description';
import Images from './components/Images';
import Reviews from './components/Reviews';
import Reservation from './components/Reservation';
import { PrismaClient, Review } from '@prisma/client';

const prisma = new PrismaClient();

interface Restaurant {
  id: number;
  name: string;
  slug: string;
  description: string;
  images: string[];
  reviews: Review[];
}

const fetchRestaurantBySlug = async (slug: string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      slug: true,
      description: true,
      images: true,
      reviews: true,
    },
  });
  if (!restaurant) {
    throw new Error('Restaurant not found');
  }
  return restaurant;
};

export default async function RestaurantDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { id, name, slug, description, images, reviews } =
    await fetchRestaurantBySlug(params.slug);

  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar slug={slug} />
        <Title name={name} />
        <Rating reviews={reviews} />
        <Description description={description} />
        <Images images={images} />
        <Reviews reviews={reviews} />
      </div>
      <div className="w-[27%] relative text-reg">
        <Reservation />
      </div>
    </>
  );
}
