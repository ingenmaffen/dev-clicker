import { getXValues, getYValues, shiftYValues, getChartData } from "./chart-data";
import { formatTimeWithoutParenthesis } from "../../../../shared/utils/format-time";

describe("getXValues()", () => {
  test("returns string array with the past 10 minutes", () => {
    const dateTime = new Date();
    const currentTimeInMinutes = dateTime.getHours() * 60 + dateTime.getMinutes();
    const xValues = getXValues();

    expect(xValues.length).toBe(10);
    expect(xValues[9]).toBe(formatTimeWithoutParenthesis(currentTimeInMinutes));
  });
});

describe("getYValues()", () => {
  test("returns 10 random number between 5 and 250", () => {
    const yValues = getYValues();

    expect(yValues.length).toBe(10);
    yValues.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(5);
      expect(value).toBeLessThanOrEqual(250);
    });
  });
});

describe("shiftYValues()", () => {
  test("removes first item and adds new item at the end", () => {
    const originalYValues = getYValues();
    const updatedYValues = shiftYValues(originalYValues);

    expect(originalYValues.length).toEqual(updatedYValues.length);
    for (let i = 0; i < updatedYValues.length - 1; i++) {
      expect(updatedYValues[i]).toEqual(originalYValues[i + 1]);
    }
    expect(updatedYValues[9]).toBeGreaterThanOrEqual(5);
    expect(updatedYValues[9]).toBeLessThanOrEqual(250);
  });
});

describe("getChartData()", () => {
  test("returns data based on input values", () => {
    const xValues = getXValues();
    const yValues = getYValues();
    const chartData = getChartData(xValues, yValues);

    expect(chartData.options.xaxis?.categories).toEqual(xValues);
    expect(chartData.series[0].data).toEqual(yValues);
  });
});
