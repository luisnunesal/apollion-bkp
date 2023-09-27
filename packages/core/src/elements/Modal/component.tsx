import React, { cloneElement, isValidElement } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence } from 'framer-motion';

import { ModalComponentProps, ModalDialogProps } from './interface';
import {
  ModalBody,
  ModalContainer,
  ModalContentStyle,
  ModalDialogStyle,
  ModalHeader,
  ModalIconStyle,
  ModalOverlayStyle,
} from './style';

import { Content, CustomScroll, Flex } from '../../containers';
import { $documentBody } from '../../entities';
import { useMediaQuery, useToggle } from '../../hooks';
import { LOGGER } from '../../utils';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';
import { Typography } from '../Typography';

export const ModalBaseComponent: React.FC<ModalDialogProps> = ({ isOpen, onDismiss, ...props }) => {
  if (!isOpen && !onDismiss) {
    throw new Error('You must provide "isOpen" and "onDismiss" if not using "trigger" prop.');
  }

  return createPortal(
    <AnimatePresence>
      {isOpen ? (
        <ModalContainer data-testid="modal-container">
          <ModalOverlayStyle
            absoluteFill
            bgColor="neutral.180"
            data-testid="modal-overlay"
            onClick={onDismiss}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
          />
          <ModalDialog onDismiss={onDismiss} {...props} />
        </ModalContainer>
      ) : null}
    </AnimatePresence>,
    $documentBody,
  );
};

export const ModalTriggerVariant: React.FC<ModalComponentProps> = ({
  defaultOpen,
  trigger,
  isOpen,
  onDismiss,
  onModalOpen,
  ...props
}) => {
  const { active, disable, enable, toggle } = useToggle(defaultOpen, { onActive: onModalOpen });

  if (isOpen || onDismiss) {
    LOGGER.warn('"isOpen" and "onDismiss" has no effect while using "trigger" prop');
  }

  const renderTrigger = () => {
    let triggerElement = null;

    if (typeof trigger === 'function') {
      triggerElement = trigger({ isOpen: active, open: enable });
    }

    if (isValidElement(trigger)) {
      triggerElement = cloneElement(trigger as React.ReactElement, { onClick: toggle });
    }

    if (triggerElement === null) {
      throw new Error('"trigger" prop is not a valid element');
    }

    return triggerElement;
  };

  return (
    <>
      {renderTrigger()}

      <ModalBaseComponent isOpen={active} onDismiss={disable} {...props} />
    </>
  );
};

const ModalDialog: React.FC<ModalDialogProps> = ({
  noCloseButton,
  confirmButton,
  cancelButton,
  confirmText,
  cancelText,
  onDismiss,
  onConfirm,
  children,
  tagline,
  variant,
  footer,
  title,
  size,
  icon,
}) => {
  const { isMobile } = useMediaQuery();

  const handleConfirm = () => {
    onConfirm({ close: onDismiss });
  };

  const renderCancelButton = () => {
    if (footer === 'full') {
      return null;
    }

    const cancelButtonProps = {
      onClick: onDismiss,
      fullWidth: isMobile,
      'data-testid': 'modal-cancel-button',
    };

    let element = (
      <Button variant="outlined" color="secondary" {...cancelButtonProps}>
        {cancelText}
      </Button>
    );

    if (typeof cancelButton === 'function') {
      return React.cloneElement(cancelButton({ close: onDismiss }), { fullWidth: isMobile });
    }

    if (cancelButton) {
      element = React.cloneElement(cancelButton as React.ReactElement, cancelButtonProps);
    }

    return element;
  };

  const renderConfirmButton = () => {
    const confirmButtonProps = {
      onClick: handleConfirm,
      fullWidth: footer === 'full' || isMobile,
      'data-testid': 'modal-confirm-button',
    };

    if (confirmButton) {
      return React.cloneElement(confirmButton as React.ReactElement, confirmButtonProps);
    }

    return (
      <Button color={variant} {...confirmButtonProps}>
        {confirmText}
      </Button>
    );
  };

  return (
    <ModalDialogStyle
      size={size}
      variant={variant}
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '200%', opacity: 0 }}
    >
      <ModalContentStyle gap="medium">
        <ModalHeader gap="xs">
          <Content
            opener={
              icon && (
                <ModalIconStyle justifyContent="center" alignItems="center" p="micro">
                  {icon}
                </ModalIconStyle>
              )
            }
            closer={
              !noCloseButton && (
                <IconButton
                  onClick={onDismiss}
                  data-testid="modal-close-button"
                  icon={<Icon name="times" />}
                  variant="linked"
                  color="secondary"
                  size="large"
                  alignSelf="start"
                />
              )
            }
          >
            {title && <Typography variant="h4" area="title" color="neutral.170" text={title} />}
          </Content>

          {tagline && (
            <Typography variant="meta" color="secondary.dark" area="tagline">
              {tagline}
            </Typography>
          )}
        </ModalHeader>

        <ModalBody py="medium">
          <CustomScroll>{children}</CustomScroll>
        </ModalBody>

        {onConfirm && (
          <Flex
            flexDirection={isMobile ? 'column-reverse' : 'row'}
            justifyContent={footer === 'expanded' ? 'between' : 'end'}
            gap="medium"
          >
            {renderCancelButton()}

            {renderConfirmButton()}
          </Flex>
        )}
      </ModalContentStyle>
    </ModalDialogStyle>
  );
};

export const ModalComponent: React.FC<ModalComponentProps> = (props) => {
  if (props?.trigger) {
    return <ModalTriggerVariant {...props} />;
  }

  return <ModalBaseComponent {...props} />;
};

ModalComponent.defaultProps = {
  noCloseButton: false,
  cancelText: 'Cancelar',
  confirmText: 'Confirmar',
  variant: 'primary',
  footer: 'right',
};
