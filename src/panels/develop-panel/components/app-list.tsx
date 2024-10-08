import "./app-list.css";
import { DevelopAppButton } from "../../../shared/components/develop-app-button";
import { AppType, developableApps } from "../app-model";
import { AppState, HumanResourceState } from "../../../shared/game-state";
import { ReactSetFunction } from "../../../shared/react-override";

export interface AppListProps {
  apps: AppState;
  setApps: ReactSetFunction<AppState>;
  humanResources: HumanResourceState;
}

export const AppList = (props: AppListProps) => {
  const { apps, setApps, humanResources } = props;
  const developApp = (type: AppType) => {
    const updatedAppState = {
      ...apps,
      [type]: apps[type] + 1,
    };
    setApps(updatedAppState);
  };

  return (
    <div className="app-list" data-testid="app-list">
      {developableApps.map((app) => (
        <DevelopAppButton humanResources={humanResources} incrementAppByType={developApp} key={app.type} {...app} />
      ))}
    </div>
  );
};
