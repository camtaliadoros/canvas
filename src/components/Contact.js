import React from 'react';
import * as styles from '../styles/contact.module.css';

export const Contact = () => {
  return (
    <section className={styles.contactContainer} id='contact'>
      <h5>
        Get in touch today to find out how we can assist you with X, Y and Z
      </h5>
      <a
        className='email'
        href='mailto:info@canvasphilanthropy.com'
        target='_blank'
      >
        info@canvasphilanthropy.com
      </a>
    </section>
  );
};
