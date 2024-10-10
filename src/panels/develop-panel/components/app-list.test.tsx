import { render, screen } from "@testing-library/react";
import { AppList, AppListProps } from "./app-list";
import { AppType } from "../app-model";

describe("AppList", () => {
  const props: AppListProps = {
    apps: {
      small: 0,
      medium: 0,
      large: 0,
    },
    humanResources: {
      developer: 0,
    },
    setApps: jest.fn(),
  } as any;

  beforeEach(() => {
    render(<AppList {...props} />);
  });

  test("renders buttons", () => {
    const appTypes = Object.values(AppType);
    const buttonsContainer = screen.getByTestId("app-list");
    appTypes.forEach((type) => {
      expect(buttonsContainer).toHaveTextContent(`Develop ${type} App`);
    });
  });
});
