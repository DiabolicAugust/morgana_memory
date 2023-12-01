import React from 'react';
import styles from './CardComponent.module.css';

const CardComponent = ({
  text,
  imgElement,
  buttonElement,
  isSimpleClassName = true,
  backgroundColor,
  onComponentClick,
  onButtonClick,
}) => {
  return (
    <div
      className={isSimpleClassName ? styles.main : styles.mainUnactive}
      style={{ backgroundColor: backgroundColor }}
      onClick={onComponentClick}
    >
      {imgElement}
      <p>{text}</p>
      <div onClick={onButtonClick} className={styles.button}>
        {buttonElement}
      </div>
    </div>
  );
};

export default CardComponent;
