import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal } from './Modal';
import { IModal } from './types';

jest.mock('./Modal.module.scss', () => ({
  modal: 'modal',
  open: 'open',
  modalContent: 'modalContent',
}));

describe('Modal Component', () => {
  const defaultProps: IModal = {
    open: true,
    onClose: jest.fn(),
  };

  const modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  document.body.appendChild(modalRoot);

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    document.body.removeChild(modalRoot);
  });

  test('does not render when open is false', () => {
    render(
      <Modal {...defaultProps} open={false}>
        Test Content
      </Modal>
    );
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  test('renders when open is true', () => {
    render(
      <Modal {...defaultProps} open={true}>
        Test Content
      </Modal>
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  test('renders children content', () => {
    render(
      <Modal {...defaultProps} open={true}>
        <div data-testid='modal-content'>Test Content</div>
      </Modal>
    );
    expect(screen.getByTestId('modal-content')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  test('applies modal classes when open', () => {
    render(
      <Modal {...defaultProps} open={true}>
        Test Content
      </Modal>
    );
    const modal = screen.getByRole('dialog');
    expect(modal).toHaveClass('modal open');
  });

  test('calls onClose when clicking on backdrop', () => {
    render(
      <Modal {...defaultProps} open={true}>
        Test Content
      </Modal>
    );
    const modal = screen.getByRole('dialog');
    fireEvent.click(modal);
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  test('does not call onClose when clicking on modal content', () => {
    render(
      <Modal {...defaultProps} open={true}>
        <div data-testid='content'>Test Content</div>
      </Modal>
    );
    const content = screen.getByTestId('content');
    fireEvent.click(content);
    expect(defaultProps.onClose).not.toHaveBeenCalled();
  });

  test('calls onClose when Escape key is pressed', async () => {
    render(
      <Modal {...defaultProps} open={true}>
        Test Content
      </Modal>
    );
    await userEvent.keyboard('{Escape}');
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  test('does not call onClose when other keys are pressed', async () => {
    render(
      <Modal {...defaultProps} open={true}>
        Test Content
      </Modal>
    );
    await userEvent.keyboard('{Enter}');
    expect(defaultProps.onClose).not.toHaveBeenCalled();
  });
});
