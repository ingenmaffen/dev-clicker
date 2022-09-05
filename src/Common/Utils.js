export const formatTime = (currentTime) => {
    return currentTime > 0 ? `(${formatTimeWithoutParenthesis(currentTime)})` : '';
}

export const formatTimeWithoutParenthesis = (currentTime) => {
    const minute = Math.floor(currentTime / 60);
    const second = currentTime % 60;
    return currentTime >= 0 ? `${formatNumberToString(minute)}:${formatNumberToString(second)}` : '';
}

const formatNumberToString = (number) => {
    return number < 10 ? `0${number}` : `${number}`;
}
