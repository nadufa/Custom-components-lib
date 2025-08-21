interface IButtonProps {
  variant: 'text' | 'contained' | 'outlined';
  size: 'small' | 'medium' | 'large';
}

export const Button = ({ variant, size, ...props }: IButtonProps) => {
  return <button {...props}>My button</button>;
};
