import "./CommonButton.css";
import { MouseEventHandler } from "react";

interface HirePersonProps {
  displayText: string;
  numberOfResources: number;
  onClick: MouseEventHandler<HTMLButtonElement>;
  icon: string;
}

export const HirePersonButton = ({ displayText, numberOfResources, onClick, icon }: HirePersonProps) => (
  <button onClick={onClick} className="common-button">
    <div className="left-side">
      <img src={icon} alt={displayText} />
      <span>{displayText}</span>
    </div>
    <div className="right-side">{numberOfResources}</div>
  </button>
);
