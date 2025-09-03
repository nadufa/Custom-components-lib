import { FC, PropsWithChildren } from 'react';
import s from './Switch.module.scss';
import { ISwitch } from './types';

export const Switch: FC<PropsWithChildren<ISwitch>> = ({
  id,
  checked,
  onChange,
  disabled = false,
  ...props
}) => {
  return (
    <>
      <label htmlFor={id} className={s.label}>
        <input
          type='checkbox'
          id={id}
          name={id}
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
