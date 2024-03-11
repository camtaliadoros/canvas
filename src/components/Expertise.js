import React from 'react';
import { ExpertiseCard } from './ExpertiseCard';
import { graphql, useStaticQuery } from 'gatsby';
import * as styles from '../styles/expertise.module.scss';
import { SectionTitle } from './SectionTitle';

export const Expertise = () => {
  const data = useStaticQuery(graphql`
    query ExpertiseContent {
      allContentfulExpertiseCard(sort: { position: ASC }) {
        nodes {
          position
          title
          icon {
            id
            gatsbyImageData
          }
          body {
            body
          }
          id
        }
      }
      allContentfulSection(filter: { name: { eq: "EXPERTISE" } }) {
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

  const expertiseCardsContent = data.allContentfulExpertiseCard.nodes;
  console.log(expertiseCardsContent);
  const content = data.allContentfulSection.nodes[0];

  return (
    <section id='expertise'>
      <SectionTitle sectionContent={content} />
      <div className={styles.expertiseCardsContainer}>
        {expertiseCardsContent.map((content) => {
          return <ExpertiseCard content={content} key={content.id} />;
        })}
      </div>
    </section>
  );
};
