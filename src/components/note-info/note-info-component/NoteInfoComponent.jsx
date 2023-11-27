import React from 'react';
import styles from './NoteInfoComponent.module.css';

const NoteInfoComponent = ({ title, child }) => {
  return (
    <div className={styles.main}>
      <p>{title}</p>
      {child}
    </div>
  );
};

export default NoteInfoComponent;
