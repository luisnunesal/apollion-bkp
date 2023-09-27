import React from 'react';
import { MotionProps } from 'framer-motion';

import { LinkInterface } from '../../elements/Link/interface';
import { DefaultFlexInterface } from '../Flex';

export type NotificationTypes = 'block' | 'page';
export type NotificationBaseTypes = NotificationTypes | 'toastr';
export type NotificationVariants = 'primary' | 'success' | 'warning' | 'danger';
export type NotificationPagePositionTypes = 'top' | 'bottom';

export type NotificationInterface = {
  title?: string;
  message?: React.ReactNode;
  type?: NotificationTypes;
  icon?: React.ReactNode;
  variant?: NotificationVariants;
  visible?: boolean;
  pagePosition?: NotificationPagePositionTypes;
  onDismiss?: () => void;
  autoClose?: number;
  closable?: boolean;
  link?: {
    text: LinkInterface['text'];
    href?: LinkInterface['href'];
    to?: LinkInterface['to'];
  };
  action?: React.ReactNode | ((p: { close: () => void }) => React.ReactNode);
} & MotionProps &
  DefaultFlexInterface;

export type NotificationBaseInterface = Omit<NotificationInterface, 'type'> & {
  type?: NotificationBaseTypes;
};

export type NotificationType = {
  id: string;
} & NotificationInterface;

export type Action = {
  payload: NotificationType;
  type: 'ADD' | 'REMOVE';
};
