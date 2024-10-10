import { useEffect, useReducer } from "react";

import { formatTime } from "../utils/format-time";
import { AppType } from "../../panels/develop-panel/app-model";
import "../styles/common-button.css";

enum TimeReducerActionType {
  DECREASE = "decrease",
  SET = "set",
}

interface TimeReducerAction {
  type: TimeReducerActionType;
  value?: number;
}

interface DevelopAppButtonProps {
  incrementAppByType: (type: AppType) => void;
  type: AppType;
  icon: string;
  time: number;
  isDisabled: boolean;
}

const updateTimer = (state: number, action: TimeReducerAction): number => {
  switch (action.type) {
    case TimeReducerActionType.DECREASE:
      return state - 1;
    case TimeReducerActionType.SET:
      return action.value! | 0;
  }
};

export const DevelopAppButton = (props: DevelopAppButtonProps) => {
  const { incrementAppByType, type, icon, time, isDisabled } = props;
  const [timer, dispatch] = useReducer(updateTimer, Number.MIN_SAFE_INTEGER);

  useEffect(() => {
    if (timer <= 0 && timer !== Number.MIN_SAFE_INTEGER) {
      incrementAppByType(type);
    }
    const intervalId = setInterval(() => {
      if (timer > 0) {
        dispatch({ type: TimeReducerActionType.DECREASE });
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timer]);

  const handleClick = () => {
    if (timer <= 0) {
      dispatch({ type: TimeReducerActionType.SET, value: time });
    } else {
      dispatch({ type: TimeReducerActionType.DECREASE });
    }
  };

  return (
    <button onClick={handleClick} className="common-button" data-testid="develop-button" disabled={isDisabled}>
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
