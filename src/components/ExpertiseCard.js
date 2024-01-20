import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

export const ExpertiseCard = ({ content, index }) => {
  const cardNumber = `0${index + 1}`;

  const { title, description, iconPath } = content.frontmatter;

  const icon = getImage(iconPath);

  return (
    <div className='expertise-card'>
      <div>
        <p className='expertise-index'>{cardNumber}</p>
      </div>
      <h3>{title}</h3>
      <GatsbyImage image={icon} alt='icon' />
      <p>{description}</p>
    </div>
  );
};
