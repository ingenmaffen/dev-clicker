import { MouseEventHandler } from "react";

import "../styles/common-button.css";

interface HirePersonProps {
  displayText: string;
  numberOfResources: number;
  onClick: MouseEventHandler<HTMLButtonElement>;
  icon: string;
}

export const HirePersonButton = ({ displayText, numberOfResources, onClick, icon }: HirePersonProps) => (
  <button onClick={onClick} className="common-button" data-testid="hire-person-button">
    <div className="left-side">
      <img data-testid="hire-person-button-icon" src={icon} alt={displayText} />
      <span data-testid="hire-person-button-text">{displayText}</span>
    </div>
    <div className="right-side" data-testid="hire-person-button-counter">
      {numberOfResources}
    </div>
  </button>
);
