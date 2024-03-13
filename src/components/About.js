import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ClientLogos } from './ClientLogos';
import * as styles from '../styles/about.module.scss';
import { SectionTitle } from './SectionTitle';

export const About = () => {
  const data = useStaticQuery(graphql`
    query AboutContent {
      allContentfulClientLogos(sort: { position: ASC }) {
        nodes {
          logo {
            gatsbyImageData
            title
          }
          id
        }
      }
      allContentfulSection(
        filter: { id: { eq: "e4605f50-1233-5cb7-acab-2174014b6449" } }
      ) {
        nodes {
          title
          name
          heading
          id
          childContentfulSectionDescriptionTextNode {
            description
          }
          childContentfulSectionBodyTextNode {
            body
          }
        }
      }
    }
  `);

  const logos = data.allContentfulClientLogos.nodes;

  const content = data.allContentfulSection.nodes[0];

  return (
    <section className='white-container-section' id='about'>
      <SectionTitle sectionContent={content} />

      <div className={styles.logosContainer}>
        {logos.map((logo) => (
          <ClientLogos path={logo} key={logo.id} />
        ))}
      </div>
    </section>
  );
};
