export type DepthAliasTypes =
  | 'level-one-minus'
  | 'level-zero'
  | 'level-one'
  | 'level-two'
  | 'level-three'
  | 'level-four'
  | 'level-five'
  | 'level-six';

export type DepthInterface = DepthAliasTypes;

export type DepthThemeInterface = (value: DepthInterface) => string;
