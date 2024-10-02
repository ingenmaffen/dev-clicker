import { render, screen } from "@testing-library/react";
import App from "./app";

test("renders all containers", () => {
  render(<App />);
  const testIds = ["header-container", "develop-panel", "sell-app-panel", "human-resources-panel"];
  testIds.forEach((selector) => {
    const element = screen.getByTestId(selector);
    expect(element).toBeInTheDocument();
  });
});
