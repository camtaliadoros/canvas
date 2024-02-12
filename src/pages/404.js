import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import * as styles from '../styles/404.module.scss';
import { Link } from 'gatsby';

export default function notFound() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.mainContainer}>
        <Link to='/'>
          <h1>Go back home</h1>
        </Link>
        <h2>This page doesn't exist</h2>
      </main>
      <Footer />
    </div>
  );
}
