import "./DevelopPanel.css";
import { DevelopAppButton } from "../Common/DevelopAppButton";
import { developableAppProperties } from "../Common/DevelopableAppProperties";

interface DevelopPanelProps {
  appState: any; // TODO: add proper type
  setAppState: any; // TODO: add proper type... also consider renaming stuff, maybe?
  humanResources: any; // TODO: add proper type
}

export const DevelopPanel = (props: DevelopPanelProps) => {
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
      {developableAppProperties.map((app) => (
        <DevelopAppButton humanResources={humanResources} incrementAppByType={developApp} key={app.type} {...app} />
      ))}
    </div>
  );
};
