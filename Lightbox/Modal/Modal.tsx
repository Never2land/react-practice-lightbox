import React, { useState } from 'react';
import { images } from '../../images';
import styles from './Modal.module.css';

const Modal = ({ onClose, activeImage, setActiveImage }) => {
  console.log(activeImage);
  const handleClick = () => {
    onClose && onClose();
  };

  const handleControlTabClick = (e, url) => {
    e.stopPropagation();
    setActiveImage(url);
  };

  return (
    <div onClick={handleClick} className={styles.backdrop}>
      <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
        <button
          className={styles.image}
          onClick={handleClick}
          style={{
            height: '500px',
            width: '400px',
            backgroundImage: `url(${activeImage})`,
            backgroundSize: 'cover',
            borderRadius: '5px',
          }}
        ></button>
      </div>
      <div className={styles.controlTab}>
        {images.map((url, idx) => (
          <button
            style={{
              backgroundImage: `url(${url})`,
              backgroundSize: 'cover',
              border: `1px solid ${
                activeImage === url ? '#06b6d4' : 'transparent'
              }`,
            }}
            className={styles.tabButton}
            key={idx}
            onClick={(e) => handleControlTabClick(e, url)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Modal;
