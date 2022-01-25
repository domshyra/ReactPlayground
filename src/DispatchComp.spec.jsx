import {CountUp, Reducer} from './Context'

let initState = {};

beforeAll(() => {
  console.log("Now Testing The Dispatch Component");

  initState = {
    count: 0
  }
});


test("The Dispatch Component should add when calling CountUp", () => {
  let expected = initState.count + 1;

  let result = CountUp(initState);

  expect(expected).toBe(initState.count);
  expect(expected).toBe(result);
});

test("The Dispatch Component should add when called from reducer", () => {

  let expected = initState.count + 1;

  Reducer(initState, {type: "add"});

  expect(expected).toBe(initState.count);
});
