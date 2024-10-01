import "./sell-controls.css";
import { useState } from "react";
import { AppType, developableApps, getAppByType } from "../../develop-panel/app-model";

export interface SellControlProps {
  moneyState: number;
  setMoneyState: any; // TODO
  appState: any; // TODO
  setAppState: any; // TODO
}

export const SellControls = (props: SellControlProps) => {
  const { moneyState, setMoneyState, appState, setAppState } = props;
  const [selectedAppType, setSelectedAppType] = useState(AppType.SMALL);
  const currentAppValue = 10;
  const handleAppTypeChangedEvent = (event) => setSelectedAppType(event.target.value);
  const sellApp = () => {
    if (selectedAppType) {
      const updatedAppState = {
        ...appState,
        [selectedAppType]: appState[selectedAppType] - 1,
      };
      const appValue = getAppByType(selectedAppType)!.valueMultiplier * currentAppValue; // TODO: check if can be undefined
      setAppState(updatedAppState);
      setMoneyState(moneyState + appValue);
    }
  };

  return (
    <>
      <select className="sell-app-selector" value={selectedAppType} onChange={handleAppTypeChangedEvent}>
        {developableApps.map((app) => (
          <option key={app.type} value={app.type}>
            Sell {app.type} App: {appState[app.type]}
          </option>
        ))}
      </select>
      <button className="sell-app-button" disabled={!appState[selectedAppType]} onClick={sellApp}>
        Sell App
      </button>
    </>
  );
};
