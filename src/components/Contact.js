import React from 'react';
import * as styles from '../styles/contact.module.scss';
import { graphql, useStaticQuery } from 'gatsby';

export const Contact = () => {
  const data = useStaticQuery(graphql`
    query ContactContent {
      contentfulGetInTouch {
        emailAddress
        text {
          text
        }
      }
    }
  `);

  const { text, emailAddress } = data.contentfulGetInTouch;

  return (
    <section className={styles.contactContainer} id='contact'>
      <h5>{text.text}</h5>
      <a
        className='email'
        href={`mailto:${emailAddress}`}
        target='_blank'
        rel='noreferrer'
      >
        {emailAddress}
      </a>
    </section>
  );
};
