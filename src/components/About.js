import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ClientLogos } from './ClientLogos';
import * as styles from '../styles/about.module.scss';
import { SectionTitle } from './SectionTitle';

const sortedLogos = [
  'housing-justice',
  'beattiefoundation',
  '7stars-foundation-logo',
  'tons-of-help',
  'justliving-foundation',
  'praetura-ventures',
  'sureserve-group',
  'c3posttrade',
  'footprint-foundation',
  'building-heroes',
  'cafedirect',
  'lighthouse-club',
  'buildinglives',
  'national-housing',
  'you-okay-doc',
  'kingdomchoir',
  'arete-foundation-logo',
  'brixton-finishing-school',
  'tbs',
  'stefphilips',
];

export const About = () => {
  const data = useStaticQuery(graphql`
    query AboutContent {
      allFile(filter: { relativeDirectory: { eq: "client-logos" } }) {
        nodes {
          id
          name
          childImageSharp {
            gatsbyImageData
          }
          relativePath
        }
      }
      allContentfulSection(filter: { name: { eq: "ABOUT" } }) {
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

  const logos = data.allFile.nodes;
  logos.sort(
    (a, b) => sortedLogos.indexOf(a.name) - sortedLogos.indexOf(b.name)
  );

  const content = data.allContentfulSection.nodes[0];

  return (
    <section className='white-container-section' id='about'>
      <SectionTitle sectionContent={content} />

      <div className={styles.logosContainer}>
        {logos.map((logo, i) => (
          <ClientLogos path={logo} key={i} />
        ))}
      </div>
    </section>
  );
};
