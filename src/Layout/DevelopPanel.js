import './DevelopPanel.css';
import { DevelopAppButton } from "../Common/DevelopAppButton";

export const DevelopPanel = () => (
    <div className="develop-panel">
        <DevelopAppButton text="Develop a smaller app" time={60} valueMultiplier={1} developersRequired={0} />
        <DevelopAppButton text="Develop a medium app" time={150} valueMultiplier={2.5} developersRequired={3} />
        <DevelopAppButton text="Develop a large app" time={300} valueMultiplier={10} developersRequired={5} />
    </div>
);
