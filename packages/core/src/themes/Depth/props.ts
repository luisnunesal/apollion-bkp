import Color from 'color';

import { DepthAliasTypes, DepthInterface } from './interface';

import { ColorsThemeInterface } from '../Colors';

export const levelValues: { [key in DepthAliasTypes]: string } = {
  'level-one-minus': 'inset 0px 0px 4px',
  'level-zero': '0px 0px 0px',
  'level-one': '0px 0px 4px',
  'level-two': '0px 0px 8px',
  'level-three': '0px 0px 16px',
  'level-four': '0px 0px  28px',
  'level-five': '0px 0px  44px',
  'level-six': '0px 0px  72px',
};

export const createDeth = (colors: ColorsThemeInterface) => (value: DepthInterface) => {
  const depthValue = levelValues[value];
  const depthColor = colors.neutral['180'];
  return `${depthValue} ${Color(depthColor).alpha(0.15)}`;
};
