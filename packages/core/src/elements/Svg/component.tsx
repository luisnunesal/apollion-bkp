import React from 'react';

import { DefaultSvgInterface, PathInterface } from './interface';
import { GroupStyle, PathStyle, SvgStyle } from './style';

export const SvgComponent = ({
  transform,
  fill,
  paths,
  fillAll,
  error,
  viewBox,
  title,
  ...props
}: DefaultSvgInterface): JSX.Element => {
  const RenderPaths = () =>
    paths &&
    paths.map((path: PathInterface) => {
      const p = path;
      if (fillAll) {
        delete p.fill;
      }
      return <PathStyle {...p} key={p.d} fill={p.fill} />;
    });

  return (
    <SvgStyle viewBox={viewBox} error={error} {...props}>
      {title && <title>{title}</title>}
      <GroupStyle transform={transform} fill={fill}>
        {RenderPaths()}
      </GroupStyle>
    </SvgStyle>
  );
};
