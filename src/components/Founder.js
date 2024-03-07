import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { SectionTitle } from './SectionTitle';
import { graphql, useStaticQuery } from 'gatsby';

export const Founder = () => {
  const data = useStaticQuery(graphql`
    query IntroductionContent {
      allContentfulSection(filter: { name: { eq: "FOUNDER" } }) {
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

  const content = data.allContentfulSection.nodes[0];

  return (
    <section className='white-container-section' id='founder'>
      <StaticImage
        src='../assets/alex.png'
        loading='lazy'
        placeholder='blurred'
        alt='canvas founder Alex Taliadoros'
        width={120}
        className='founder-img'
      />
      <SectionTitle content={content} />
      <StaticImage
        src='../assets/alex-signature.png'
        alt='alex signature'
        loading='lazy'
        placeholder='blurred'
        width={90}
      />
      <div className='signature-container'>
        <p>Alexandra Taliadoros</p>
        <p>Founder - Canvas Philanthropy</p>
      </div>
    </section>
  );
};
