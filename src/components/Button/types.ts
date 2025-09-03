import { ButtonHTMLAttributes } from 'react';

type ButtonVariantType = 'text' | 'contained' | 'outlined';
type ButtonSizeType = 'small' | 'medium' | 'large';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariantType;
  size: ButtonSizeType;
  pressed?: boolean;
  busy?: boolean;
  ariaLabel?: string;
}
