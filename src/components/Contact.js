import React from 'react';
import * as styles from '../styles/contact.module.scss';

export const Contact = () => {
  return (
    <section className={styles.contactContainer} id='contact'>
      <h5>
        Get in touch today to find out how we can assist you with your
        philanthropic vision.
      </h5>
      <a
        className='email'
        href='mailto:alexandra@canvasphilanthropy.com'
        target='_blank'
        rel='noreferrer'
      >
        alexandra@canvasphilanthropy.com
      </a>
    </section>
  );
};
