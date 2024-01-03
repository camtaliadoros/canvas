import React from 'react';
import { TestimonialCard } from './TestimonialCard';

export const Testimonials = () => {
  const testimonialContents = [
    {
      logoPath: 'logo',
      blurb:
        '        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sintoccaecat cupidatat non proident, sunt in culpa qui officia deserun mollit anim id est laborum.',
      title: 'Name',
      company: 'Company',
    },
    {
      logoPath: 'logo',
      blurb:
        '        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sintoccaecat cupidatat non proident, sunt in culpa qui officia deserun mollit anim id est laborum.',
      title: 'Name',
      company: 'Company',
    },
    {
      logoPath: 'logo',
      blurb:
        '        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sintoccaecat cupidatat non proident, sunt in culpa qui officia deserun mollit anim id est laborum.',
      title: 'Name',
      company: 'Company',
    },
  ];
  return (
    <section id='testimonials'>
      {testimonialContents.map((content) => (
        <TestimonialCard content={content} />
      ))}
    </section>
  );
};
