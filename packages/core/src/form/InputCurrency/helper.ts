type FormatOption = Partial<{
  decimal?: string;
  thousand?: string;
  validate?: boolean;
  prefix?: string;
}>;

function removeNonDigits(str: string) {
  return str.replace(/\D/g, '');
}

function formatNumber(str: string, thousandChar = '.') {
  // format number 1234567 to 1,234,567
  return removeNonDigits(str).replace(/\B(?=(\d{3})+(?!\d))/g, thousandChar);
}

export function formatCurrency(_value: string, options?: FormatOption) {
  let value = _value;

  if (options.prefix && value) {
    value = _value.replaceAll(options.prefix, '').trim();
  }

  if (value === '') {
    return value;
  }

  const { decimal, thousand, validate } = options;

  const decimalPosition = value.indexOf(decimal);

  if (decimalPosition >= 0) {
    // split number by decimal point
    let leftSide = value.substring(0, decimalPosition);
    let rightSide = value.substring(decimalPosition);

    // add commas to left side of number
    leftSide = formatNumber(leftSide, thousand);

    if (validate) {
      rightSide = `${rightSide}00`;
    }

    // validate right side
    rightSide = removeNonDigits(rightSide).substring(0, 2);

    value = `${leftSide}${decimal}${rightSide}`;
  } else if (validate) {
    value = `${formatNumber(value)}${decimal}00`;
  } else {
    value = formatNumber(value);
  }

  return validate ? `${formatNumber(value)}${decimal}00` : formatNumber(value);
}

export function currencyToNumber(currency: string, decimalChar = ','): number {
  if (typeof currency === 'number') return currency;

  try {
    const decimalPosition = currency.indexOf(decimalChar);

    if (decimalPosition >= 0) {
      const leftSide = removeNonDigits(currency.substring(0, decimalPosition));
      const rightSide = removeNonDigits(currency.substring(decimalPosition));

      return Number(`${leftSide}.${rightSide}`);
    }

    return Number(removeNonDigits(currency));
  } catch (e) {
    console.log('Failed to convert string to Number');
    return 0;
  }
}

export function getInitialCurrencyValue(initialValue: string | number, options?: FormatOption): string {
  let value = initialValue;

  if (typeof value === 'number') {
    value = value.toLocaleString('pt-BR', { style: 'decimal' });
  }

  return formatCurrency(value, { validate: true, ...options });
}
