import "./SellPanel.css";
import { useState } from "react";
import { SellPriceChart } from "./SellPriceChart";
import { developableAppProperties, getAppByType } from "../Common/DevelopableAppProperties";

export const SellPanel = ({moneyState, setMoneyState, appState, setAppState}) => {
    const [selectedAppType, setSelectedAppType] = useState("small");
    const currentAppValue = 10;
    const handleAppTypeChangedEvent = (event) => setSelectedAppType(event.target.value);
    const sellApp = () => {
        if (selectedAppType) {
            const updatedAppState = {
                ...appState,
                [selectedAppType]: appState[selectedAppType] - 1
            }
            const appValue = getAppByType(selectedAppType).valueMultiplier * currentAppValue;
            setAppState(updatedAppState);
            setMoneyState(moneyState + appValue);
        }
    }

    return (
        <div className="sell-app-panel-container">
            <div className="sell-app-panel">
                <select value={selectedAppType} onChange={handleAppTypeChangedEvent}>
                    {developableAppProperties.map(app =>
                        <option key={app.type} value={app.type}>Sell {app.type} App: {appState[app.type]}</option>
                    )}
                </select>
                <button disabled={!appState[selectedAppType]} onClick={sellApp}>Sell App</button>
            </div>
            <div>
                <SellPriceChart />
            </div>
        </div>
    );
};
