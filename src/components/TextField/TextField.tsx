import clsx from 'clsx';
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
  const inputClassName = clsx(s.textField, error ? s.error : '');
  const spanClassName = clsx(s.span, { [s.error]: error });

  return (
    <label htmlFor={id} className={s.label}>
      <input {...props} id={id} className={inputClassName} type={type} placeholder={label} />
      <span className={spanClassName}>{label}</span>
    </label>
  );
};
