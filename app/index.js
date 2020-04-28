import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
// import createStore from "./redux/store/create";
import { Provider } from "react-redux";
// const store = createStore();
const defaultStore = window.__STORE__ || {};
const store = createStore(defaultStore);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
