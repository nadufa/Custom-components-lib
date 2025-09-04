import { FC, PropsWithChildren } from 'react';
import s from './Checkbox.module.scss';
import { ICheckbox } from './types';

export const Checkbox: FC<PropsWithChildren<ICheckbox>> = ({
  id,
  label,
  indeterminate,
  ...props
}) => {
  return (
    <>
      <label htmlFor={id} className={s.label}>
        <input
          id={id}
          type='checkbox'
          className={s.checkbox}
          aria-checked={indeterminate ? 'mixed' : undefined}
          {...props}
        />
        {label}
        <span className={s.checkmark}></span>
      </label>
    </>
  );
};
