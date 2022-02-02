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
  //TODO
});

test("App state gets incremented when user clicks add button", () => {
  //TODO

});

test("App state gets incremented when user clicks add button multiple times", () => {
  //TODO

});
