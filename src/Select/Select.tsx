import { FC } from 'react';
import s from './Select.module.scss';

export interface ISelect {
  id: string;
  label: string;
  options: Array<string>;
  error: boolean;
}

export const Select: FC<ISelect> = ({ id, label, options, ...props }) => {
  return (
    <label htmlFor={id} className={s.label}>
      <select {...props} id={id} className={s.select} defaultValue="" required>
        <option disabled hidden value=""></option>
        {options.map((op) => (
          <option value={op}>{op}</option>
        ))}
      </select>
      <span className={s.span}>{label}</span>
    </label>
  );
};
