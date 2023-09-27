import { useCallback } from 'react';

import { acceptableFile } from './helper';
import { useDragHookInterface } from './interface';

import { useToggle } from '../useToggle';

export const useDrag: useDragHookInterface = (options: {
  accept?: string[];
  single?: boolean;
  onDragOver?: () => void;
  onDragLeave?: () => void;
  onDrop?: (files: File[]) => void;
}) => {
  const { active: isDragging, enable, disable } = useToggle();

  const onDragOver = useCallback(
    (e: React.DragEvent<HTMLDivElement>): void => {
      e.stopPropagation();
      e.preventDefault();

      if (e.dataTransfer && !isDragging) {
        e.dataTransfer.dropEffect = 'copy';

        if (options.onDragOver) {
          options?.onDragOver();
        }

        enable();
      }
    },
    [isDragging],
  );

  const onDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>): void => {
    e.stopPropagation();
    e.preventDefault();

    if (options.onDragLeave) {
      options?.onDragLeave();
    }

    disable();
  }, []);

  const onDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>): void => {
      e.stopPropagation();
      e.preventDefault();

      const files = e.dataTransfer && e.dataTransfer.files;

      if (files && Array.isArray(options.accept)) {
        const acceptedFiles = Array.from(files).filter((file) => acceptableFile(file, options.accept));

        if (options.single && acceptedFiles.length > 1) {
          options?.onDrop([acceptedFiles[0]]);
        } else {
          options?.onDrop(acceptedFiles);
        }
      }

      disable();
    },
    [options],
  );

  return { isDragging, events: { onDragOver, onDragLeave, onDrop, onDragEnd: onDragLeave } };
};
