import "./AppHeader.css";

export const AppHeader = ({money}) => (
    <>
        <h1 class="title">Dev Clicker</h1>
        <div class="info-container">
            <div class="placeholder"></div>
            <div class="money-container">${money}</div>
        </div>
    </>
)