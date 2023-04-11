import React from 'react';
import Header from './components/Header';
import Form from './components/Form';

export default function ReserveRestaurant() {
  return (
    <main className="max-w-screen-2xl m-auto bg-white">
      <div className="border-t h-screen flex justify-center">
        <div className="py-9 w-3/5 pl-4">
          <Header />
          <Form />
        </div>
      </div>
    </main>
  );
}
