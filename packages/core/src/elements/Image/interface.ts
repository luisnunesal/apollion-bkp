export interface ImageInterface extends React.ComponentPropsWithoutRef<'img'> {
  full?: boolean;
  cover?: boolean;
  fallback?: JSX.Element;
}

export interface ImageLazyInterface extends ImageInterface {
  threshold?: number;
}
