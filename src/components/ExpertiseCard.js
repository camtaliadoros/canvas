import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export const ExpertiseCard = ({ content, index }) => {
  const cardNumber = `0${index + 1}`;

  const { title, description, iconPath } = content.frontmatter;

  return (
    <div className='expertise-card'>
      <div>
        <p className='expertise-index'>{cardNumber}</p>
      </div>

      <h3>{title}</h3>

      {/* {iconPath && <StaticImage src={iconPath} alt='csr' width={78} />} */}
      {/* <StaticImage src='../assets/icons/charity-establishment.png' /> */}
      {/* <img src='../assets/icons/charity-establishment.png' /> */}
      <p>{description}</p>
    </div>
  );
};
