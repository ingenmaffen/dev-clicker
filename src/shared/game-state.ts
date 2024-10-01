import { AppType } from "../panels/develop-panel/app-model";
import { HumanResourceType } from "../panels/resources-panel/human-resources-model";

export type AppState = { [key in AppType]?: number };
export type HumanResourceState = { [key in HumanResourceType]?: number };

interface GameState {
  money: number;
  humanResources: HumanResourceState;
  apps: AppState;
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
