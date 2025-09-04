import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Switch } from './Switch';
import { ISwitch } from './types';

jest.mock('./Switch.module.scss', () => ({
  label: 'label',
  switch: 'switch',
  slider: 'slider',
}));

describe('Switch Component', () => {
  const defaultProps: ISwitch = {
    id: 'test-switch',
    checked: false,
    onChange: jest.fn(),
    disabled: false,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders switch with correct id', () => {
    render(<Switch {...defaultProps} />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveAttribute('id', 'test-switch');
  });

  test('has correct label association with id', () => {
    render(<Switch {...defaultProps} />);
    const switchElement = screen.getByRole('switch');
    const label = switchElement.closest('label');
    expect(label).toHaveAttribute('for', 'test-switch');
  });

  test('sets checked state when checked is true', () => {
    render(<Switch {...defaultProps} checked={true} />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toBeChecked();
    expect(switchElement).toHaveAttribute('aria-checked', 'true');
  });

  test('sets unchecked state when checked is false', () => {
    render(<Switch {...defaultProps} checked={false} />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).not.toBeChecked();
    expect(switchElement).toHaveAttribute('aria-checked', 'false');
  });

  test('calls onChange when toggled', async () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();

    render(<Switch {...defaultProps} onChange={handleChange} />);
    const switchElement = screen.getByRole('switch');

    await user.click(switchElement);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('is not disabled when disabled is false', () => {
    render(<Switch {...defaultProps} disabled={false} />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).not.toBeDisabled();
  });

  test('is disabled when disabled is true', () => {
    render(<Switch {...defaultProps} disabled={true} />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toBeDisabled();
  });

  test('does not call onChange when disabled', async () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();

    render(<Switch {...defaultProps} disabled={true} onChange={handleChange} />);
    const switchElement = screen.getByRole('switch');

    await user.click(switchElement);
    expect(handleChange).not.toHaveBeenCalled();
  });

  test('has correct input type', () => {
    render(<Switch {...defaultProps} />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveAttribute('type', 'checkbox');
  });
});
