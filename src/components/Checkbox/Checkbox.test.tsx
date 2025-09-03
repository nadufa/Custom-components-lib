import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from './Checkbox';
import { ICheckbox } from './types';

jest.mock('./Checkbox.module.scss', () => ({
  label: 'label',
  checkbox: 'checkbox',
  checkmark: 'checkmark',
}));

describe('Checkbox Component', () => {
  const defaultProps: ICheckbox = {
    id: 'test-checkbox',
    label: 'Test Label',
    indeterminate: false,
  };

  test('renders checkbox with correct id', () => {
    render(<Checkbox {...defaultProps} />);
    const checkbox = screen.getByLabelText('Test Label');
    expect(checkbox).toHaveAttribute('id', 'test-checkbox');
  });

  test('has correct label association with id', () => {
    render(<Checkbox {...defaultProps} />);
    const checkbox = screen.getByLabelText('Test Label');
    const label = checkbox.closest('label');
    expect(label).toHaveAttribute('for', 'test-checkbox');
  });

  test('displays correct label text', () => {
    render(<Checkbox {...defaultProps} />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  test('has correct input type', () => {
    render(<Checkbox {...defaultProps} />);
    const checkbox = screen.getByLabelText('Test Label');
    expect(checkbox).toHaveAttribute('type', 'checkbox');
  });

  test('does not have aria-checked when indeterminate is false', () => {
    render(<Checkbox {...defaultProps} indeterminate={false} />);
    const checkbox = screen.getByLabelText('Test Label');
    expect(checkbox).not.toHaveAttribute('aria-checked');
  });

  test('sets aria-checked to mixed when indeterminate is true', () => {
    render(<Checkbox {...defaultProps} indeterminate={true} />);
    const checkbox = screen.getByLabelText('Test Label');
    expect(checkbox).toHaveAttribute('aria-checked', 'mixed');
  });

  test('handles checked state change', async () => {
    const user = userEvent.setup();
    render(<Checkbox {...defaultProps} />);
    const checkbox = screen.getByLabelText('Test Label');

    await user.click(checkbox);
    expect(checkbox).toBeChecked();

    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  test('passes additional input attributes', () => {
    render(<Checkbox {...defaultProps} required disabled checked />);
    const checkbox = screen.getByLabelText('Test Label');
    expect(checkbox).toBeRequired();
    expect(checkbox).toBeDisabled();
    expect(checkbox).toBeChecked();
  });

  test('handles onChange event', async () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();

    render(<Checkbox {...defaultProps} onChange={handleChange} />);
    const checkbox = screen.getByLabelText('Test Label');

    await user.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('maintains indeterminate state with other props', () => {
    render(<Checkbox {...defaultProps} indeterminate={true} checked={true} disabled={true} />);
    const checkbox = screen.getByLabelText('Test Label');
    expect(checkbox).toHaveAttribute('aria-checked', 'mixed');
    expect(checkbox).toBeChecked();
    expect(checkbox).toBeDisabled();
  });
});
