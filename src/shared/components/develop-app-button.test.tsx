import { act, fireEvent, render, screen } from "@testing-library/react";
import { DevelopAppButton } from "./develop-app-button";
import { AppType } from "../../panels/develop-panel/app-model";
import { formatTime } from "../utils/format-time";

describe("DevelopAppButton", () => {
  const props: any = {
    incrementAppByType: jest.fn(),
    type: AppType.SMALL,
    icon: "pathToIcon",
    humanResources: {
      developer: 0,
    },
    requiredDevelopers: 0,
    time: 5,
  };

  let button: HTMLElement;
  let icon: HTMLElement;
  let buttonDescription: HTMLElement;
  let timer: HTMLElement;

  beforeEach(() => {
    render(<DevelopAppButton {...props} />);
    button = screen.getByTestId("develop-button");
    icon = screen.getByTestId("develop-button-icon");
    buttonDescription = screen.getByTestId("develop-button-text");
    timer = screen.getByTestId("develop-button-timer");
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test("renders button", () => {
    expect(button).toBeInTheDocument();
  });

  test("props are used properly", () => {
    expect(icon.getAttribute("src")).toBe(props.icon);
    expect(icon.getAttribute("alt")).toBe(props.type);
    expect(buttonDescription).toHaveTextContent(`Develop ${props.type} App`);
  });

  test("clicking on button sets timer", () => {
    expect(timer).toHaveTextContent("");

    fireEvent.click(button);
    expect(timer).toHaveTextContent(formatTime(props.time));
  });

  test("timer disappears after it's finished", () => {
    jest.useFakeTimers();

    expect(timer).toHaveTextContent("");

    fireEvent.click(button);
    expect(timer).toHaveTextContent(formatTime(props.time));

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(timer).toHaveTextContent(formatTime(props.time - 1));

    act(() => {
      jest.advanceTimersByTime(1000 * props.time);
    });
    expect(timer).toHaveTextContent("");
    expect(props.incrementAppByType).toHaveBeenCalledWith(props.type);
  });

  // TODO: have unit test to check disabled state after refactor
});
