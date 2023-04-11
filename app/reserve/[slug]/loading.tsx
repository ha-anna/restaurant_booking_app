import React from 'react';

export default function Loading() {
  return (
    <main className="max-w-screen-2xl m-auto bg-white">
      <div className="border-t h-screen flex justify-center">
        <div className="py-9 w-3/5 pl-4">
          <div>
            <h3 className="font-bold">You're almost done!</h3>
            <div className="mt-5 flex animate-pulse bg-slate-200 m-3 w-full h-72 rounded overflow-hidden border"></div>
          </div>
          <div className="mt-10 flex flex-wrap justify-between w-[660px] bg-slate-200"></div>
        </div>
      </div>
    </main>
  );
}
