import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { SectionTitle } from './SectionTitle';

export const Founder = () => {
  const data = useStaticQuery(graphql`
    query FounderContent {
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
      <SectionTitle sectionContent={content} />
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
