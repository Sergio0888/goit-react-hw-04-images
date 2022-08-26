import styles from './modal.module.css';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalElement = document.getElementById('modal-root');

const Modal = ({ closeModal, children }) => {

  useEffect(() => {
    document.addEventListener("keydown", handleClose);

    return () => document.removeEventListener("keydown", handleClose);
  }, [])
  
  const handleClose = ({ code, target, currentTarget }) => {
    if (code === "Escape" || target === currentTarget) {
      closeModal();
    }
  };

  return (createPortal(
    <div className={styles.overlay} onClick={handleClose} >
      <div className={styles.modal}>
      {children}
      </div>
    </div>, modalElement)
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node,
}

export default Modal;