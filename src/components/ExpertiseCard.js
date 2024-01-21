import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

export const ExpertiseCard = ({ content }) => {
  const { title, description, iconPath, position } = content.frontmatter;

  const icon = getImage(iconPath);

  return (
    <div className='expertise-card'>
      <div>
        <p className='expertise-index'>0{position}</p>
      </div>
      <h3>{title}</h3>
      <GatsbyImage image={icon} alt={title} />
      <p>{description}</p>
    </div>
  );
};
