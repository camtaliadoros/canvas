import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useState } from 'react';
import * as styles from '../styles/testimonials.module.scss';
import { TestimonialCard } from './TestimonialCard';

export const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query Testimonial {
      allContentfulTestimonial(sort: { position: ASC }) {
        nodes {
          group
          position
          company
          title
          testimonial {
            testimonial
          }
          logo {
            publicUrl
            url
          }
        }
      }
    }
  `);

  const allTestimonials = data.allContentfulTestimonial.nodes;

  const groups = allTestimonials.map((testimonial) => testimonial.group).sort();
  const numOfGroups = new Set(groups).size;

  const [featuredTestimonials, setFeaturedTestimonials] = useState([]);

  useEffect(() => {
    const selectTestimonials = () => {
      const featuredGroup = Math.floor(Math.random() * numOfGroups) + 1;

      const testimonials = allTestimonials.filter(
        (testimonial) => testimonial.group === featuredGroup
      );

      return testimonials;
    };

    let selectedTestimonials;

    do {
      selectedTestimonials = selectTestimonials();
    } while (selectedTestimonials.length < 3);

    setFeaturedTestimonials(selectedTestimonials);
  }, []);

  return (
    <div className={styles.container}>
      {featuredTestimonials.map((content, i) => (
        <TestimonialCard content={content} key={i} />
      ))}
    </div>
  );
};
