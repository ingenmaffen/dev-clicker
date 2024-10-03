import { render, screen } from "@testing-library/react";
import { SellPriceChart } from "./sell-pricechart";

describe("SellPriceChart", () => {
  const props: any = {
    setPriceState: jest.fn(),
  };

  beforeEach(() => {
    jest.useRealTimers();
    render(<SellPriceChart {...props} />);
  });

  test("renders mock chart", () => {
    const mockChart = screen.getByTestId("mock-chart");
    expect(mockChart).toBeInTheDocument();
  });

  test("call setPriceState on first render", () => {
    expect(props.setPriceState).toHaveBeenCalledTimes(1);
  });

  // TODO: unit test for setPriceState being called after 60s
});
