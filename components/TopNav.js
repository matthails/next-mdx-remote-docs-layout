import React from 'react';
import Link from 'next/link';
 
export function TopNav({ children }) {
  return (
    <nav className="w-full flex justify-between items-center border-b-[1px] border-b-slate-200 py-4 px-8 fixed z-10 top-0">
      <Link href="#"><a>Home</a></Link>
      <section className="flex gap-4">{children}</section>
    </nav>
  );
}
