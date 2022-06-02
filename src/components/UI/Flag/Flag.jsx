import React from 'react';
import styles from './Flag.module.css';

const Flag = ({ code, moreClass }) => {
  const handleImgError = (evt) => {
    evt.target.src = '/currency-converter/img/flags/no-image.png';
  };
  return (
    <span className={moreClass ? `${styles.flag} ${moreClass}` : styles.flag}>
      <img
        src={`/currency-converter/img/flags/${code.toLowerCase()}.png`}
        onError={(evt) => handleImgError(evt)}
        alt=""
      />
    </span>
  );
};

export default Flag;
