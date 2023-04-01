import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Images({ images }: { images: string[] }) {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-5 border-b pb-5">
        {images.length} {images.length === 1 ? 'Photo' : 'Photos'}
      </h1>
      <div className="flex flex-wrap box-border">
        {images.map((img) => {
          const key = uuidv4();
          return (
            <div
              className="basis-1/2"
              key={key}>
              <img
                className="w-full h-48 object-cover p-1"
                src={img}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
