import React from "react";

export default function Images() {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-5 border-b pb-5">Photos</h1>
      <div className="flex flex-wrap box-border">
        <div className="basis-1/2">
          <img
            className="w-full h-48 object-cover p-1"
            src="https://resizer.otstatic.com/v2/photos/xlarge/3/41701449.jpg"
            alt=""
          />
        </div>
        <div className="basis-1/2">
          <img
            className="w-full h-48 object-cover p-1"
            src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701450.jpg"
            alt=""
          />
        </div>
        <div className="basis-1/2">
          <img
            className="w-full h-48 object-cover p-1"
            src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701452.jpg"
            alt=""
          />
        </div>
        <div className="basis-1/2">
          <img
            className="w-full h-48 object-cover p-1"
            src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701453.jpg"
            alt=""
          />
        </div>
        <div className="basis-1/2">
          <img
            className="w-full h-48 object-cover p-1"
            src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701454.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
