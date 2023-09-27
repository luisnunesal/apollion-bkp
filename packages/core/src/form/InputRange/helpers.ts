export function valueToPercent(value: number, min: number, max: number) {
  return ((value - min) * 100) / (max - min);
}

export function percentToValue(percent: number, min: number, max: number) {
  return (max - min) * percent + min;
}

export function roundValueToStep(value: number, step: number, min: number) {
  const nearest = Math.round((value - min) / step) * step + min;
  return Number(nearest.toFixed(step));
}

export function clamp(value: number) {
  if (value >= 1) return 1;
  if (value <= 0) return 0;

  return value;
}

export function normalizeValue(value: number, max: number, min: number, step: number) {
  const isValid = Number.isFinite(value) && value >= min && value <= max;

  if (isValid) {
    return step ? roundValueToStep(value, step, min) : value;
  }

  return Math.min(Math.max(min, value), max);
}
