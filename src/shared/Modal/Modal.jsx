import styles from './modal.module.css';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalElement = document.getElementById('modal-root');

class Modal extends Component {

    componentDidMount() {
        document.addEventListener("keydown", this.handleClose);
    }

    handleClose = (e) => {
        if (e.code === "Escape") {
            console.log(this.props);
            this.props.closeModal();
        }
        if(e.target === e.currentTarget) {
            this.props.closeModal();
            return;
        }
    }

    render() {
      const { children } = this.props;

      return (createPortal(
        <div className={styles.overlay} onClick={this.handleClose} >
          <div className={styles.modal}>
          {children}
          </div>
        </div>, modalElement)
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node,
}

export default Modal;