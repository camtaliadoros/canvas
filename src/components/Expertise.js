import React from 'react';
import { ExpertiseCard } from './ExpertiseCard';
import { graphql, useStaticQuery } from 'gatsby';

export const Expertise = () => {
  const data = useStaticQuery(graphql`
    query ExpertiseContent {
      allMarkdownRemark {
        nodes {
          frontmatter {
            description
            title
            position
            iconPath {
              id
              childImageSharp {
                gatsbyImageData(width: 78)
              }
            }
          }
          id
        }
      }
    }
  `);

  const expertiseContent = data.allMarkdownRemark.nodes.sort();

  console.log(expertiseContent);

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
        <p className='large'>
          No matter your fundraising goal we will work with you to construct and
          achieve a fruitful strategy which will not only raise income, but
          engage supporters – achieving both commercial and emotional investment
          from donors.
        </p>
      </div>
      <div className='expertise-cards-container'>
        {expertiseContent.map((card) => {
          return <ExpertiseCard content={card} key={card.id} />;
        })}
      </div>
    </section>
  );
};
