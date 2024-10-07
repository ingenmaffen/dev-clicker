import "./sell-controls.css";
import { ChangeEvent, useState } from "react";
import { AppType, developableApps, getAppByType } from "../../../develop-panel/app-model";
import { ReactSetFunction } from "../../../../shared/react-override";
import { AppState } from "../../../../shared/game-state";

export interface SellControlProps {
  money: number;
  setMoney: ReactSetFunction<number>;
  apps: AppState;
  setApps: ReactSetFunction<AppState>;
}

export const SellControls = (props: SellControlProps) => {
  const { money, setMoney, apps, setApps } = props;
  const [selectedAppType, setSelectedAppType] = useState(AppType.SMALL);
  const currentAppValue = 10;
  const handleAppTypeChangedEvent = (event: ChangeEvent<any>) => setSelectedAppType(event.target.value);
  const sellApp = () => {
    if (selectedAppType) {
      const updatedAppState = {
        ...apps,
        [selectedAppType]: apps[selectedAppType]! - 1,
      };
      const appValue = getAppByType(selectedAppType)!.valueMultiplier * currentAppValue;
      setApps(updatedAppState);
      setMoney(money + appValue);
    }
  };

  return (
    <>
      <select data-testid="sell-app-select" className="sell-app-selector" value={selectedAppType} onChange={handleAppTypeChangedEvent}>
        {developableApps.map((app) => (
          <option key={app.type} value={app.type}>
            Sell {app.type} App: {apps[app.type]}
          </option>
        ))}
      </select>
      <button data-testid="sell-app-button" className="sell-app-button" disabled={!apps[selectedAppType]} onClick={sellApp}>
        Sell App
      </button>
    </>
  );
};
