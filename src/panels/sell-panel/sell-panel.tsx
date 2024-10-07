import { SellControlProps, SellControls } from "./components/sell-controls/sell-controls";
import { SellChartProps, SellPriceChart } from "./components/sell-pricechart/sell-pricechart";

import "./sell-panel.css";

interface SellPanelProps extends SellControlProps, SellChartProps {}

export const SellPanel = ({ money, setMoney, apps, setApps, setPriceMultiplier }: SellPanelProps) => (
  <div className="sell-app-panel" data-testid="sell-app-panel">
    <div className="sell-controls-container">
      <SellControls money={money} setMoney={setMoney} apps={apps} setApps={setApps} />
    </div>
    <div>
      <SellPriceChart setPriceMultiplier={setPriceMultiplier} />
    </div>
  </div>
);
