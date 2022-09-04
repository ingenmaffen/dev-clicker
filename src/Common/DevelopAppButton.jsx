import { useState } from 'react';
import './CommonButton.css';

export const DevelopAppButton = ({incrementAppByType, type, icon, humanResources, requiredDevelopers, time}) => {
    const [timer, setTimer] = useState(0);
    const getButtonDisabledState = () => {
        return requiredDevelopers > humanResources.developer || timer > 0;
    }

    const decreaseTimerValue = (newValue) => {
        setTimeout(() => {
            setTimer(newValue);
            if (newValue > 0) decreaseTimerValue(newValue - 1);
            if (newValue <= 0) {
                setTimer(0);
                incrementAppByType(type);
            }
        }, 1000);
    }

    const handleClick = () => {
        setTimer(time);
        decreaseTimerValue(time - 1);
    }

    const formatTime = (currentTime) => {
        const minute = Math.floor(currentTime / 60);
        const second = currentTime % 60;
        return currentTime > 0 ? `(${formatNumberToString(minute)}:${formatNumberToString(second)})` : '';
    }

    const formatNumberToString = (number) => {
        return number < 10 ? `0${number}` : `${number}`;
    }

    return (
        <button
            onClick={handleClick}
            className="common-button"
            disabled={getButtonDisabledState()}>
            <div className="left-side">
                <img src={icon} alt={type} />
                <span>Develop {type} App</span>
            </div>
            <div className="right-side">{formatTime(timer)}</div>
        </button>
    );
};