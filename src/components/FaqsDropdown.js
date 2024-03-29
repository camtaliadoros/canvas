import React, { useState } from 'react';
import * as styles from '../styles/faq.module.scss';

export const FaqsDropdown = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { question } = content.question;
  const { answer } = content.answer;

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
        <p>{answer}</p>
      </div>
    </div>
  );
};
