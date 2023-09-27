import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react';

import { uploadFile } from './helpers';
import { UploadCardProps, UploadCardRef, UploadFileRequestConfig } from './interface';
import { useFileState } from './useFileState';
import { UploadCardCompact, UploadCardRegular } from './variant';

import { Button } from '../../elements';
import { useDrag, useFileDialog, useToggle } from '../../hooks';

export const UploadCard = forwardRef<UploadCardRef, UploadCardProps>((props, ref) => {
  const {
    accept,
    maxSize,
    singleFile,
    uploadConfig,
    onUnsupportedFile,
    customButton,
    style,
    className,
    onChange,
    initialFiles,
  } = props;

  const [initialFilesFilled, setInitialFilesFilled] = useState(false);
  const { active: isSubmitting, enable: startedSubmitting, disable: endedSubmitting } = useToggle();

  const { files, setInitialFiles, addFiles, removeFile, removeAll, updateFileProgress } = useFileState({
    single: singleFile,
    maxSize,
    onChange,
  });

  const { openFileDialog } = useFileDialog({ accept, single: singleFile, onFilesSelect: addFiles, onUnsupportedFile });

  const { isDragging, events } = useDrag({
    accept,
    single: singleFile,
    onDrop: addFiles,
  });

  useEffect(() => {
    const hasInitialFiles = Array.isArray(initialFiles) ? initialFiles.length > 0 : !!initialFiles;

    if (!initialFilesFilled && !files.files.length && hasInitialFiles) {
      setInitialFilesFilled(true);
      setInitialFiles(initialFiles);
    }
  }, [initialFilesFilled, setInitialFilesFilled, initialFiles, setInitialFiles, files.files]);

  const submitFiles = useCallback(
    async (config?: UploadFileRequestConfig) => {
      if (files.files.length) {
        startedSubmitting();

        const uploadPromises = files.files.map(({ id, file }) =>
          uploadFile({
            file,
            fieldName: config.formDataFileKey || 'file',
            requestConfig: { ...uploadConfig, ...config },
            onProgress: (progress, successful, response) => {
              updateFileProgress(id, progress, successful, response);
            },
          }),
        );

        const responses = await Promise.all(uploadPromises);

        endedSubmitting();

        return responses;
      }

      return [];
    },
    [files.files, uploadConfig, startedSubmitting, updateFileProgress, endedSubmitting],
  );

  useImperativeHandle(ref, () => ({
    submit: submitFiles,
    addFiles,
    removeFile,
    removeAll,
    files: files.files,
  }));

  const openFileDialogButton = customButton ? (
    customButton({ files: files.files, isDragging, openFileDialog, isSubmitting })
  ) : (
    <Button
      onClick={openFileDialog}
      variant="outlined"
      color="secondary"
      size="small"
      disabled={props.readOnly || props.disabled || isSubmitting}
      isLoading={isSubmitting}
      type="button"
    >
      {props.buttonText || 'Enviar arquivos'}
    </Button>
  );

  const variantProps = {
    ...props,
    ...(!props.readOnly && {
      events,
      isDragging,
    }),
    files: files.files,
    style,
    className,
    removeFile,
    openFileDialog,
    openFileDialogButton,
  };

  return props.compact ? <UploadCardCompact {...variantProps} /> : <UploadCardRegular {...variantProps} />;
});
