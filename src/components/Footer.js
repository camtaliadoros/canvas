import { StaticImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query CopyrightContent {
      contentfulCopyright {
        copyright
      }
    }
  `);

  const { copyright } = data.contentfulCopyright;

  return (
    <footer>
      <StaticImage
        src='../assets/canvas-logo.png'
        alt='canvas-logo'
        placeholder='blurred'
        loading='lazy'
        className='footer-logo'
      />
      <p>{copyright}</p>
    </footer>
  );
};
