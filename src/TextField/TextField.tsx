import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import s from './TextField.module.scss';

export interface ITextField {
  id: string;
  label: string;
  type: string;
  error: boolean;
}

export const TextField: FC<PropsWithChildren<ITextField>> = ({
  id,
  label,
  type = 'text',
  error = false,
  children,
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
      {children}
      <span className={spanClassName}>Name</span>
    </label>
  );
};
