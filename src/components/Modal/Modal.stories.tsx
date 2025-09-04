import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';
import { fn } from 'storybook/test';
import { Button, Modal } from '..';

const meta = {
  title: 'Example/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: false,
    onClose: fn(),
    children: (
      <>
        <h3 style={{ marginTop: 0 }}>Modal header</h3>
        <p style={{ marginBottom: 0 }}>This is modal content</p>
      </>
    ),
  },
  render: ({ open, onClose, children }) => {
    const [isOpen, setIsOpen] = useState(open);

    const onCloseHandler = () => {
      setIsOpen(false);
      onClose();
    };

    return (
      <>
        <Button onClick={() => setIsOpen(true)} size='medium' variant='contained'>
          Open modal
        </Button>
        <Modal open={isOpen} onClose={onCloseHandler}>
          {children}
        </Modal>
      </>
    );
  },
};

export const WithText: Story = {
  args: {
    open: false,
    onClose: fn(),
    children: (
      <>
        <h3 style={{ marginTop: 0 }}>The Wonderful World of Cats</h3>
        <p style={{ marginBottom: 0 }}>
          Cats have captivated human hearts for centuries with their mysterious demeanor and
          graceful movements. These enigmatic creatures possess a unique blend of independence and
          affection that continues to puzzle and delight their human companions. From ancient
          Egyptian temples to modern city apartments, cats have maintained their status as both
          revered deities and beloved pets. Fun fact: A cats purr vibrates at a frequency of 25–150
          Hz, which is the same frequency used in therapeutic healing for bone growth and pain
          relief!
        </p>
      </>
    ),
  },
  render: ({ open, onClose, children }) => {
    const [isOpen, setIsOpen] = useState(open);

    const onCloseHandler = () => {
      setIsOpen(false);
      onClose();
    };

    return (
      <>
        <Button onClick={() => setIsOpen(true)} size='medium' variant='contained'>
          Open modal
        </Button>
        <Modal open={isOpen} onClose={onCloseHandler}>
          {children}
        </Modal>
      </>
    );
  },
};
