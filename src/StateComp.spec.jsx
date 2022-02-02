import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import React from "react";
import StateComp from "./StateComp";

beforeAll(() => {
  console.log("Now Testing The State Component");
});

test.skip("The State Component", () => {
  expect(undefined).toBe();
});

test("The meaning of life test", () => {
  expect(40 + 2).toBe(42);
});

test("App loads with initial state of 0", () => {
  render(<StateComp />);
  const countText = screen.getByTestId("countText");
  expect(countText.textContent).toBe("State count is 0");
});

test("App state gets incremented when user clicks add button", () => {
  render(<StateComp />);
  const countText = screen.getByTestId("countText");

  fireEvent.click(screen.getByTestId("addButton"));
  expect(countText.textContent).toBe("State count is 1");
});

test("App state gets incremented when user clicks add button multiple times", () => {
  render(<StateComp />);
  const countText = screen.getByTestId("countText");

  for (let index = 1; index < 10; index++) {
    fireEvent.click(screen.getByTestId("addButton"));
    expect(countText.textContent).toBe(`State count is ${index}`);
  }
});
