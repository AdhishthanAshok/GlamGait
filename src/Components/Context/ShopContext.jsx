import React, { createContext } from "react";
import data_product from "../assets/data.js";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { data_product };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
