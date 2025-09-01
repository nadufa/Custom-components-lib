type ButtonVariantType = 'text' | 'contained' | 'outlined';
type ButtonSizeType = 'small' | 'medium' | 'large';

export interface IButton {
  variant: ButtonVariantType;
  size: ButtonSizeType;
}
