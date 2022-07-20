import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { SideNav, TableOfContents, TopNav } from '../components';
import '../styles/globals.css';
 
function MyApp({ Component, pageProps, posts }) {
  return (
    <>
      <Head>
        <title>Docs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="strict-origin" />
        <meta name="title" content="Markdocs Starter Rebuild" />
        <meta
          name="description"
          content="Built from the ground up for educational purposes"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   <div className="fixed w-full max-w-7xl left-1/2 -translate-x-1/2">
      <TopNav>
      <ul className="flex gap-8">
        <li><Link href="#"><a>Link 1</a></Link></li>
        <li><Link href="#"><a>Link 2</a></Link></li>
        </ul>
      </TopNav>
      <div className="fixed top-[var(--top-nav-height)] flex w-full">
        <SideNav posts={posts} />
        <main className="flex grow main-height overflow-y-auto px-8 pb-8 pt-8">
          <article>
            <Component {...pageProps} />
          </article>
        </main>
        <TableOfContents />
        </div>
        </div>
    </>
  );
}
 
export default MyApp