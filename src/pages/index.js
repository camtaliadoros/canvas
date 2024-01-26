import * as React from 'react';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Expertise } from '../components/Expertise';
import { Faqs } from '../components/Faqs';
import { Footer } from '../components/Footer';
import { Founder } from '../components/Founder';
import { Header } from '../components/Header';
import { Introduction } from '../components/Introduction';
import { Nav } from '../components/Nav';
import { Testimonials } from '../components/Testimonials';
import '../styles/global.css';

export default function Home() {
  return (
    <>
      <Header />
      <Nav />
      <main>
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
