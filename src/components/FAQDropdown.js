import React, { useState } from 'react';
import * as styles from '../styles/faq.module.css';

export const FaqDropdown = ({ content }) => {
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
      <button
        className={`${styles.answerContainer} ${
          isOpen ? styles.openAnswer : null
        }`}
        onClick={handleClick}
      >
        {answer.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </button>
    </div>
  );
};
