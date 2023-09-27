export type SliderProps = {
  value?: number;
  mark?: boolean;
  markLabel?: boolean;
  getLabelValue?: (n: number) => string;
  disabled?: boolean;
  gradient?: boolean;
  step?: number;
  min?: number;
  max?: number;

  onChange?: (v: number) => void;
};
