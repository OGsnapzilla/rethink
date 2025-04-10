import { useState } from 'react';
import styles from './FaqItem.module.css';

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <article className={styles.item}>
      <article className={styles.question} onClick={() => setOpen(!open)}>
        <p><strong>{question}</strong></p>
        <span>{open ? '−' : '+'}</span>
      </article>
      {open && (
        <div className={styles.answer}>
          <p>{answer}</p>
        </div>
      )}
    </article>
  );
};

export default FaqItem;
