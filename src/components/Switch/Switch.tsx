import { FC } from 'react';
import s from './Switch.module.scss';
import { ISwitch } from './types';

export const Switch: FC<ISwitch> = ({ id, checked, onChange, disabled = false, ...props }) => {
  return (
    <>
      <label htmlFor={id} className={s.label}>
        <input
          type='checkbox'
          role='switch'
          aria-checked={checked}
          id={id}
          className={s.switch}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          {...props}
        />
        <span className={s.slider}></span>
      </label>
    </>
  );
};
