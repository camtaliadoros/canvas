import React from 'react';
import * as styles from '../styles/introduction.module.css';
import { Testimonials } from './Testimonials';
import Sphere from '../assets/Ball-with-Feather.webm';
// import Sphere from '../assets/sphere.mp4';

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
      <div className={styles.videoContainer}>
        <video
          autoPlay
          loop
          muted
          playsInline
          disableRemotePlayback
          className={styles.video}
        >
          <source src={Sphere} type='video/mp4' />
        </video>
      </div>
      <Testimonials />
    </section>
  );
};
