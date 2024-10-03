import { fireEvent, render, screen } from "@testing-library/react";
import { HumanResources, HumanResourcesProps } from "./human-resources";
import { HumanResourceType } from "../human-resources-model";

describe("HumanResources", () => {
  const props: HumanResourcesProps = {
    humanResourceState: {
      developer: 0,
      tester: 1,
      businessAnalyst: 2,
      productOwner: 3,
    },
    setHumanResourceState: jest.fn(),
  };

  const types = Object.values(HumanResourceType);
  const converCamelCase = (text: string) => {
    const firstLetter = text.slice(0, 1);
    return firstLetter.toUpperCase() + text.slice(1).replace(/([a-z])([A-Z])/g, "$1 $2");
  };

  beforeEach(() => {
    render(<HumanResources {...props} />);
  });

  test("renders buttons with proper text and amount displayed", () => {
    const buttonsContainer = screen.getByTestId("human-resources-panel");
    types.forEach((type) => {
      expect(buttonsContainer).toHaveTextContent(converCamelCase(type) + props.humanResourceState[type]);
    });
  });

  test("click on button updates resourceState ", () => {
    types.forEach((type) => {
      const button = screen.getByText(converCamelCase(type));
      fireEvent.click(button);
      expect(props.setHumanResourceState).toHaveBeenCalledWith({ ...props.humanResourceState, [type]: props.humanResourceState[type]! + 1 });
    });
  });
});
