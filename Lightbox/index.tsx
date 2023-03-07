import React, { useEffect, useState } from 'react';
import { images } from '../images';
import styles from './Lightbox.module.css';
import Modal from './Modal/Modal';

export default function Lightbox() {
  const [modal, setModal] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const onClick = (url) => {
    setActiveImage(url);
  };

  useEffect(() => {
    if (activeImage) {
      setModal(true);
    }
  }, [activeImage]);

  const onClose = () => {
    setModal(false);
    setActiveImage(null);
  };

  return (
    <div>
      {modal && (
        <Modal
          onClose={onClose}
          activeImage={activeImage}
          setActiveImage={setActiveImage}
        />
      )}
      <div className={styles.container}>
        {images.map((url, idx) => (
          <ImageCard key={idx} url={url} onClick={() => onClick(url)} />
        ))}
      </div>
    </div>
  );
}

const ImageCard = ({ url, onClick }: any) => {
  return (
    <button
      onClick={onClick}
      className={styles.image}
      style={{
        height: '250px',
        width: '200px',
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        borderRadius: '5px',
      }}
    >
      <div className={styles.overlay}></div>
    </button>
  );
};
