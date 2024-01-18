import React from 'react';

export const FaqDropdown = ({ content }) => {
  const { question, answer } = content;

  return (
    <div className='faq-container'>
      <div className='faq-question-container'>
        <p className='large'>{question}</p>
      </div>
      <div className='faq-answer-container'>
        {answer.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};
