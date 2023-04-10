import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import icon from '../../public/favicon-32x32.png';

export default function NavBar() {
  return (
    <nav className="bg-white p-2 flex justify-between">
      <Link
        href="/"
        className="flex items-end">
        <Image
          src={icon}
          alt=""
          className="inline-block"
        />
        <h1 className="font-bold text-gray-700 text-2xl ml-2 mt-1">BookNow</h1>
      </Link>
      <div>
        <div className="flex">
          <button className="bg-blue-400 text-white border p-1 px-4 rounded mr-3">
            Sign in
          </button>
          <button className="border p-1 px-4 rounded">Sign up</button>
        </div>
      </div>
    </nav>
  );
}
