import React from 'react';
import * as styles from '../styles/testimonials.module.css';

export const TestimonialCard = ({ content }) => {
  const { logoPath, blurb, title, company } = content.frontmatter;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.circle} />
      <div className={styles.logoContainer}>
        <img src={logoPath.publicURL} alt='company logo' />
      </div>
      <p className={styles.blurb}>{blurb}</p>

      <p className={styles.title}>{title}</p>
      <p className={styles.title}>{company}</p>
    </div>
  );
};
