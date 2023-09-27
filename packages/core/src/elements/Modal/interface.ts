import React from 'react';

import { NotificationVariants } from '../../containers';
import { Theme } from '../../themes';

type ModalSizeType = 'small' | 'base' | 'medium' | 'large';

export type ModalDialogProps = {
  icon?: React.ReactNode;
  isOpen?: boolean;
  onDismiss?: () => void;
  onConfirm?: (props: { close: () => void }) => void;
  confirmButton?: React.ReactNode;
  cancelButton?: React.ReactNode | ((p: { close: () => void }) => React.ReactNode);
  confirmText?: string;
  cancelText?: string;
  footer?: 'expanded' | 'right' | 'full';
  tagline?: string;
  children?: React.ReactNode;
  variant?: NotificationVariants;
  size?: ModalSizeType;
  title?: string;
  noCloseButton?: boolean;
  onModalOpen?: () => void;
};

export type ModalComponentProps = {
  defaultOpen?: boolean;
  trigger?: React.ReactNode | ((props: { isOpen: boolean; open: () => void }) => React.ReactNode);
} & ModalDialogProps;

export type ModalStyleProps = {
  theme: Theme;
} & ModalComponentProps;
