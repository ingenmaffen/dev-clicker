import './DevelopPanel.css';
import { DevelopAppButton } from "../Common/DevelopAppButton";

const developableApp = [
    {
        text: "Develop a small app",
        time: 60,
        valueMultiplier: 1,
        requiredDevelopers: 0
    },
    {
        text: "Develop medium app",
        time: 150,
        valueMultiplier: 2.5,
        requiredDevelopers: 3
    },
    {
        text: "Develop large app",
        time: 300,
        valueMultiplier: 1,
        requiredDevelopers: 5
    }
];

export const DevelopPanel = () => (
    <div className="develop-panel">
        {developableApp.map(app => <DevelopAppButton {...app} />)}
    </div>
);
