import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from '../styles/header.module.scss';
import { graphql, useStaticQuery } from 'gatsby';

export const Header = () => {
  const data = useStaticQuery(graphql`
    query ContactCta {
      contentfulContactUs {
        emailAddress
        callToAction
      }
    }
  `);

  const { emailAddress, callToAction } = data.contentfulContactUs;

  return (
    <>
      <div className={styles.header}>
        <StaticImage
          src='../assets/canvas-logo.png'
          alt='canvas-logo'
          placeholder='blurred'
          loading='eager'
          className={styles.logo}
        />
      </div>
      <div className={styles.contactLinkContainer}>
        <a href={`mailto:${emailAddress}`} target='_blank' rel='noreferrer'>
          {callToAction}
        </a>
      </div>
    </>
  );
};
