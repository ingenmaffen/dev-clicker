import { useState } from 'react';

import './App.css';
import { getGameState } from './Common/GameState';
import { DevelopPanel } from './Layout/DevelopPanel';
import { ResourcePanel } from './Layout/ResourcePanel';
import { SellPanel } from './Layout/SellPanel';

const App = () => {
  const gameState = getGameState();
  const [currentMoney, setCurrentMoney] = useState(gameState.money);
  const [currentApps, setCurrentApps] = useState(gameState.apps);
  const [currentResources, setCurrentResources] = useState(gameState.humanResources);
  const sellApp = () => {
    setCurrentMoney(currentMoney+1);
  };
  return (
    <>
      <div>Money: ${currentMoney}</div>
      <div className="main-content">
        <DevelopPanel appState={currentApps} setAppState={setCurrentApps} />
        <SellPanel sellApp={sellApp} />
        <ResourcePanel />
      </div>
    </>
  );
}

export default App;
