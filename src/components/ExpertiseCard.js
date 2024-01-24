import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from '../styles/expertise.module.css';

export const ExpertiseCard = ({ content }) => {
  const { title, description, iconPath, position } = content.frontmatter;

  const icon = getImage(iconPath);

  return (
    <div className={styles.expertiseCard}>
      <div>
        <p className={styles.expertiseIndex}>0{position}</p>
      </div>
      <h3>{title}</h3>
      <GatsbyImage
        image={icon}
        alt={title}
        className={styles.expertiseIcon}
        objectFit='contain'
      />
      <p>{description}</p>
    </div>
  );
};
