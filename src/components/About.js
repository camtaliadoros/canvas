import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ClientLogos } from './ClientLogos';
import * as styles from '../styles/about.module.css';

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
    query ClientLogos {
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
    }
  `);

  const logos = data.allFile.nodes;
  logos.sort(
    (a, b) => sortedLogos.indexOf(a.name) - sortedLogos.indexOf(b.name)
  );

  console.log(logos);

  return (
    <section className='white-container-section' id='about'>
      <h1 className='dark'>About</h1>
      <h2 className='dark'>A Space to Care</h2>
      <h4 className='dark'>
        We have the priviledge of working with client of all shapes and sizes,
        yet all united in their purpose to enhance the world we live in.
      </h4>
      <p className='dark'>
        Canvas was founded in 2015 by Alexandra Taliadoros following a career
        leading charitable and philanthropic initiatives for individuals,
        families and businesses across both international and domestic
        landscapes.
      </p>
      <p className='dark'>
        Through a menu of services, from charity establishment to charitable
        foundation direction; corporate social responsibility consultancy to
        governance and compliance controls (and everything in between) we
        support those who wish to make a difference, create meaningful and
        powerful change in the world.
      </p>
      <div className={styles.logosContainer}>
        {logos.map((logo, i) => (
          <ClientLogos path={logo} key={i} />
        ))}
      </div>
    </section>
  );
};
