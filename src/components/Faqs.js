import React from 'react';
import { FaqsDropdown } from './FaqsDropdown';
import { graphql, useStaticQuery } from 'gatsby';
import { SectionTitle } from './SectionTitle';

export const Faqs = () => {
  const data = useStaticQuery(graphql`
    query FaqContent {
      allContentfulFaq {
        nodes {
          question {
            question
          }
          answer {
            answer
          }
          id
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

  const faqContent = data.allContentfulFaq.nodes;
  const content = data.allContentfulSection.nodes[0];

  return (
    <section id='faq'>
      <SectionTitle sectionContent={content} />
      {faqContent.map((content) => (
        <FaqsDropdown content={content} key={content.id} />
      ))}
    </section>
  );
};
