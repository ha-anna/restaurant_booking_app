"use client";

export default function Reservation() {
  return (
    <div className="fixed w-[20%] bg-white rounded p-3 shadow">
      <div className="text-center border-b pb-2 font-bold">
        <h4 className="mr-7 text-lg">Make a Reservation</h4>
      </div>
      <div className="my-3 flex flex-col">
        <label htmlFor="">Party size</label>
        <select name="" className="p-3 border-b font-light" id="">
          <option value="">1 person</option>
          <option value="">2 people</option>
        </select>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col w-[48%] justify-items-stretch">
          <label htmlFor="">Date</label>
          <input type="text" className="py-2 border font-light w-28" />
        </div>
        <div className="flex flex-col w-[48%] justify-items-stretch">
          <label htmlFor="">Time</label>
          <select name="" id="" className="p-3 border-0 font-light">
            <option value="">7:30 AM</option>
            <option value="">9:30 AM</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <button className="bg-red-600 rounded w-full px-4 text-white font-bold h-16">
          Find a Time
        </button>
      </div>
    </div>
  );
}
