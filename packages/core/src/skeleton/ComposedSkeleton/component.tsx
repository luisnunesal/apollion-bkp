import React from 'react';
import ContentLoader, { BulletList, Code, Facebook, IContentLoaderProps, List } from 'react-content-loader';
import { useTheme } from 'styled-components';

import { ComposedSkeletonInterface } from './interface';

import { getColor, Theme } from '../../themes';

export function ComposedSkeletonComponent({ children, ...props }: ComposedSkeletonInterface) {
  const { colors } = useTheme() as Theme;

  return (
    <ContentLoader
      {...props}
      viewBox={`0 0 ${props.width} ${props.height}`}
      backgroundColor={getColor(props.backgroundColor || colors.neutral['10'])}
      foregroundColor={getColor(props.foregroundColor || colors.neutral['30'])}
    >
      {children}
    </ContentLoader>
  );
}

export const ListSkeletonComponent: React.FC<IContentLoaderProps> = List;
export const BulletListSkeletonComponent: React.FC<IContentLoaderProps> = BulletList;
export const CodeSkeletonComponent: React.FC<IContentLoaderProps> = Code;
export const ItemSkeletonComponent: React.FC<IContentLoaderProps> = Facebook;
