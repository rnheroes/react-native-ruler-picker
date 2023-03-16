export const calculateCurrentValue = (
  scrollPosition: number,
  stepWidth: number,
  gapBetweenItems: number,
  min: number,
  max: number,
  step: number,
  fractionDigits: number
) => {
  const index = Math.round(scrollPosition / (stepWidth + gapBetweenItems));
  return Math.min(Math.max(index * step + min, min), max).toFixed(
    fractionDigits
  );
};
