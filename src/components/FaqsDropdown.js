import React, { useState } from 'react';
import * as styles from '../styles/faq.module.css';

export const FaqsDropdown = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { question, answer } = content;

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.container}>
      <button className={styles.questionContainer} onClick={handleClick}>
        <p className='large'>{question}</p>
        <div
          className={`${styles.chevron} ${isOpen ? styles.openChevron : null}`}
        ></div>
      </button>
      <div
        className={`${styles.answerContainer} ${
          isOpen ? styles.openAnswer : null
        }`}
      >
        {answer.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};
