import { FC } from 'react';
import s from './Select.module.scss';
import { ISelect } from './types';

export const Select: FC<ISelect> = ({ id, label, options, ...props }) => {
  return (
    <label htmlFor={id} className={s.label}>
      <select
        {...props}
        id={id}
        className={s.select}
        defaultValue=''
        required
        aria-labelledby={`${id}-label`}
      >
        <option disabled hidden value=''></option>
        {options.map((op, index) => (
          <option value={op} key={index}>
            {op}
          </option>
        ))}
      </select>
      <span className={s.span}>{label}</span>
    </label>
  );
};
