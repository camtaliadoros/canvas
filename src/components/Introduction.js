import React from 'react';
import * as styles from '../styles/introduction.module.css';

export const Introduction = () => {
  return (
    <section className={styles.container} id='introduction'>
      <h1>INTRODUCTION</h1>
      <h2>A Space to Change</h2>
      <div className='section-description'>
        <p className='large'>
          We support inspirational people instigate meaningful and powerful
          change in the world. Established in 2015, we shape, launch and grow
          philanthropic and corporate socially responsible initiatives.
        </p>
      </div>
    </section>
  );
};
