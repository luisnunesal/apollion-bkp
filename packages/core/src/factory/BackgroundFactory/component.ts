import { BackgroundFactoryProps, BackgroundThemePropsType } from './interface';

export const backgroundKeys: Array<keyof BackgroundFactoryProps> = ['bgColor'];

export const BackgroundFactory =
  (customProps: BackgroundFactoryProps | ((o: any) => BackgroundFactoryProps)) =>
  ({ theme, ...context }: BackgroundThemePropsType) => {
    const bgColor = (context.bgColor ??
      ((typeof customProps === 'function' ? customProps(context) : customProps) || {}).bgColor) as string;

    return (
      bgColor && {
        backgroundColor: theme.colors(bgColor),
      }
    );
  };
