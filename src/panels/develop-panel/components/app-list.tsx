import "./app-list.css";
import { DevelopAppButton } from "../../../shared/components/develop-app-button";
import { AppType, developableApps } from "../app-model";
import { AppState, HumanResourceState } from "../../../shared/game-state";
import { ReactSetFunction } from "../../../shared/react-override";

export interface AppListProps {
  appState: AppState;
  setAppState: ReactSetFunction<AppState>;
  humanResources: HumanResourceState;
}

export const AppList = (props: AppListProps) => {
  const { appState, setAppState, humanResources } = props;
  const developApp = (type: AppType) => {
    const updatedAppState = {
      ...appState,
      [type]: appState[type]! + 1,
    };
    setAppState(updatedAppState);
  };

  return (
    <div className="develop-panel" data-testid="develop-panel">
      {developableApps.map((app) => (
        <DevelopAppButton humanResources={humanResources} incrementAppByType={developApp} key={app.type} {...app} />
      ))}
    </div>
  );
};
