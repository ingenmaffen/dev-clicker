import './HirePersonButton.css';

export const HirePersonButton = ({displayText, numberOfResources, onClick}) => (
    <button onClick={onClick} className="hire-person-button">{displayText}: {numberOfResources}</button>
);
