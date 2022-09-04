import './HirePersonButton.css';

export const HirePersonButton = ({displayText, numberOfResources, onClick, icon}) => (
    <button onClick={onClick} className="hire-person-button">
        <div className="left-side">
            <img src={icon} alt={displayText} />
            <span>{displayText}</span>
        </div>
        <div className="right-side">{numberOfResources}</div>
    </button>
);
