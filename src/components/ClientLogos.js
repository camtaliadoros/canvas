import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

export const ClientLogos = ({ path }) => {
  const logo = getImage(path.node);

  return <GatsbyImage image={logo} />;
};
