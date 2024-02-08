import * as React from 'react';
import { useEffect, useState } from 'react';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Expertise } from '../components/Expertise';
import { Faqs } from '../components/Faqs';
import { Footer } from '../components/Footer';
import { Founder } from '../components/Founder';
import { Header } from '../components/Header';
import { Introduction } from '../components/Introduction';
import { Nav } from '../components/Nav';
import '../styles/global.css';
import { Seo } from '../components/seo';

export default function Home() {
  const [browserClass, setBrowserClass] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isSafari = /^((?!chrome|android).)*safari/i.test(
        navigator.userAgent
      );

      if (isSafari) {
        setBrowserClass('safari');
      } else {
        setBrowserClass('');
      }
    }
  }, []);

  return (
    <>
      <Header />
      <Nav />
      <main className={browserClass}>
        <Introduction />
        <About />
        <Expertise />
        <Founder />
        <Faqs />
      </main>
      <Contact />
      <Footer />
    </>
  );
}

export function Head() {
  return <Seo />;
}
