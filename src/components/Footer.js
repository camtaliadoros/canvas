import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export const Footer = () => {
  return (
    <footer>
      <StaticImage
        src='../assets/canvas-logo.png'
        alt='canvas-logo'
        placeholder='blurred'
        loading='lazy'
        className='footer-logo'
        width={60}
      />
      <p>©Canvas Philanthropy 2024</p>
    </footer>
  );
};
