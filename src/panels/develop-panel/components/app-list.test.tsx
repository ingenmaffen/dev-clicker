import { render, screen } from "@testing-library/react";
import { AppList, AppListProps } from "./app-list";
import { AppType } from "../app-model";

describe("AppList", () => {
  const props: AppListProps = {
    appState: {
      small: 0,
      medium: 0,
      large: 0,
    },
    humanResources: {
      developer: 0,
    },
    setAppState: jest.fn(),
  };

  beforeEach(() => {
    render(<AppList {...props} />);
  });

  test("renders buttons", () => {
    const appTypes = Object.values(AppType);
    const buttonsContainer = screen.getByTestId("develop-panel");
    appTypes.forEach((type) => {
      expect(buttonsContainer).toHaveTextContent(`Develop ${type} App`);
    });
  });

  // TODO: move disabled state check to this component and only pass disabled boolean to common-button
});
