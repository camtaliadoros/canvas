import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from '../styles/expertise.module.scss';

export const ExpertiseCard = ({ content }) => {
  const { title, body, icon, position } = content;

  const description = body.body;

  const iconGatsby = getImage(icon);

  return (
    <div className={styles.expertiseCard}>
      <div>
        <p className={styles.expertiseIndex}>0{position}</p>
      </div>
      <h3>{title}</h3>
      <GatsbyImage
        image={iconGatsby}
        alt={title}
        className={styles.expertiseIcon}
        objectFit='contain'
      />
      <p>{description}</p>
    </div>
  );
};
