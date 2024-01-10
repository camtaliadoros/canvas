import React from 'react';
import * as styles from '../styles/testimonials.module.css';

export const TestimonialCard = ({ content }) => {
  const { logoPath, blurb, title, company } = content;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.circle} />
      <p>Logo</p>
      <p>{blurb}</p>
      <p>{title}</p>
      <p>{company}</p>
    </div>
  );
};
