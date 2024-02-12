import React, { useEffect, useState } from 'react';
import Sphere from '../assets/Ball-with-Feather.webm';
import SphereMp4 from '../assets/sphere.mp4';
import * as styles from '../styles/introduction.module.scss';
import { Testimonials } from './Testimonials';

export const Introduction = () => {
  const [videoSrc, setVideoSrc] = useState();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isSafari = /^((?!chrome|android).)*safari/i.test(
        navigator.userAgent
      );

      if (isSafari) {
        setVideoSrc(<source src={SphereMp4} type='video/mp4' />);
      } else {
        setVideoSrc(<source src={Sphere} type='video/webm' />);
      }
    }
  }, []);

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
          playsInline
          loop
          muted
          disableRemotePlayback
          className={styles.video}
        >
          {videoSrc}
        </video>
      </div>
      <Testimonials />
    </section>
  );
};
