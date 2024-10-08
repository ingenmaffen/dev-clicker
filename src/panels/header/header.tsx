import "./header.css";

interface HeaderProps {
  money: number;
}

const urlToSource = "https://github.com/ingenmaffen/dev-clicker";

export const Header = ({ money }: HeaderProps) => (
  <div data-testid="header-container">
    <a href={urlToSource} className="source">
      {urlToSource}
    </a>
    <h1 className="title">
      <img className="logo" src={"logo512.png"} alt={"logo"} />
      <span>Dev Clicker</span>
    </h1>
    <div className="info-container">
      <div className="placeholder"></div>
      <div className="money-container">$ {money}</div>
    </div>
  </div>
);
