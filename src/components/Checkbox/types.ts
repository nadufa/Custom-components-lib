import { InputHTMLAttributes } from 'react';

export interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  indeterminate?: boolean;
}
