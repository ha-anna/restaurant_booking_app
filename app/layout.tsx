import React from 'react';
import './globals.css';
import NavBar from './components/NavBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <main className="max-w-screen-2xl m-auto bg-white min-h-screen">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
