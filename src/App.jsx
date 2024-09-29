import { useState } from "react";

import "./App.css";
import { getGameState } from "./Common/GameState";
import { DevelopPanel } from "./Layout/DevelopPanel";
import { ResourcePanel } from "./Layout/ResourcePanel";
import { SellPanel } from "./Layout/SellPanel";
import { AppHeader } from "./Layout/AppHeader";

const App = () => {
  const gameState = getGameState();
  const [currentMoney, setCurrentMoney] = useState(gameState.money);
  const [currentApps, setCurrentApps] = useState(gameState.apps);
  const [currentResources, setCurrentResources] = useState(gameState.humanResources);
  const [_currentPrice, setCurrentPrice] = useState(0);

  return (
    <>
      <AppHeader money={currentMoney} />
      <div className="main-content">
        <DevelopPanel appState={currentApps} setAppState={setCurrentApps} humanResources={currentResources} />
        <SellPanel
          moneyState={currentMoney}
          setMoneyState={setCurrentMoney}
          appState={currentApps}
          setAppState={setCurrentApps}
          setPriceState={setCurrentPrice}
        />
        <ResourcePanel humanResourceState={currentResources} setHumanResourceState={setCurrentResources} />
      </div>
    </>
  );
};

export default App;
