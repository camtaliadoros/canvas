import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from '../styles/about.module.scss';

export const ClientLogos = ({ path }) => {
  const logo = getImage(path);

  const name = path.name;

  return (
    <GatsbyImage
      image={logo}
      alt={name}
      objectFit='contain'
      className={styles.logoContainer}
      imgClassName={styles.logo}
      objectPosition='center center'
    />
  );
};
