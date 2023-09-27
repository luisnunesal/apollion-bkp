import React, { forwardRef, useEffect, useState } from 'react';

import { getIconFromUrl } from './helper';
import { IconProps, IconVariantProps } from './interface';
import { IconStyle } from './style';

import { icons } from '../../icons';
import { Image } from '../Image';
import { SvgComponent } from '../Svg/component';

const createIcon = (element: React.ReactNode, props: any) => React.cloneElement(element as React.ReactElement, props);

const IconRegular = forwardRef<HTMLDivElement, IconVariantProps>(
  ({ icon, name, iconProps, svgProps, children, ...props }, ref) => {
    const getIcon = () => {
      let iconComponent = null;

      if (children) {
        iconComponent = createIcon(children as React.ReactElement, svgProps);
      } else if (name) {
        iconComponent = createIcon(icons[name], svgProps);
      } else if (icon) {
        iconComponent = createIcon(icon as React.ReactElement, svgProps);
      } else if (iconProps) {
        iconComponent = SvgComponent(svgProps);
      }

      return iconComponent;
    };

    return (
      <IconStyle {...props} ref={ref}>
        {getIcon()}
      </IconStyle>
    );
  },
);

const IconUrl = forwardRef<HTMLDivElement, IconVariantProps>(({ title, src, svgProps, ...props }, ref) => {
  const [iconElement, setIcon] = useState<React.ReactNode>(() => <Image height="1em" width="1em" alt={title} />);

  useEffect(() => {
    getIconFromUrl(src, (element) => {
      setIcon(createIcon(element, svgProps));
    });
  }, [src]);

  return (
    <IconStyle {...props} ref={ref}>
      {iconElement}
    </IconStyle>
  );
});

export const IconComponent: React.FC<IconProps> = forwardRef<HTMLDivElement, IconProps>(({ title, ...props }, ref) => {
  const svgProps = {
    ...(props.iconProps || {}),
    title,
    stroke: 'currentColor',
    fill: 'currentColor',
    strokeWidth: '0',
    height: '1em',
    width: '1em',
  };

  if (props.src) {
    return <IconUrl {...props} svgProps={svgProps} ref={ref} />;
  }

  return <IconRegular {...props} svgProps={svgProps} ref={ref} />;
});
