import React from 'react';

export const TestimonialCard = ({ content }) => {
  const { logoPath, blurb, title, company } = content;
  return (
    <div>
      <p>Logo</p>
      <p>{blurb}</p>
      <p>{title}</p>
      <p>{company}</p>
    </div>
  );
};
