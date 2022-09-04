import './DevelopPanel.css';
import { DevelopAppButton } from "../Common/DevelopAppButton";

const developableApp = [
    {
        text: "Develop a small app",
        type: "small",
        time: 60,
        valueMultiplier: 1,
        requiredDevelopers: 0
    },
    {
        text: "Develop medium app",
        type: "medium",
        time: 150,
        valueMultiplier: 2.5,
        requiredDevelopers: 3
    },
    {
        text: "Develop large app",
        type: "large",
        time: 300,
        valueMultiplier: 1,
        requiredDevelopers: 5
    }
];

export const DevelopPanel = ({appState, setAppState}) => {
    const developApp = (appType) => {
        const updatedAppState = {
            ...appState,
            [appType]: appState[appType] + 1
        }
        setAppState(updatedAppState);
    };

    return (
        <div className="develop-panel">
            {developableApp.map(app =>
                <DevelopAppButton onClick={developApp} numberOfApps={appState[app.type]} key={app.type} {...app} />
            )}
        </div>
    );
};
