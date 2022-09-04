const initialGameState = {
  money: 0,
  developer: 0,
  apps: {
    small: 0,
    medium: 0,
    large: 0,
  }
};

export const getGameState = () => {
  return initialGameState;
}