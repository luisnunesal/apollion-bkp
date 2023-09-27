import { useEffect, useState } from 'react';
import { sha1 } from 'object-hash';

export const useScript = ({ src }: { src: string }) => {
  const $document = document;
  const ID = sha1(src);
  const [isLoading, setLoading] = useState(true);
  const existingScript = $document.getElementById(ID);

  useEffect(() => {
    if (!existingScript) {
      const $script = $document.createElement('script');
      $script.async = true;
      $script.id = ID;
      $script.src = src;
      $script.onload = () => {
        setLoading(false);
      };

      $document.body.appendChild($script);
    } else {
      setLoading(false);
    }

    return (): void => {
      $document.getElementById(ID).removeEventListener('load', (): void => null);
    };
  }, []);

  return {
    isLoadingScript: isLoading,
  };
};
