import React from 'react';
import styles from './NoteTopBar.module.css';
import { IoIosArrowForward } from 'react-icons/io';
import { GoKebabHorizontal } from 'react-icons/go';
import Divider from '../../../../components/divider/Divider';

const NoteTopBar = ({ title }) => {
  return (
    <div className={styles.topBar}>
      <div className={styles.path}>
        <div className={styles.pathLeft}>
          <p>My Notes</p>
          <IoIosArrowForward className={styles.svg} size="16px" />
          <p>{title}</p>
        </div>
        <GoKebabHorizontal size="24px" />
      </div>
      <Divider margin={'20px 0px'} />
    </div>
  );
};

export default NoteTopBar;
