import { fireEvent, render, screen } from "@testing-library/react";
import { HirePersonButton } from "./hire-person-button";

describe("HirePersonButton", () => {
  const props: any = {
    displayText: "mockText",
    numberOfResources: 0,
    onClick: jest.fn(),
    icon: "pathToIcon",
  };

  const selectorBase = "hire-person-button";

  beforeEach(() => {
    render(<HirePersonButton {...props} />);
  });

  test("renders button", () => {
    const button = screen.getByTestId(selectorBase);
    expect(button).toBeInTheDocument();
  });

  test("props are used properly", () => {
    const icon = screen.getByTestId(`${selectorBase}-icon`);
    const buttonDescription = screen.getByTestId(`${selectorBase}-text`);
    const counter = screen.getByTestId(`${selectorBase}-counter`);

    expect(icon.getAttribute("src")).toBe(props.icon);
    expect(icon.getAttribute("alt")).toBe(props.displayText);
    expect(buttonDescription).toHaveTextContent(props.displayText);
    expect(counter).toHaveTextContent(props.numberOfResources);
  });

  test("handles click event", () => {
    const button = screen.getByTestId(selectorBase);
    fireEvent.click(button);
    expect(props.onClick).toHaveBeenCalled();
  });
});
