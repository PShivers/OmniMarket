import React from "react";
import store from "../src/redux/store"
import Home from "../src/components/Home";
import { Provider } from "react-redux";

export default function Index(products: string[]) {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Home />
      </Provider>
    </React.StrictMode>
  
  )
}
