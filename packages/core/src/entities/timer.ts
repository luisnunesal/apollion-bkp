type options = {
  next: (t: number) => void;
  onComplete?: () => void;
  step?: number;
};

export function timer(timeout: number, { step = 1000, ...opt }: options) {
  let timeoutId: any = 0;

  const timerFn = (n: number) => {
    if (n <= timeout) {
      timeoutId = setTimeout(() => timerFn(n + 1), step);
      opt.next(n);
    } else if (opt.onComplete) {
      opt.onComplete();
    }
  };

  timerFn(0);

  return () => clearTimeout(timeoutId);
}
