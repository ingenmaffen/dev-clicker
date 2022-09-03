import './App.css';
import { DevelopPanel } from './Layout/DevelopPanel';
import { ResourcePanel } from './Layout/ResourcePanel';
import { SellPanel } from './Layout/SellPanel';

const App = () => {
  return (
    <div className="main-content">
      <DevelopPanel />
      <SellPanel />
      <ResourcePanel />
    </div>
  );
}

export default App;
