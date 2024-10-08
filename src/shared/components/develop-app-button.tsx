import { useState } from "react";

import { formatTime } from "../utils/format-time";
import { AppType } from "../../panels/develop-panel/app-model";
import "../styles/common-button.css";
import { HumanResourceState } from "../game-state";

interface DevelopAppButtonProps {
  incrementAppByType: (type: AppType) => void;
  type: AppType;
  icon: string;
  humanResources: HumanResourceState;
  requiredDevelopers: number;
  time: number;
}

export const DevelopAppButton = (props: DevelopAppButtonProps) => {
  const { incrementAppByType, type, icon, humanResources, requiredDevelopers, time } = props;
  const [timer, setTimer] = useState(0);
  const getButtonDisabledState = () => {
    return requiredDevelopers > humanResources.developer || timer > 0;
  };

  const decreaseTimerValue = (newValue: number) => {
    setTimeout(() => {
      setTimer(newValue);
      if (newValue > 0) decreaseTimerValue(newValue - 1);
      if (newValue <= 0) {
        setTimer(0);
        incrementAppByType(type);
      }
    }, 1000);
  };

  const handleClick = () => {
    setTimer(time);
    decreaseTimerValue(time - 1);
  };

  // TODO: button shouldn't be disabled; clicking on it should decrease the timer (if no timer is present, set it first)
  return (
    <button onClick={handleClick} className="common-button" data-testid="develop-button" disabled={getButtonDisabledState()}>
      <div className="left-side">
        <img data-testid="develop-button-icon" src={icon} alt={type} />
        <span data-testid="develop-button-text">Develop {type} App</span>
      </div>
      <div className="right-side" data-testid="develop-button-timer">
        {formatTime(timer)}
      </div>
    </button>
  );
};
