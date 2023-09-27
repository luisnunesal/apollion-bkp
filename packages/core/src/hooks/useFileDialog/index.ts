import { useCallback } from 'react';

import { $window } from '../../entities';
import { acceptableFile } from '../useDrag/helper';

interface OptionsInterface {
  accept?: string[];
  single?: boolean;
  onFilesSelect: (f: File[]) => void;
  onUnsupportedFile?: (f: File) => void;
}

export function useFileDialog(opts?: OptionsInterface) {
  const addFiles = useCallback(
    (files: FileList | File[]) => {
      const fileList = Array.isArray(files) ? files : Array.from(files);

      if (fileList.length) opts.onFilesSelect(fileList);
    },
    [opts],
  );

  const getFiles = useCallback(
    (e: Event) => {
      const { files } = e.target as HTMLInputElement;

      const unsupportedFile = Array.from(files).find((file) => !acceptableFile(file, opts.accept));

      if (unsupportedFile instanceof File) {
        opts.onUnsupportedFile && opts.onUnsupportedFile(unsupportedFile);
      } else {
        addFiles(files);
      }
    },
    [addFiles, opts],
  );

  const openFileDialog = useCallback(() => {
    const dialog = $window.document.createElement('input');
    dialog.setAttribute('type', 'file');

    if (!opts.single) {
      dialog.setAttribute('multiple', 'multiple');
    }

    if (Array.isArray(opts.accept)) {
      dialog.setAttribute('accept', opts.accept.join(','));
    }

    dialog.addEventListener('change', getFiles);
    dialog.click();
  }, [getFiles, opts.accept, opts.single]);

  return { openFileDialog };
}
