import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';
import s from './Button.module.scss';
import { IButton } from './types';

export const Button: FC<PropsWithChildren<IButton>> = ({
  variant = 'contained',
  size,
  children,
  ...props
}) => {
  const className = clsx(s.button, s[variant], s[size]);

  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
};
