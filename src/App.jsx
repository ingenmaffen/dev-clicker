import { useState } from 'react';

import './App.css';
import { getGameState } from './Common/GameState';
import { DevelopPanel } from './Layout/DevelopPanel';
import { ResourcePanel } from './Layout/ResourcePanel';
import { SellPanel } from './Layout/SellPanel';

const App = () => { 
  const gameState = getGameState();
  const [currentMoney, setCurrentMoney] = useState(gameState.money);
  const sellApp = () => {
    setCurrentMoney(currentMoney+1);
  };
  return (
    <>
      <div>Money: ${currentMoney}</div>
      <div className="main-content">
        <DevelopPanel />
        <SellPanel sellApp={sellApp} />
        <ResourcePanel />
      </div>
    </>
  );
}

export default App;
