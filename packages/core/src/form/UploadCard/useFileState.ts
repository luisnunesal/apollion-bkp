import { useState } from 'react';

import { convertFileToFileItem, fileSize, filterFiles } from './helpers';
import { FileItem, UploadCardOnChangeValue, useFileStateOptions } from './interface';

export function useFileState(opts: useFileStateOptions) {
  const [files, setFiles] = useState<UploadCardOnChangeValue>({ files: [], type: null, payload: null });

  const setInitialFiles = (fileInput: File | File[]) => {
    const fileList = filterFiles(fileInput, opts.maxSize);
    const fileItems = convertFileToFileItem(fileList);

    const newFiles: UploadCardOnChangeValue = { files: fileItems, type: 'ADD_INITIAL_FILES' };
    opts.onChange?.(newFiles);
    setFiles(newFiles);
  };

  const removeFile = (id: string) => {
    const fileItem = { id } as FileItem;
    const removedFile = files.files.find((file) => file.id === fileItem.id);
    const result = files.files.filter((file) => file.id !== fileItem.id);
    const newFiles: UploadCardOnChangeValue = { files: result, type: 'REMOVE', payload: removedFile };

    opts.onChange?.(newFiles);
    setFiles(newFiles);
  };

  const removeAll = () => {
    const result: [] = [];
    const newFiles: UploadCardOnChangeValue = { files: result, type: 'REMOVE' };

    opts.onChange?.(newFiles);
    setFiles(newFiles);
  };

  const addFiles = (fileInput: File | File[]) => {
    const fileList = filterFiles(fileInput, opts.maxSize);
    const fileItems = convertFileToFileItem(fileList);

    if (opts.single) {
      const result = fileItems;
      const newFiles: UploadCardOnChangeValue = { files: result, type: 'REPLACE', payload: result[0] };

      opts.onChange?.(newFiles);
      setFiles(newFiles);
    }

    const result = [...files.files, ...fileItems];
    const newFiles: UploadCardOnChangeValue = { files: result, type: 'ADD', payload: fileItems[0] };

    opts.onChange?.(newFiles);
    setFiles(newFiles);
  };

  const updateFileProgress = (id: string, progress: number, success?: boolean, response?: any) => {
    const file = files.files.find((f) => f.id === id);

    const uploadResponse = () => ({
      uploadCompleted: success,
      uploadError: !success,
      uploadResponse: response || undefined,
    });

    const progressStatus = () => ({
      uploadLoaded: fileSize(progress),
      uploadPercentage: `${Math.min((progress / file.file.size) * 100, 100).toFixed(0)}%`,
    });

    const fileItem = {
      ...file,
      ...(progress !== undefined ? progressStatus() : {}),
      ...(success !== undefined ? uploadResponse() : {}),
    };

    const result = files.files.map((f) => (f.id === fileItem.id ? fileItem : f));
    const newFiles: UploadCardOnChangeValue = { files: result, type: 'UPDATE', payload: fileItem };

    opts.onChange?.(newFiles);
    setFiles(newFiles);
  };

  return { files, setInitialFiles, removeFile, removeAll, addFiles, updateFileProgress };
}
