import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Geist, Geist_Mono } from 'next/font/google';
import HomePage from './home';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function Home() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="App" id={load ? 'no-scroll' : 'scroll'}>
        <HomePage />
      </div>
    </>
  );
}
