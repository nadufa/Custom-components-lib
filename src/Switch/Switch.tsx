import { ChangeEvent, FC, InputHTMLAttributes, PropsWithChildren } from 'react';
import s from './Switch.module.scss';

export interface ISwitch extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
}

export const Switch: FC<PropsWithChildren<ISwitch>> = ({
  id,
  checked,
  onChange,
  disabled,
  ...props
}) => {
  return (
    <>
      <label htmlFor={id} className={s.label}>
        <input
          type="checkbox"
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
