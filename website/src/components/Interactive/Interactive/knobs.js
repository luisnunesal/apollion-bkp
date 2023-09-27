const createKnob = (label, type, initialValue, options) => {
  if (type === 'text') {
    return {
      label,
      isKnob: true,
      type,
      initialValue: initialValue ? initialValue : ''
    };
  }
  if (type === 'boolean') {
    return {
      label,
      isKnob: true,
      type,
      initialValue: initialValue ? initialValue : false,
      options: [true, false]
    };
  }
  if (type === 'array-select' || type === 'array-checkbox') {
    if (!initialValue) {
      throw new Error('missing initial value');
    }
    return {
      label,
      isKnob: true,
      type,
      initialValue,
      options
    };
  }
};

export const text = (label, initialValue) =>
  createKnob(label, 'text', initialValue);
export const boolean = (label, initialValue) =>
  createKnob(label, 'boolean', initialValue);
export const select = (label, initialValue, options) =>
  createKnob(label, 'array-select', initialValue, options);
export const pill = (label, initialValue, options) =>
  createKnob(label, 'array-checkbox', initialValue, options);
