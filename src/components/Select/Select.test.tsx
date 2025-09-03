import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Select } from './Select';
import { ISelect } from './types';

describe('Select Component', () => {
  const defaultProps: ISelect = {
    id: 'test-select',
    label: 'Test Label',
    options: ['Option 1', 'Option 2', 'Option 3'],
  };

  test('renders select with correct id', () => {
    render(<Select {...defaultProps} />);
    const select = screen.getByRole('combobox');
    expect(select).toHaveAttribute('id', 'test-select');
  });

  test('has correct label association with id', () => {
    render(<Select {...defaultProps} />);
    const label = screen.getByText('Test Label').closest('label');
    expect(label).toHaveAttribute('for', 'test-select');
  });

  test('displays correct label text', () => {
    render(<Select {...defaultProps} />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  test('options have correct values and text', () => {
    render(<Select {...defaultProps} />);

    expect(screen.getByText('Option 1').closest('option')).toHaveAttribute('value', 'Option 1');
    expect(screen.getByText('Option 2').closest('option')).toHaveAttribute('value', 'Option 2');
    expect(screen.getByText('Option 3').closest('option')).toHaveAttribute('value', 'Option 3');
  });

  test('is required by default', () => {
    render(<Select {...defaultProps} />);
    const select = screen.getByRole('combobox');
    expect(select).toBeRequired();
  });

  test('has correct aria-labelledby', () => {
    render(<Select {...defaultProps} />);
    const select = screen.getByRole('combobox');
    expect(select).toHaveAttribute('aria-labelledby', 'test-select-label');
  });

  test('selects option correctly', async () => {
    const user = userEvent.setup();
    render(<Select {...defaultProps} />);
    const select = screen.getByRole('combobox');

    await user.selectOptions(select, 'Option 2');
    expect(select).toHaveValue('Option 2');
  });

  test('handles onChange event', async () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();

    render(<Select {...defaultProps} onChange={handleChange} />);
    const select = screen.getByRole('combobox');

    await user.selectOptions(select, 'Option 3');
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
