import { render, screen } from "@testing-library/react";
import App from "./app";

jest.mock("react-apexcharts", () => ({
  __esModule: true,
  default: () => <div></div>,
}));

test("renders app", () => {
  render(<App />);
  const element = screen.getByText(/Dev Clicker/i);
  expect(element).toBeInTheDocument();
});
