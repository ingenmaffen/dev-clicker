import { useState } from "react";

import "./app.css";
import { getGameState } from "./shared/game-state";
import { Header } from "./panels/header/header";
import { DevelopPanel } from "./panels/develop-panel/develop-panel";
import { ResourcesPanel } from "./panels/resources-panel/resources-panel";
import { SellPanel } from "./panels/sell-panel/sell-panel";

const App = () => {
  const gameState = getGameState();
  const [money, setMoney] = useState(gameState.money);
  const [apps, setApps] = useState(gameState.apps);
  const [humanResources, setHumanResources] = useState(gameState.humanResources);
  const [_priceMultiplier, setPriceMultiplier] = useState(0);

  return (
    <>
      <Header money={money} />
      <div className="main-content">
        <DevelopPanel apps={apps} setApps={setApps} humanResources={humanResources} />
        <SellPanel money={money} setMoney={setMoney} apps={apps} setApps={setApps} setPriceMultiplier={setPriceMultiplier} />
        <ResourcesPanel humanResourceState={humanResources} setHumanResourceState={setHumanResources} />
      </div>
    </>
  );
};

export default App;
