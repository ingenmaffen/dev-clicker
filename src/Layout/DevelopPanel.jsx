import './DevelopPanel.css';
import { DevelopAppButton } from "../Common/DevelopAppButton";
import { developableAppProperties } from "../Common/DevelopableAppProperties";

export const DevelopPanel = ({appState, setAppState, humanResources}) => {
    const developApp = (appType) => {
        const updatedAppState = {
            ...appState,
            [appType]: appState[appType] + 1
        }
        setAppState(updatedAppState);
    };

    return (
        <div className="develop-panel">
            {developableAppProperties.map(app =>
                <DevelopAppButton humanResources={humanResources} incrementAppByType={developApp} key={app.type} {...app} />
            )}
        </div>
    );
};
