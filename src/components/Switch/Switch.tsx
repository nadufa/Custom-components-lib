import { ChangeEvent, FC, PropsWithChildren, useState } from 'react';
import s from './Switch.module.scss';
import { ISwitch } from './types';

export const Switch: FC<PropsWithChildren<ISwitch>> = ({
  id,
  checked,
  onChange,
  disabled,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    onChange?.(e);
  };

  return (
    <>
      <label htmlFor={id} className={s.label}>
        <input
          type="checkbox"
          id={id}
          name={id}
          className={s.switch}
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          {...props}
        />
        <span className={s.slider}></span>
      </label>
    </>
  );
};
