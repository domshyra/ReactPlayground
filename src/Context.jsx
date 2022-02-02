import React, { useReducer } from "react";

const initialState = {
  count: 0,
  selectedItems: []
};

const Store = React.createContext(initialState);

function Reducer(state, action) {
  switch (action.type) {
    case "add": {
      CountUp(state);
      return { ...state };
    }
    case "toggleCheckbox": {
      pushOrSpliceSelectedItemsArray(action.checked, action.itemId, state);
      debugger;
      return { ...state };
    }
    default:
      throw new Error();
  }
}

function CountUp(state) {
  let newCount = state.count + 1;
  state.count = newCount;
  return newCount;
}

//Add or remove from our state.selectedItems array
const pushOrSpliceSelectedItemsArray = (checked, itemId, state) => {
  checked ? state.selectedItems.push(itemId) : state.selectedItems.splice(state.selectedItems.indexOf(itemId), 1);
};


const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};

export { Store, Reducer, Provider, CountUp, pushOrSpliceSelectedItemsArray };
