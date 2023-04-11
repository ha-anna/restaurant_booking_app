import React from 'react';
import Header from './components/Header';

export default function Loading() {
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <div className="w-1/5">
          <div className="border-b pb-4">
            <h1 className="mb-2">Region</h1>
            <ul>
              {[1, 2, 3].map((num) => (
                <p key={num}>...</p>
              ))}
            </ul>
          </div>
          <div className="border-b pb-4 mt-3">
            <h1 className="mb-2">Cuisine</h1>
            <ul>
              {[1, 2, 3].map((num) => (
                <p key={num}>...</p>
              ))}
            </ul>
          </div>
          <div className="mt-3 pb-4">
            <h1 className="mb-2">Price</h1>
            <div className="flex">
              {[1, 2, 3].map((num) => (
                <p key={num}>...</p>
              ))}
            </div>
          </div>
        </div>
        <div className="w-5/6 pl-5 pr-5">
          {[1, 2, 3, 4, 5].map((num) => (
            <div
              className="animate-pulse bg-slate-200 m-3 w-full h-36 rounded overflow-hidden border cursor-pointer"
              key={num}></div>
          ))}
        </div>
      </div>
    </>
  );
}
