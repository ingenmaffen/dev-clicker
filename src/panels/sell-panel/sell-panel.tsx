import { SellControlProps, SellControls } from "./components/sell-controls";

interface SellPanelProps extends SellControlProps {}

export const SellPanel = ({ moneyState, setMoneyState, appState, setAppState, setPriceState }: SellPanelProps) => (
  <SellControls moneyState={moneyState} setMoneyState={setMoneyState} appState={appState} setAppState={setAppState} setPriceState={setPriceState} />
);
