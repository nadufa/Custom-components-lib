import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextField } from './TextField';
import { ITextField } from './types';

jest.mock('./TextField.module.scss', () => ({
  label: 'label',
  textField: 'textField',
  span: 'span',
  error: 'error',
}));

describe('TextField Component', () => {
  const defaultProps: ITextField = {
    id: 'test-textfield',
    label: 'Test Label',
    type: 'text',
    error: false,
  };

  test('renders text field with correct id', () => {
    render(<TextField {...defaultProps} />);
    const input = screen.getByLabelText('Test Label');
    expect(input).toHaveAttribute('id', 'test-textfield');
  });

  test('has correct label association with id', () => {
    render(<TextField {...defaultProps} />);
    const input = screen.getByLabelText('Test Label');
    const label = input.closest('label');
    expect(label).toHaveAttribute('for', 'test-textfield');
  });

  test('displays correct label text', () => {
    render(<TextField {...defaultProps} />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  test('sets default type to text', () => {
    render(<TextField {...defaultProps} />);
    const input = screen.getByLabelText('Test Label');
    expect(input).toHaveAttribute('type', 'text');
  });

  test('applies custom type attribute', () => {
    render(<TextField {...defaultProps} type='email' />);
    const input = screen.getByLabelText('Test Label');
    expect(input).toHaveAttribute('type', 'email');
  });

  test('applies another custom type attribute', () => {
    render(<TextField {...defaultProps} type='password' />);
    const input = screen.getByLabelText('Test Label');
    expect(input).toHaveAttribute('type', 'password');
  });

  test('sets placeholder to label text', () => {
    render(<TextField {...defaultProps} />);
    const input = screen.getByLabelText('Test Label');
    expect(input).toHaveAttribute('placeholder', 'Test Label');
  });

  test('does not have aria-invalid when error is false', () => {
    render(<TextField {...defaultProps} error={false} />);
    const input = screen.getByLabelText('Test Label');
    expect(input).not.toHaveAttribute('aria-invalid');
  });

  test('sets aria-invalid to true when error is true', () => {
    render(<TextField {...defaultProps} error={true} />);
    const input = screen.getByLabelText('Test Label');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  test('applies error class to input when error is true', () => {
    render(<TextField {...defaultProps} error={true} />);
    const input = screen.getByLabelText('Test Label');
    expect(input).toHaveClass('textField error');
  });

  test('applies error class to span when error is true', () => {
    render(<TextField {...defaultProps} error={true} />);
    const span = screen.getByText('Test Label');
    expect(span).toHaveClass('span error');
  });

  test('does not apply error class to input when error is false', () => {
    render(<TextField {...defaultProps} error={false} />);
    const input = screen.getByLabelText('Test Label');
    expect(input).toHaveClass('textField');
    expect(input).not.toHaveClass('error');
  });

  test('does not apply error class to span when error is false', () => {
    render(<TextField {...defaultProps} error={false} />);
    const span = screen.getByText('Test Label');
    expect(span).toHaveClass('span');
    expect(span).not.toHaveClass('error');
  });

  test('handles value change', async () => {
    const user = userEvent.setup();
    render(<TextField {...defaultProps} />);
    const input = screen.getByLabelText('Test Label');

    await user.type(input, 'test value');
    expect(input).toHaveValue('test value');
  });
});
