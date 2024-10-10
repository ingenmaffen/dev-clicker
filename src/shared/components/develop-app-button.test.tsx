import { act, fireEvent, render, screen } from "@testing-library/react";
import { DevelopAppButton, DevelopAppButtonProps } from "./develop-app-button";
import { AppType } from "../../panels/develop-panel/app-model";
import { formatTime } from "../utils/format-time";

describe("DevelopAppButton", () => {
  const props: DevelopAppButtonProps = {
    incrementAppByType: jest.fn(),
    type: AppType.SMALL,
    icon: "pathToIcon",
    time: 5,
    isDisabled: false,
  };

  let button: HTMLElement;
  let icon: HTMLElement;
  let buttonDescription: HTMLElement;
  let timer: HTMLElement;

  const getHTMLElements = () => {
    button = screen.getByTestId("develop-button");
    icon = screen.getByTestId("develop-button-icon");
    buttonDescription = screen.getByTestId("develop-button-text");
    timer = screen.getByTestId("develop-button-timer");
  };

  afterEach(() => {
    jest.useRealTimers();
  });

  describe("enabled", () => {
    beforeEach(() => {
      render(<DevelopAppButton {...props} />);
      getHTMLElements();
    });

    test("renders button", () => {
      expect(button).toBeInTheDocument();
    });

    test("button is not disabled", () => {
      expect(button.getAttribute("disabled")).toBeNull();
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
  });

  describe("disabled", () => {
    const updatedProps = { ...props, isDisabled: true };

    beforeEach(() => {
      render(<DevelopAppButton {...updatedProps} />);
      getHTMLElements();
    });

    test("button is disabled", () => {
      expect(button.getAttribute("disabled")).toBe("");
    });

    test("clicking on button does not start the timer", () => {
      expect(timer).toHaveTextContent("");

      fireEvent.click(button);
      expect(timer).not.toHaveTextContent(formatTime(props.time));
      expect(timer).toHaveTextContent("");
    });
  });
});
