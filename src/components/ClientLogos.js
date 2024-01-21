import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

export const ClientLogos = ({ path }) => {
  const logo = getImage(path);

  const name = path.name;

  return <GatsbyImage image={logo} alt={name} objectFit='contain' />;
};
