const initialGameState = {
  money: 0,
  humanResources: {
    developer: 0,
    tester: 0,
    productOwner: 0,
    businessAnalyst: 0,
  },
  apps: {
    small: 0,
    medium: 0,
    large: 0,
  },
};

export const getGameState = () => {
  return initialGameState;
};
