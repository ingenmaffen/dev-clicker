import { act, fireEvent, render, screen } from "@testing-library/react";
import App from "./app";

test("renders all containers", () => {
  render(<App />);
  const testIds = ["header-container", "app-list", "sell-app-panel", "human-resources-panel"];
  testIds.forEach((testId) => {
    const element = screen.getByTestId(testId);
    expect(element).toBeInTheDocument();
  });
});

describe("AppList functionality", () => {
  beforeEach(() => {
    jest.useRealTimers();
    render(<App />);
  });

  test("clicking on app starts timer and makes button disabled", () => {
    const buttonText = "Develop small App";
    const developPanel = screen.getByTestId("app-list");
    const smallAppButton = developPanel.children[0];

    expect(smallAppButton).toHaveTextContent(buttonText);
    expect(smallAppButton).not.toHaveTextContent(buttonText + "(");
    expect(smallAppButton.getAttribute("disabled")).toBeNull();

    fireEvent.click(smallAppButton);
    expect(smallAppButton).toHaveTextContent(buttonText);
    expect(smallAppButton).toHaveTextContent(buttonText + "(01:00)");
    expect(smallAppButton.getAttribute("disabled")).not.toBeNull();
  });

  test("after the timer runs out the button gets re-enabled and appType gets incremented", () => {
    jest.useFakeTimers();

    const buttonText = "Develop small App";
    const developPanel = screen.getByTestId("app-list");
    const smallAppButton = developPanel.children[0];

    const sellAppPanel = screen.getByTestId("sell-app-panel");
    const sellAppSelectText = "Sell small App: ";

    expect(sellAppPanel).toHaveTextContent(sellAppSelectText + "0");

    fireEvent.click(smallAppButton);
    expect(smallAppButton).toHaveTextContent(buttonText);
    expect(smallAppButton).toHaveTextContent(buttonText + "(01:00)");
    expect(smallAppButton.getAttribute("disabled")).not.toBeNull();

    act(() => jest.advanceTimersByTime(1000));
    expect(smallAppButton).toHaveTextContent(buttonText + "(00:59)");
    expect(sellAppPanel).toHaveTextContent(sellAppSelectText + "0");

    act(() => jest.advanceTimersByTime(60 * 1000));

    expect(smallAppButton).toHaveTextContent(buttonText);
    expect(smallAppButton).not.toHaveTextContent(buttonText + "(");
    expect(smallAppButton.getAttribute("disabled")).toBeNull();
    expect(sellAppPanel).toHaveTextContent(sellAppSelectText + "1");
  });
});
