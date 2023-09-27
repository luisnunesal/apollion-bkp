import React, { createContext, useContext, useReducer } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence } from 'framer-motion';
import { nanoid } from 'nanoid';

import { BaseNotification } from './component';
import { Action, NotificationInterface, NotificationType } from './interface';

import { $documentBody } from '../../entities';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { AnimatedContainer, BaseContainer } from '../Base';

type NotesContextType = {
  notifications: NotificationType[];
  removeNotification: (id: string) => void;
  showNotification: (note: NotificationInterface) => void;
};

const NotesContext = createContext({} as NotesContextType);

function NotificationReducer(notes: Array<NotificationType>, { type, payload }: Action): Array<NotificationType> {
  switch (type) {
    case 'ADD': {
      return [payload, ...notes];
    }

    case 'REMOVE': {
      return notes.filter((note) => note.id !== payload.id);
    }

    default:
      return notes;
  }
}

export const NotificationsProvider: React.FC = (props) => {
  const [notifications, dispatch] = useReducer(NotificationReducer, []);

  const { isMobile } = useMediaQuery();

  const removeNotification = (id: string) => {
    dispatch({ type: 'REMOVE', payload: { id } });
  };

  const showNotification = (note: NotificationInterface) => {
    // default autoClose on desktop is 5 seconds
    // on mobile autoClose must be disabled by default
    const autoClose = isMobile ? undefined : 5;

    dispatch({ type: 'ADD', payload: { id: nanoid(), autoClose, ...note } });

    if (notifications.length >= 3) {
      const [lastNote] = notifications.slice(-1);

      setTimeout(() => removeNotification(lastNote.id), 0);
    }
  };

  return (
    <NotesContext.Provider value={{ notifications, removeNotification, showNotification }}>
      <>
        {props.children}
        <NotificationGroup />
      </>
    </NotesContext.Provider>
  );
};

export function useNotification() {
  const context = useContext(NotesContext);

  if (context === undefined) {
    throw new Error('cant use useNotification hook outside of <NotificationsProvider />');
  }

  return context;
}

export const NotificationGroup: React.FC = () => {
  const { notifications, removeNotification } = useNotification();

  return createPortal(
    <BaseContainer
      style={{
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
      }}
    >
      <AnimatePresence>
        {notifications.map(({ id, ...props }) => (
          <AnimatedContainer
            key={id}
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ scale: 0, opacity: 0, height: 0 }}
            style={{ minWidth: 300, maxWidth: '30vw', zIndex: 100 }}
          >
            <BaseContainer style={{ margin: '0.5rem' }}>
              <BaseNotification {...props} visible closable type="toastr" onDismiss={() => removeNotification(id)} />
            </BaseContainer>
          </AnimatedContainer>
        ))}
      </AnimatePresence>
    </BaseContainer>,
    $documentBody,
  );
};
