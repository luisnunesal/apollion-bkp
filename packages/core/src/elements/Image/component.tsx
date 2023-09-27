import React, { forwardRef, useState } from 'react';

import { ImageInterface, ImageLazyInterface } from './interface';
import { ImageStyle } from './style';

import { useIntersect } from '../../hooks/useIntersect';
import { Rect } from '../../scenario';
import { Skeleton } from '../../skeleton';

export const ImageComponent = forwardRef<HTMLImageElement, ImageInterface>(({ src, ...props }, ref) => (
  <ImageStyle src={src} ref={ref} {...props} />
));

const ImageDefaultContentLoader = ({ width = 60, height = 60 }: Pick<ImageInterface, 'width' | 'height'>) => (
  <Skeleton height={height} width={width}>
    <Rect width={width} height={height} />
  </Skeleton>
);

function loadImage(img: string) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = resolve;
    image.onerror = reject;
    image.src = img;
  });
}

export const ImageLazy = ({ src, fallback, threshold, ...props }: ImageLazyInterface) => {
  const [imageSrc, setImageSrc] = useState<string | undefined>();

  const [setNode] = useIntersect({ threshold }, () => {
    loadImage(src)
      .then(() => setImageSrc(src))
      .catch(() => console.warn(`[Failed]: error on loading image: ${src}`));
  });

  const isLoading = typeof imageSrc === 'undefined';

  return (
    <>
      {isLoading ? fallback || <ImageDefaultContentLoader {...props} /> : null}
      <ImageComponent src={imageSrc || ''} ref={setNode} {...props} />
    </>
  );
};
