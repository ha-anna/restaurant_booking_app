import React from 'react';

export default function Loading() {
  return (
    <div className="bg-white w-[100%] rounded p-3 shadow mb-3">
      <nav className="flex text-reg border-b pb-2">
        <h4 className="mr-7">Overview</h4>
        <h4 className="mr-7">Menu</h4>
      </nav>
      <div className="bg-white mt-5">
        <div>
          <div className="mt-4 pb-1 mb-1">
            <h1 className="font-bold text-4xl">Menu</h1>
          </div>
          <div className="flex flex-wrap justify-between">
            <p className="pt-6 pb-6 text-lg text-gray-500">Loading...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
