import React from 'react';

import { Rect } from '../../scenario';
import { ComposedSkeletonInterface, Skeleton } from '../ComposedSkeleton';

export default function TextPresetComponent({ width, height = 13 }: ComposedSkeletonInterface) {
  return (
    <Skeleton width={width} height={height}>
      <Rect x={0} y={0} width={width} height={height} />
    </Skeleton>
  );
}
