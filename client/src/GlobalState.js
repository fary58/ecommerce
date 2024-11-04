import { createContext, useEffect } from "react";
import ProductAPI from "./api/ProductAPI";
import { useState } from "react";
import axios from "axios";

export const GlobalState = createContext();

export const DataProvider = ({ props }) => {
    ProductAPI();
  return (
    <GlobalState.Provider value={"Global"}>{props.children}</GlobalState.Provider>
    
  );
};
