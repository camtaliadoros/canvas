import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from '../styles/header.module.css';

export const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <StaticImage
          src='../assets/canvas-logo.png'
          alt='canvas-logo'
          placeholder='blurred'
          loading='eager'
          width={60}
        />
      </div>
      <div className={styles.contactLinkContainer}>
        <a href='mailto:info@canvasphilanthropy.com'>Contact us</a>
      </div>
    </>
  );
};
