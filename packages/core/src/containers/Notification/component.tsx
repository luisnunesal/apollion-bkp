import React from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence } from 'framer-motion';

import { NotificationBaseInterface, NotificationInterface } from './interface';
import { NotificationIconStyle, NotificationProgress, ProgressContainer, WrapperNotificationStyle } from './style';

import { Icon } from '../../elements/Icon';
import { IconButton } from '../../elements/IconButton';
import { Link } from '../../elements/Link';
import { Text } from '../../elements/Typography';
import { $documentBody } from '../../entities';
import { useMediaQuery } from '../../hooks';
import { Content } from '../Content';

// BASE NOTIFICATION
export const BaseNotification = (props: NotificationBaseInterface) => {
  const { variant, type, icon, link, action, autoClose, onDismiss, visible, closable, message, ...rest } = props;
  const { isMobile } = useMediaQuery();

  const renderActionButton = () => {
    let actionButton = action;

    if (typeof action === 'function') {
      actionButton = action({ close: onDismiss });
    }

    return actionButton
      ? React.cloneElement(actionButton as React.ReactElement, {
          color: variant,
          alignSelf: 'center',
          justifySelf: 'center',
        })
      : null;
  };

  const renderMessage = () =>
    typeof message === 'string' ? <Text text={message} variant="p" fontSize="xs" /> : message;

  return visible ? (
    <WrapperNotificationStyle
      p="medium"
      pr={9}
      round={isMobile ? 0 : 'xs'}
      borderWidth={isMobile ? 'none' : 'thin'}
      borderStyle="solid"
      variant={variant}
      data-testid={`notification-${type}`}
      {...rest}
    >
      {autoClose && (
        <ProgressContainer>
          <NotificationProgress
            round="micro"
            style={{ '--time': autoClose } as React.CSSProperties}
            onAnimationEnd={onDismiss}
          />
        </ProgressContainer>
      )}

      <Content
        contentGap="medium"
        opener={
          icon && (
            <NotificationIconStyle pt="xs" alignSelf="start">
              {icon}
            </NotificationIconStyle>
          )
        }
        closer={renderActionButton()}
      >
        {props.title && <Text text={props.title} variant="h3" fontSize="small" />}

        {renderMessage()}

        {link && <Link {...link} target="_blank" />}
      </Content>

      {closable && (
        <IconButton
          p="xs"
          borderWidth="none"
          icon={<Icon size="small" name="times" />}
          variant="linked"
          onClick={onDismiss}
          alignSelf="start"
          position="absolute"
          right="0.5rem"
          top="0.5rem"
        />
      )}
    </WrapperNotificationStyle>
  ) : null;
};

// PAGE NOTIFICATION
export const PageNotification: React.FC<NotificationInterface> = (props) => {
  const { isMobile } = useMediaQuery();

  const pagePosition = props.pagePosition === 'top' ? { top: 0 } : { bottom: 0 };

  return createPortal(
    <AnimatePresence>
      {props.visible ? (
        <BaseNotification
          {...props}
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          style={{ ...pagePosition, zIndex: 1000, margin: isMobile ? 0 : '1rem', position: 'fixed', right: 0, left: 0 }}
        />
      ) : null}
    </AnimatePresence>,
    $documentBody,
  );
};

export const NotificationComponent: React.FC<NotificationInterface> = (props) => {
  if (props.type === 'page') {
    return <PageNotification {...props} />;
  }

  return <BaseNotification {...props} />;
};

NotificationComponent.defaultProps = {
  type: 'block',
  variant: 'primary',
  visible: true,
  closable: true,
  autoClose: null,
  message: null,
  action: null,
  icon: null,
};
