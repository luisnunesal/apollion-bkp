import { useCallback, useEffect } from 'react';

import { copy } from './helper';

import { useToggle } from '../useToggle';

/**
 * Hook to copy content to clipboard
 */
export function useClipboard(text: string, timeout = 2000) {
  const { active: hasCopied, enable, disable } = useToggle(false);

  const onCopy = useCallback(() => {
    copy(text, {
      debug: true,
      onCopy: enable,
      onFailed: disable,
    });
  }, [text]);

  useEffect(() => {
    let id: any;

    if (hasCopied) {
      id = setTimeout(disable, timeout);
    }

    return () => clearTimeout(id);
  }, [timeout, hasCopied]);

  return { onCopy, hasCopied };
}
