import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case "SET_ALL_PRODUCTS": {
      return {
        ...state,
      };
    }
    default:
      throw new Error("Error action");
  }
}

const GlobalContextProvider = ({ children }) => {
  const initState = {};
  const [state, dispatch] = React.useReducer(reducer, initState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

/**
 * Компонент-обертка, содержит основное хранилище данных
 * @module src/context/GlobalContextProvider
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.children - объект с дочерними компонентами
 */
export default GlobalContextProvider;
