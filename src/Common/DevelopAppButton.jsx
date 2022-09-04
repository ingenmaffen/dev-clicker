import './DevelopAppButton.css';

export const DevelopAppButton = ({text, numberOfApps, onClick, type}) => (
    <button onClick={() => onClick(type)} className="develop-app-button">{text}: {numberOfApps}</button>
);
