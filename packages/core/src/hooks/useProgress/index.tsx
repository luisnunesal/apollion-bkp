import React from 'react';

type incrementType = 1 | 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50;

export function useProgress(initialValue = 0, increment: incrementType = 1, time: number | null = 3000) {
  const [progress, setProgress] = React.useState(initialValue);

  React.useEffect(() => {
    if (!time) {
      return undefined;
    }

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const sum = prevProgress + increment;
        // console.log({ initialValue, increment, time, sum, timer: (time / 100) * increment });

        if (sum >= 100) {
          clearInterval(interval);
          return 100;
        }

        return sum;
      });
    }, (time / 100) * increment);

    return () => clearInterval(interval);
  }, []);

  return progress;
}
