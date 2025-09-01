import { FC, PropsWithChildren } from 'react';
import s from './Checkbox.module.scss';
import { ICheckbox } from './types';

export const Checkbox: FC<PropsWithChildren<ICheckbox>> = ({
  id,
  label,
  ...props
}) => {
  return (
    <>
      <label htmlFor={id} className={s.label}>
        <input
          type="checkbox"
          id={id}
          name={id}
          className={s.checkbox}
          {...props}
        />
        {label}
        <span className={s.checkmark}></span>
      </label>
    </>
  );
};
