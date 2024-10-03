import "./sell-controls.css";
import { ChangeEvent, useState } from "react";
import { AppType, developableApps, getAppByType } from "../../../develop-panel/app-model";
import { ReactSetFunction } from "../../../../shared/react-override";
import { AppState } from "../../../../shared/game-state";

export interface SellControlProps {
  moneyState: number;
  setMoneyState: ReactSetFunction<number>;
  appState: AppState;
  setAppState: ReactSetFunction<AppState>;
}

export const SellControls = (props: SellControlProps) => {
  const { moneyState, setMoneyState, appState, setAppState } = props;
  const [selectedAppType, setSelectedAppType] = useState(AppType.SMALL);
  const currentAppValue = 10;
  const handleAppTypeChangedEvent = (event: ChangeEvent<any>) => setSelectedAppType(event.target.value);
  const sellApp = () => {
    if (selectedAppType) {
      const updatedAppState = {
        ...appState,
        [selectedAppType]: appState[selectedAppType]! - 1,
      };
      const appValue = getAppByType(selectedAppType)!.valueMultiplier * currentAppValue;
      setAppState(updatedAppState);
      setMoneyState(moneyState + appValue);
    }
  };

  return (
    <>
      <select data-testid="sell-app-select" className="sell-app-selector" value={selectedAppType} onChange={handleAppTypeChangedEvent}>
        {developableApps.map((app) => (
          <option key={app.type} value={app.type}>
            Sell {app.type} App: {appState[app.type]}
          </option>
        ))}
      </select>
      <button data-testid="sell-app-button" className="sell-app-button" disabled={!appState[selectedAppType]} onClick={sellApp}>
        Sell App
      </button>
    </>
  );
};
