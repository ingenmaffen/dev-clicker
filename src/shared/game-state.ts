import { AppType } from "../panels/develop-panel/app-model";
import { HumanResourceType } from "../panels/resources-panel/human-resources-model";

interface GameState {
  money: number;
  humanResources: { [key in HumanResourceType]?: number };
  apps: { [key in AppType]?: number };
}

const initialGameState: GameState = {
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

export const getGameState = (): GameState => {
  // TODO: add load (after autosave is implemeted)
  return initialGameState;
};
