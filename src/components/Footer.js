import { StaticImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `);

  const { copyright } = data.site.siteMetadata;

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
      <p>{copyright}</p>
    </footer>
  );
};
