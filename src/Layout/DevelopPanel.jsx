import './DevelopPanel.css';
import { DevelopAppButton } from "../Common/DevelopAppButton";
import { developableAppProperties } from "../Common/DevelopableAppProperties";

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
            {developableAppProperties.map(app =>
                <DevelopAppButton onClick={developApp} numberOfApps={appState[app.type]} key={app.type} {...app} />
            )}
        </div>
    );
};
