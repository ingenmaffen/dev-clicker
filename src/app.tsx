import { useState } from "react";

import "./app.css";
import { getGameState } from "./shared/game-state";
import { Header } from "./panels/header/header";
import { DevelopPanel } from "./panels/develop-panel/develop-panel";
import { ResourcesPanel } from "./panels/resources-panel/resources-panel";
import { SellPanel } from "./panels/sell-panel/sell-panel";

const App = () => {
  const gameState = getGameState();
  const [currentMoney, setCurrentMoney] = useState(gameState.money);
  const [currentApps, setCurrentApps] = useState(gameState.apps);
  const [currentResources, setCurrentResources] = useState(gameState.humanResources);
  const [_currentPrice, setCurrentPrice] = useState(0);

  return (
    <>
      <Header money={currentMoney} />
      <div className="main-content">
        <DevelopPanel appState={currentApps} setAppState={setCurrentApps} humanResources={currentResources} />
        <SellPanel
          moneyState={currentMoney}
          setMoneyState={setCurrentMoney}
          appState={currentApps}
          setAppState={setCurrentApps}
          setPriceState={setCurrentPrice}
        />
        <ResourcesPanel humanResourceState={currentResources} setHumanResourceState={setCurrentResources} />
      </div>
    </>
  );
};

export default App;
