import React from 'react';
import { ExpertiseCard } from './ExpertiseCard';
import { graphql, useStaticQuery } from 'gatsby';
import * as styles from '../styles/expertise.module.scss';
import { SectionTitle } from './SectionTitle';

export const Expertise = () => {
  const data = useStaticQuery(graphql`
    query ExpertiseContent {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "expertise" } } }
        sort: { frontmatter: { position: ASC } }
      ) {
        nodes {
          frontmatter {
            description
            title
            position
            iconPath {
              id
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          id
        }
      }

      allContentfulSection(filter: { name: { eq: "EXPERTISE" } }) {
        nodes {
          title
          name
          heading
          childContentfulSectionDescriptionTextNode {
            description
          }
          id
          childContentfulSectionTextTextNode {
            text
          }
        }
      }
    }
  `);

  const expertiseCardsContent = data.allMarkdownRemark.nodes;
  const content = data.allContentfulSection.nodes[0];

  return (
    <section id='expertise'>
      <SectionTitle content={content} />
      <div className={styles.expertiseCardsContainer}>
        {expertiseCardsContent.map((content) => {
          return <ExpertiseCard content={content} key={content.id} />;
        })}
      </div>
    </section>
  );
};
