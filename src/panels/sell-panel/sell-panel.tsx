import { SellControlProps, SellControls } from "./components/sell-controls/sell-controls";
import { SellChartProps, SellPriceChart } from "./components/sell-pricechart/sell-pricechart";

import "./sell-panel.css";

interface SellPanelProps extends SellControlProps, SellChartProps {}

export const SellPanel = ({ moneyState, setMoneyState, appState, setAppState, setPriceState }: SellPanelProps) => (
  <div className="sell-app-panel-container">
    <div className="sell-app-panel">
      <SellControls moneyState={moneyState} setMoneyState={setMoneyState} appState={appState} setAppState={setAppState} />
    </div>
    <div>
      <SellPriceChart setPriceState={setPriceState} />
    </div>
  </div>
);
