import React from 'react';
import { FaqsDropdown } from './FaqsDropdown';
import { graphql, useStaticQuery } from 'gatsby';

export const Faqs = () => {
  const data = useStaticQuery(graphql`
    query FaqContent {
      allMarkdownRemark(
        sort: { frontmatter: { position: ASC } }
        filter: { frontmatter: { type: { eq: "faq" } } }
      ) {
        nodes {
          frontmatter {
            position
            question
          }
          internal {
            content
          }
        }
      }
    }
  `);

  const faqContent = data.allMarkdownRemark.nodes;

  return (
    <section id='faq'>
      <h1>FAQ</h1>
      <h2>A Space to Learn</h2>
      {faqContent.map((content, answerIndex) => (
        <FaqsDropdown content={content} key={answerIndex} />
      ))}
    </section>
  );
};
