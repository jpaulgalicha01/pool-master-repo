import React, { useState, createContext, useContext } from "react";

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [globalData, setGlobalData] = useState({
    ProdId: "",
    ProdCost: 0,
    ProdQty: 0,
  });

  return (
    <GlobalStateContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
