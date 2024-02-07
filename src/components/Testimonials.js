import React, { useEffect, useMemo, useState } from 'react';
import * as styles from '../styles/testimonials.module.css';
import { TestimonialCard } from './TestimonialCard';
import { graphql, useStaticQuery } from 'gatsby';

export const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query Testimonial {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "testimonial" } } }
        sort: { frontmatter: { position: ASC } }
      ) {
        nodes {
          frontmatter {
            blurb
            company
            group
            title
            position
            logoPath {
              relativePath
              publicURL
            }
          }
        }
      }
    }
  `);

  const [groupNumber, setGroupNumber] = useState();

  useEffect(() => {
    setGroupNumber(Math.floor(Math.random() * 4) + 1);
  }, []);

  const allTestimonials = data.allMarkdownRemark.nodes;
  const featuredTestimonials = allTestimonials.filter(
    (testimonial) => testimonial.frontmatter.group === groupNumber
  );

  return (
    <div className={styles.container}>
      {featuredTestimonials.map((content, i) => (
        <TestimonialCard content={content} key={i} />
      ))}
    </div>
  );
};
