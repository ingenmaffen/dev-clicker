import "./AppHeader.css";

export const AppHeader = ({money}) => (
    <>
        <h1 className="title">
            <img className="logo" src={"logo512.png"} alt={"logo"} />
            <span>Dev Clicker</span>
        </h1>
        <div className="info-container">
            <div className="placeholder"></div>
            <div className="money-container">$ {money}</div>
        </div>
    </>
)