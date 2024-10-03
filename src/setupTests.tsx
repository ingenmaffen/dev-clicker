import "@testing-library/jest-dom";

jest.mock("react-apexcharts", () => ({
  __esModule: true,
  default: () => <div data-testid="mock-chart"></div>,
}));
