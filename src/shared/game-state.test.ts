import { AppType } from "../panels/develop-panel/app-model";
import { HumanResourceType } from "../panels/resources-panel/human-resources-model";
import { getGameState } from "./game-state";

const defaultGameState = () => {
  const appTypes = Object.values(AppType);
  const humanResourceTypes = Object.values(HumanResourceType);
  const gameState: any = {
    money: null,
    humanResources: {},
    apps: {},
  };
  gameState.money = 0;
  humanResourceTypes.forEach((type) => (gameState.humanResources[type] = 0));
  appTypes.forEach((type) => (gameState.apps[type] = 0));
  return gameState;
};

test("getGameState() returns initial state", () => {
  expect(getGameState()).toEqual(defaultGameState());
});
