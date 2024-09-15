import * as React from 'react';
import { useState, useEffect } from 'react';
import { ModalField, CloseModal, ModalWindow } from './BasicModal.styled';

import sprite from '../../../images/sprite.svg';

const BasicModal = ({ children, name, open, closeModal }) => {
  const [modalClass, setModalClass] = useState('');

  useEffect(() => {
    switch (name) {
      case 'NeedHelp':
        setModalClass('needHelp');
        break;
      case 'Filters':
        setModalClass('filter');
        break;
      case 'EditProfile':
        setModalClass('editProfile');
        break;
      default:
        setModalClass('');
        break;
    }
  }, [name]);

  const handleModalClick = e => {
    e.stopPropagation();
  };

  return (
    <div style={{ position: 'absolute' }} onMouseDown={handleModalClick}>
      <ModalWindow
        open={open}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalField className={modalClass}>
          <CloseModal onClick={closeModal} type="button">
            <svg width="18" height="18">
              <use href={sprite + '#icon-x-close'} />
            </svg>
          </CloseModal>
          {children}
        </ModalField>
      </ModalWindow>
    </div>
  );
};

export default BasicModal;
