import React from 'react';
import * as styles from '../styles/faq.module.css';

export const FaqDropdown = ({ content }) => {
  const { question, answer } = content;

  return (
    <div className={styles.container}>
      <button className={styles.questionContainer}>
        <p className='large'>{question}</p>
        <div className={styles.chevron}></div>
      </button>
      <div className={styles.answerContainer}>
        {answer.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};
