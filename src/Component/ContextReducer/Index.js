import React, { useReducer } from "react";
import CreateReducer from "./CreateReducer";

const Index = ({ children }) => {
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };

      case "DECREMENT":
        return { count: state.count > 0 ? state.count - 1 : state.count };

      case "RESET":
        return { coutn: state.count };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CreateReducer.Provider value={{ state, dispatch }}>
      {children}
    </CreateReducer.Provider>
  );
};

export default Index;
