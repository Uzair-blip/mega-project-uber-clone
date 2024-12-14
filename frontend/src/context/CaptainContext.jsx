import React, { createContext, useState } from "react";

export const captainDataContext = createContext();

export const CaptainProvider = ({ children }) => {
  const [captain, setCaptain] = useState(null);

  return (
    <captainDataContext.Provider value={[captain, setCaptain]}>
      {children}
    </captainDataContext.Provider>
  );
};
