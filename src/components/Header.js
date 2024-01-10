import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export const Header = () => {
  return (
    <header>
      <StaticImage
        src='../assets/canvas-logo.png'
        alt='canvas-logo'
        placeholder='blurred'
        loading='eager'
        width={60}
      />
      <div className='contact-link-container'>
        <a href='mailto:info@canvasphilanthropy.com'>Contact us</a>
      </div>
    </header>
  );
};
