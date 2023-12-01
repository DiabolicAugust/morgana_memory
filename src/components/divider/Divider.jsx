import React from 'react';
import styles from './Divider.module.css';

const Divider = ({ margin }) => {
  return <div className={styles.divider} style={{ margin: margin || '0' }} />;
};

export default Divider;
