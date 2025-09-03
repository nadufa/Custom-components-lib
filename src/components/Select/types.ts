import { SelectHTMLAttributes } from 'react';

export interface ISelect extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label: string;
  options: Array<string>;
}
