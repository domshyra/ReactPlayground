import {CountUp} from './Context'

beforeAll(() => {
  console.log("Now Testing The Dispatch Component");
});

test.skip("The Dispatch Component", () => {
  expect(undefined).toBe();
});



test("The Dispatch Component should add", () => {
  const initState = {
    count: 0
  }

  let result = CountUp(initState);
  console.log(initState);

  expect(result).toBe(initState.count);
});
