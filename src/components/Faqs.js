import React from 'react';
import { FaqsDropdown } from './FaqsDropdown';
import { graphql, useStaticQuery } from 'gatsby';
import { SectionTitle } from './SectionTitle';

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

      allContentfulSection(filter: { name: { eq: "FAQ" } }) {
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

  const faqContent = data.allMarkdownRemark.nodes;
  const content = data.allContentfulSection.nodes[0];

  return (
    <section id='faq'>
      <SectionTitle sectionContent={content} />
      {faqContent.map((content, answerIndex) => (
        <FaqsDropdown content={content} key={answerIndex} />
      ))}
    </section>
  );
};
