import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';
import { IButton } from './types';

jest.mock('./Button.module.scss', () => ({
  button: 'button',
  contained: 'contained',
  outlined: 'outlined',
  text: 'text',
  small: 'small',
  medium: 'medium',
  large: 'large',
}));

describe('Button Component', () => {
  const defaultProps: IButton = {
    variant: 'contained',
    size: 'medium',
    children: 'Test Button',
  };

  test('renders button with children', () => {
    render(<Button {...defaultProps} />);
    const button = screen.getByRole('button', { name: /test button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Test Button');
  });

  describe('variant prop', () => {
    test('applies contained variant class', () => {
      render(<Button {...defaultProps} variant='contained' />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('button contained');
    });

    test('applies text variant class', () => {
      render(<Button {...defaultProps} variant='text' />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('button text');
    });

    test('applies outlined variant class', () => {
      render(<Button {...defaultProps} variant='outlined' />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('button outlined');
    });
  });

  describe('size prop', () => {
    test('applies small size class', () => {
      render(<Button {...defaultProps} size='small' />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('button small');
    });

    test('applies medium size class', () => {
      render(<Button {...defaultProps} size='medium' />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('button medium');
    });

    test('applies large size class', () => {
      render(<Button {...defaultProps} size='large' />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('button large');
    });
  });

  describe('pressed prop', () => {
    test('sets aria-pressed to true when pressed is true', () => {
      render(<Button {...defaultProps} pressed={true} />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-pressed', 'true');
    });

    test('sets aria-pressed to false when pressed is false', () => {
      render(<Button {...defaultProps} pressed={false} />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-pressed', 'false');
    });

    test('does not have aria-pressed when pressed is undefined', () => {
      render(<Button {...defaultProps} />);
      const button = screen.getByRole('button');
      expect(button).not.toHaveAttribute('aria-pressed');
    });
  });

  describe('busy prop', () => {
    test('sets aria-busy to true when busy is true', () => {
      render(<Button {...defaultProps} busy={true} />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-busy', 'true');
    });

    test('sets aria-busy to false when busy is false', () => {
      render(<Button {...defaultProps} busy={false} />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-busy', 'false');
    });

    test('does not have aria-busy when busy is undefined', () => {
      render(<Button {...defaultProps} />);
      const button = screen.getByRole('button');
      expect(button).not.toHaveAttribute('aria-busy');
    });
  });

  describe('ariaLabel prop', () => {
    test('sets aria-label when provided', () => {
      render(<Button {...defaultProps} ariaLabel='Custom label' />);
      const button = screen.getByRole('button', { name: 'Custom label' });
      expect(button).toHaveAttribute('aria-label', 'Custom label');
    });

    test('uses children as accessible name when ariaLabel is not provided', () => {
      render(<Button {...defaultProps} />);
      const button = screen.getByRole('button', { name: 'Test Button' });
      expect(button).toBeInTheDocument();
    });
  });

  describe('event handlers', () => {
    test('calls onClick when clicked', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();

      render(<Button {...defaultProps} onClick={handleClick} />);
      const button = screen.getByRole('button');

      await user.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('calls onMouseOver when hovered', async () => {
      const user = userEvent.setup();
      const handleMouseOver = jest.fn();

      render(<Button {...defaultProps} onMouseOver={handleMouseOver} />);
      const button = screen.getByRole('button');

      await user.hover(button);
      expect(handleMouseOver).toHaveBeenCalledTimes(1);
    });

    test('calls onFocus when focused', async () => {
      const user = userEvent.setup();
      const handleFocus = jest.fn();

      render(<Button {...defaultProps} onFocus={handleFocus} />);
      screen.getByRole('button');

      await user.tab();
      expect(handleFocus).toHaveBeenCalledTimes(1);
    });
  });

  describe('children prop', () => {
    test('renders string children', () => {
      render(<Button {...defaultProps}>Click Me</Button>);
      const button = screen.getByRole('button', { name: 'Click Me' });
      expect(button).toBeInTheDocument();
    });
  });

  describe('prop combinations', () => {
    test('combines variant, size, and disabled props correctly', () => {
      render(
        <Button variant='outlined' size='large' disabled pressed={true}>
          Combined Test
        </Button>
      );

      const button = screen.getByRole('button');

      expect(button).toHaveClass('outlined large');
      expect(button).toBeDisabled();
      expect(button).toHaveAttribute('aria-pressed', 'true');
    });

    test('combines busy state with other props', () => {
      render(
        <Button variant='text' size='small' busy={true} ariaLabel='Loading button'>
          Loading...
        </Button>
      );

      const button = screen.getByRole('button', { name: 'Loading button' });

      expect(button).toHaveClass('text small');
      expect(button).toHaveAttribute('aria-busy', 'true');
      expect(button).toHaveAttribute('aria-label', 'Loading button');
    });
  });
});
