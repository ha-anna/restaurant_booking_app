import Header from './components/Header';
import React from 'react';

export default function RestaurantLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  return (
    <>
      <Header slug={params.slug} />
      <div className="flex m-auto w-2/3 justify-between items-start -mt-11">
        {children}
      </div>
    </>
  );
}
