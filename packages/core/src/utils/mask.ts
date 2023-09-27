type MaskChars = {
  [index: number]: string;
};

export const maskContructor = (maskChars: MaskChars, maxLength: number) => (numberToBeFormated: string) => {
  const numbers = numberToBeFormated.replace(/\D/g, '').split('');

  const doc = numbers.reduce((acc, n, i) => `${acc}${(maskChars[i] || '') + n}`, '');
  return doc.substr(0, maxLength);
};

export const createMask = (input: string) => {
  let doubleMask = 0;

  const { length } = input;
  const maskChars = {} as MaskChars;

  for (let i = 0; i < length; i++) {
    const currentChar = input[i];

    if (currentChar !== '0') {
      const key = i - Object.keys(maskChars).length - doubleMask;

      if (maskChars[key]) {
        maskChars[key] += currentChar;
        doubleMask++;
      } else {
        maskChars[key] = currentChar;
      }
    }
  }

  return maskContructor(maskChars, length);
};
