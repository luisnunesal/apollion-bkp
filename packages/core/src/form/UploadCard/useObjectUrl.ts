import { useEffect, useState } from 'react';

type FileType = File | Blob;

export function useObjectUrl(file: FileType, test: (f: FileType) => boolean) {
  const [url, setUrl] = useState<null | string>(null);

  useEffect(() => {
    let objectURL = '';

    if (file && test && file) {
      objectURL = URL.createObjectURL(file);
      setUrl(objectURL);
    }

    return () => {
      URL.revokeObjectURL(objectURL);
    };
  }, [file]);

  return url;
}
