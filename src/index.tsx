import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import rootReducer from "./modules";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reportWebVitals from "./reportWebVitals";
import { HelmetProvider } from "react-helmet-async";

const store = createStore(
  rootReducer,
  (window as any).__REDUX_STATE__,
  composeWithDevTools(),
);

ReactDOM.render(
  <HelmetProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </HelmetProvider>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
