export const calcIndicatorScore = (
  weight: number,
  ...values: number[]
): number => {
  return values.reduce((acc, currValue) => acc + currValue * weight, 0);
};
