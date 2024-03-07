import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ClientLogos } from './ClientLogos';
import * as styles from '../styles/about.module.scss';

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
      allContentfulSection(filter: { name: { eq: "About" } }) {
        nodes {
          title
          name
          heading
          childContentfulSectionDescriptionTextNode {
            description
          }
          id
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
      <h1 className='dark'>{content.name}</h1>
      <h2 className='dark'>{content.title}</h2>
      <h4 className='dark'>{content.heading}</h4>
      <p className='dark'>
        {content.childContentfulSectionDescriptionTextNode.description}
      </p>
      <div className={styles.logosContainer}>
        {logos.map((logo, i) => (
          <ClientLogos path={logo} key={i} />
        ))}
      </div>
    </section>
  );
};
