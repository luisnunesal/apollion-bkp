import { ColorFactoryProps, ColorThemePropsType } from './interface';

export const colorKeys: Array<keyof ColorFactoryProps> = ['color', 'contrast'];

export const ColorFactory = (customProps: ColorFactoryProps) => (contextProps: ColorThemePropsType) => {
  const { theme, ...props } = { ...customProps, ...contextProps };

  let color;

  if (props.contrast) {
    color = theme.colors.getContrastColor(theme.colors(props.contrast));
  } else if (props.color) {
    color = theme.colors(props.color);
  }

  return {
    color,
  };
};
