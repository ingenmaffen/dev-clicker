import "./app-list.css";
import { DevelopAppButton } from "../../../shared/components/develop-app-button";
import { developableApps } from "../app-model";
import { AppState, HumanResourceState } from "../../../shared/game-state";
import { ReactSetFunction } from "../../../shared/react-override";

export interface AppListProps {
  appState: AppState;
  setAppState: ReactSetFunction<AppState>;
  humanResources: HumanResourceState;
}

export const AppList = (props: AppListProps) => {
  const { appState, setAppState, humanResources } = props;
  const developApp = (appType) => {
    const updatedAppState = {
      ...appState,
      [appType]: appState[appType] + 1,
    };
    setAppState(updatedAppState);
  };

  return (
    <div className="develop-panel">
      {developableApps.map((app) => (
        <DevelopAppButton humanResources={humanResources} incrementAppByType={developApp} key={app.type} {...app} />
      ))}
    </div>
  );
};
