export type SpacingAlias = 'zero' | 'micro' | 'xs' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'giant';

export type SpacingInterface = SpacingAlias | number;

export type SpacingInput = {
  multiplier?: number;
  alias: Record<SpacingAlias, number>;
};

export type SpacingThemeInterface = (...args: SpacingInterface[]) => string;
