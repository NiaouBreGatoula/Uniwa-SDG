export const roundToFour = (num: number): number => {
  return Math.round(num * 10000) / 10000;
};

export const percentageChange = (current: number, previous: number): number => {
  if (previous === 0) {
    return 0;
  }
  return (current - previous) / previous;
};
