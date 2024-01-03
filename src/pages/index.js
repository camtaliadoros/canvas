import * as React from 'react';
import { Testimonial, Testimonials } from '../components/Testimonials';
import { About } from '../components/About';
import { Expertise } from '../components/Expertise';
import { Founder } from '../components/Founder';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Nav } from '../components/Nav';
import '../styles/global.scss';
import { Introduction } from '../components/Introduction';

export default function Home() {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Introduction />
        <Testimonials />
        <About />
        <Expertise />
        <Founder />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
