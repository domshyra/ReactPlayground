import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const Store = React.createContext(initialState);

function Reducer(state, action) {
  switch (action.type) {
    case "add": {
      state.count = CountUp(state);
      return { ...state };
    }
    default:
      throw new Error();
  }
}

function CountUp(state) {
  return state.count + 1;
}

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};

export { Store, Reducer, CountUp, Provider };
