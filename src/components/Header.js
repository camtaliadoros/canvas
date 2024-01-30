import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from '../styles/header.module.css';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

export const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <AnchorLink to='#introduction'>
          <StaticImage
            src='../assets/canvas-logo.png'
            alt='canvas-logo'
            placeholder='blurred'
            loading='eager'
            className={styles.logo}
          />
        </AnchorLink>
      </div>
      <div className={styles.contactLinkContainer}>
        <a href='mailto:alexandra@canvasphilanthropy.com' target='_blank'>
          Contact us
        </a>
      </div>
    </>
  );
};
