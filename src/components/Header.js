import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from '../styles/header.module.scss';

export const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <StaticImage
          src='../assets/canvas-logo.png'
          alt='canvas-logo'
          placeholder='blurred'
          loading='eager'
          className={styles.logo}
        />
      </div>
      <div className={styles.contactLinkContainer}>
        <a
          href='mailto:alexandra@canvasphilanthropy.com'
          target='_blank'
          rel='noreferrer'
        >
          Contact us
        </a>
      </div>
    </>
  );
};
