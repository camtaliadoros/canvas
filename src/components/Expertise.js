import React from 'react';
import { ExpertiseCard } from './ExpertiseCard';
import { graphql, useStaticQuery } from 'gatsby';
import * as styles from '../styles/expertise.module.scss';

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
    }
  `);

  const expertiseContent = data.allMarkdownRemark.nodes;

  return (
    <section id='expertise'>
      <h1>EXPERTISE</h1>
      <h2>A Space to Grow</h2>
      <div className='section-description'>
        <p className='large'>
          Our principle offering is through management of philanthropic and
          socially responsible initiatives. However, we offer a menu of services
          for those partners who have a particular requirement in their
          non-profit operation.
        </p>
      </div>
      <div className={styles.expertiseCardsContainer}>
        {expertiseContent.map((content) => {
          return <ExpertiseCard content={content} key={content.id} />;
        })}
      </div>
    </section>
  );
};
