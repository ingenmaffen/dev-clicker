import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SellControlProps, SellControls } from "./sell-controls";
import { AppType } from "../../../develop-panel/app-model";

describe("SellControls", () => {
  const props: SellControlProps = {
    money: 0,
    setMoney: jest.fn(),
    apps: {
      small: 3,
      medium: 2,
      large: 3,
    },
    setApps: jest.fn(),
  };

  const appTypes = Object.values(AppType);
  const getText = (appType: AppType, volume: number) => {
    return `Sell ${appType} App: ${volume}`;
  };

  let select: HTMLElement;
  let sellButton: HTMLElement;

  beforeEach(() => {
    render(<SellControls {...props} />);
    select = screen.getByTestId("sell-app-select");
    sellButton = screen.getByTestId("sell-app-button");
  });

  test("renders select and button", () => {
    expect(select).toBeInTheDocument();
    expect(sellButton).toBeInTheDocument();
  });

  test("select has all elements with proper values", () => {
    expect(select).toHaveTextContent(getText(AppType.SMALL, props.apps.small));
    expect(select).toHaveTextContent(getText(AppType.MEDIUM, props.apps.medium));
    expect(select).toHaveTextContent(getText(AppType.LARGE, props.apps.large));
  });

  test("sell button has proper text", () => {
    expect(sellButton).toHaveTextContent("Sell App");
  });

  test("selling selected app works", () => {
    appTypes.forEach((appType) => {
      userEvent.selectOptions(select, appType);
      const initialValue = props.apps[appType];
      expect(select).toHaveTextContent(getText(appType, props.apps[appType]));

      fireEvent.click(sellButton);
      expect(props.setApps).toHaveBeenCalledWith(expect.objectContaining({ [appType]: initialValue - 1 }));
    });
  });
});
