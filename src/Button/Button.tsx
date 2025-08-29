import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import s from './Button.module.scss';

type ButtonVariantType = 'text' | 'contained' | 'outlined';
type ButtonSizeType = 'small' | 'medium' | 'large';

export interface IButton {
  variant: ButtonVariantType;
  size: ButtonSizeType;
}

export const Button: FC<PropsWithChildren<IButton>> = ({
  variant = 'contained',
  size,
  children,
  ...props
}) => {
  const className = classNames(s.button, s[variant], s[size]);

  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
};
