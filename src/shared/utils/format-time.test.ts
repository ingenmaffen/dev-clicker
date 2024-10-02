import { formatTime, formatTimeWithoutParenthesis } from "./format-time";

describe("formatTime()", () => {
  test("handles values less than a minute", () => expect(formatTime(45)).toEqual("(00:45)"));
  test("handles values over a minute", () => expect(formatTime(75)).toEqual("(01:15)"));
  test("converts single digits to double-digit format", () => expect(formatTime(1)).toEqual("(00:01)"));
  test("handles exact minute values properly", () => expect(formatTime(60)).toEqual("(01:00)"));
  test("handles values over double-digit format", () => expect(formatTime(6000)).toEqual("(100:00)"));
  test("return empty string for 0", () => expect(formatTime(0)).toEqual(""));
  test("return empty string for negative value", () => expect(formatTime(-1)).toEqual(""));
});

describe("formatTimeWithoutParenthesis()", () => {
  test("handles values less than a minute", () => expect(formatTimeWithoutParenthesis(45)).toEqual("00:45"));
  test("handles values over a minute", () => expect(formatTimeWithoutParenthesis(75)).toEqual("01:15"));
  test("converts single digits to double-digit format", () => expect(formatTimeWithoutParenthesis(1)).toEqual("00:01"));
  test("handles exact minute values properly", () => expect(formatTimeWithoutParenthesis(60)).toEqual("01:00"));
  test("handles values over double-digit format", () => expect(formatTimeWithoutParenthesis(6000)).toEqual("100:00"));
  test("return 00:00 for 0", () => expect(formatTimeWithoutParenthesis(0)).toEqual("00:00"));
  test("return empty string for negative value", () => expect(formatTimeWithoutParenthesis(-1)).toEqual(""));
});
