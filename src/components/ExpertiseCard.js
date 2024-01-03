import React from 'react';

export const ExpertiseCard = ({ content, index }) => {
  const cardNumber = `0${index + 1}`;
  const { title, description, iconPath } = content;

  return (
    <div>
      <p>{cardNumber}</p>
      <h3>{title}</h3>
      <p>icon</p>
      <p>{description}</p>
    </div>
  );
};
