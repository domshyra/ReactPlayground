import { CountUp, Reducer } from "./Context";

let initState = {};

beforeAll(() => {
  console.log("Now Testing The Dispatch Component");
});

beforeEach(() => {
  initState = {
    count: 0,
    selectedItems: []
  };
});

test("The Dispatch Component should add when calling CountUp", () => {
    let expected = initState.count + 1;

    let result = CountUp(initState);

    expect(expected).toBe(initState.count);
    expect(expected).toBe(result);

});

test("The Dispatch Component should add when called from reducer", () => {
  let expected = initState.count + 1;

  Reducer(initState, { type: "add" });
  expect(expected).toBe(initState.count);
});


test("The Dispatch Component should add a selected item when called from reducer", () => {
    let expected = [1];
    
    Reducer(initState, { type: "toggleCheckbox", checked:true, itemId: 1 });
    expect([...expected]).toStrictEqual([...initState.selectedItems]);
    
});


test("The Dispatch Component should remove a selected item when called from reducer", () => {
  let expected = [];
  initState.selectedItems.push(1);
  
  Reducer(initState, { type: "toggleCheckbox", checked:false, itemId: 1 });
  expect([...expected]).toStrictEqual([...initState.selectedItems]);
  
});

