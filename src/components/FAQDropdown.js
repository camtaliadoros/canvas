import React from 'react';

export const FAQDropdown = ({ content }) => {
  const { question, answer } = content;

  return (
    <div>
      <p>{question}</p>
      <p>{answer}</p>
    </div>
  );
};
