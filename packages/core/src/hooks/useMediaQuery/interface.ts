export interface TargetEventInterface {
  innerWidth: number;
  innerHeight?: number;
}

export interface DefaultViewportInterface {
  isMobile?: boolean;
  isTablet?: boolean;
  isLaptop?: boolean;
  boundaries: {
    width?: number;
    height?: number;
  };
}
