import React from 'react';
import * as styles from '../styles/testimonials.module.scss';

export const TestimonialCard = ({ content }) => {
  const { testimonial, title, company } = content;

  const testimonialText = testimonial.testimonial;

  const logoPath = content.logo;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.circle} />
      <div className={styles.logoContainer}>
        <img src={logoPath.url} alt='company logo' />
      </div>
      <p className={styles.blurb}>{testimonialText}</p>

      <p className={styles.title}>{title}</p>
      <p className={styles.title}>{company}</p>
    </div>
  );
};
