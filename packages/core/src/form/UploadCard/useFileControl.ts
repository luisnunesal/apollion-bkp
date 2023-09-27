import { useCallback, useState } from 'react';

import { FileItem, UploadCardOnChangeValue } from './interface';

export const useFileControl = () => {
  const [removedFiles, setRemovedFiles] = useState<FileItem[]>([]);
  const [addedFiles, setAddedFiles] = useState<FileItem[]>([]);

  const onFilesChange = useCallback((value: UploadCardOnChangeValue) => {
    if (!value.payload) {
      return;
    }

    const payload = value.payload as FileItem;
    if (value.type === 'ADD') {
      setAddedFiles((old) => [...old, payload]);
    } else if (value.type === 'REMOVE') {
      setRemovedFiles((old) => [...old, payload]);
    }
  }, []);

  const clear = (item: 'removedFiles' | 'addedFiles') => {
    if (item === 'removedFiles') {
      setRemovedFiles([]);
    }

    if (item === 'addedFiles') {
      setRemovedFiles([]);
    }
  };

  return { onFilesChange, removedFiles, addedFiles, clear };
};
