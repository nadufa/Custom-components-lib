import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import s from './TextField.module.scss';
import { ITextField } from './types';

export const TextField: FC<PropsWithChildren<ITextField>> = ({
  id,
  label,
  type = 'text',
  error = false,
  ...props
}) => {
  const inputClassName = classNames(s.textField, error ? s.error : '');
  const spanClassName = classNames(s.span, { [s.error]: error });

  return (
    <label htmlFor={id} className={s.label}>
      <input
        {...props}
        id={id}
        className={inputClassName}
        type={type}
        placeholder={label}
      />
      <span className={spanClassName}>{label}</span>
    </label>
  );
};
