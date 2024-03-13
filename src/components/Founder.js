import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { SectionTitle } from './SectionTitle';

export const Founder = () => {
  const data = useStaticQuery(graphql`
    query FounderContent {
      allContentfulSection(
        filter: { id: { eq: "4455f3dc-d9f1-5bec-854d-d7f1c6449cd1" } }
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
      allContentfulFounder {
        nodes {
          picture {
            gatsbyImageData
            title
          }
          signature {
            gatsbyImageData
            title
          }
          name
          title
        }
      }
    }
  `);

  const content = data.allContentfulSection.nodes[0];
  const founderContent = data.allContentfulFounder.nodes[0];

  const { picture, signature } = founderContent;

  const picturePath = getImage(picture.gatsbyImageData);
  const signaturePath = getImage(signature.gatsbyImageData);

  return (
    <section className='white-container-section' id='founder'>
      <GatsbyImage
        image={picturePath}
        alt='canvas founder Alex Taliadoros'
        className='founder-img'
        placeholder='blurred'
        loading='lazy'
      />

      <SectionTitle sectionContent={content} />
      <GatsbyImage
        image={signaturePath}
        alt='alex signature'
        loading='lazy'
        placeholder='blurred'
        className='signature'
      />

      <div className='signature-container'>
        <p>{founderContent.name}</p>
        <p>{founderContent.title}</p>
      </div>
    </section>
  );
};
