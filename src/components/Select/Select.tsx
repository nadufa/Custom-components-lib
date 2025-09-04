import { FC } from 'react';
import s from './Select.module.scss';
import { ISelect } from './types';

export const Select: FC<ISelect> = ({ id, label, options, ...props }) => {
  return (
    <label htmlFor={id} className={s.label}>
      <select
        id={id}
        className={s.select}
        defaultValue=''
        aria-labelledby={`${id}-label`}
        required
        {...props}
      >
        <option disabled hidden value=''></option>
        {options?.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
      <span className={s.span}>{label}</span>
    </label>
  );
};
