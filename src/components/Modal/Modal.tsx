import clsx from 'clsx';
import { FC, MouseEvent, PropsWithChildren, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import s from './Modal.module.scss';
import { IModal } from './types';

export const Modal: FC<PropsWithChildren<IModal>> = ({ open, onClose, children }) => {
  const modalRootId = 'modal-root';

  useEffect(() => {
    let modalRoot = document.getElementById(modalRootId);
    if (!modalRoot) {
      modalRoot = document.createElement('div');
      modalRoot.setAttribute('id', modalRootId);
      document.body.appendChild(modalRoot);
    }
  }, []);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleEsc = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [open, handleEsc]);

  if (!open) return null;

  const modalRoot = document.getElementById(modalRootId);
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div
      className={clsx(s.modal, { [s.open]: open })}
      onClick={handleClick}
      role='dialog'
      aria-modal='true'
      aria-labelledby='modal-title'
      aria-describedby='modal-description'
    >
      <div className={s.modalContent}>{children}</div>
    </div>,
    modalRoot
  );
};
