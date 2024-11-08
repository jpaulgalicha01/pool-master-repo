import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
  const [globalData, setGlobalData] = useState([]);

  return (
    <GlobalContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </GlobalContext.Provider>
  );
}
