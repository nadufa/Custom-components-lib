import clsx from 'clsx';
import { FC, MouseEvent, PropsWithChildren } from 'react';
import s from './Modal.module.scss';
import { IModal } from './types';

export const Modal: FC<PropsWithChildren<IModal>> = ({
  open,
  onClose,
  children,
}) => {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={clsx(s.modal, { [s.open]: open })} onClick={handleClick}>
      <div className={s.modalContent}>{children}</div>
    </div>
  );
};
