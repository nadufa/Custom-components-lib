import { ChangeEvent, InputHTMLAttributes } from 'react';

export interface ISwitch extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
}
