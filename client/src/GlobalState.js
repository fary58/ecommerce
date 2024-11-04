import { createContext, useEffect } from "react";
import ProductAPI from "./api/ProductAPI";
import { useState } from "react";
import axios from "axios";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  const state = {
    token: [token, setToken],
    productsAPI: ProductAPI(),
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
