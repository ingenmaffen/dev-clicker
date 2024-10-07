export const formatTime = (timeInSeconds: number): string => {
  return timeInSeconds > 0 ? `(${formatTimeWithoutParenthesis(timeInSeconds)})` : "";
};

export const formatTimeWithoutParenthesis = (timeInSeconds: number): string => {
  const minute = Math.floor(timeInSeconds / 60); // for chart it's hour
  const second = timeInSeconds % 60; // for chart it's minute
  return timeInSeconds >= 0 ? `${formatNumberToDoubleDigit(minute)}:${formatNumberToDoubleDigit(second)}` : "";
};

const formatNumberToDoubleDigit = (number: number): string => {
  return number < 10 ? `0${number}` : `${number}`;
};
