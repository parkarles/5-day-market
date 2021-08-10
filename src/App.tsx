import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import ContextProvider from "./components/base/Layout";
import { Helmet } from "react-helmet-async";

import Home from "./components/home/HomePage";
import Magzine from "./components/home/Magzine";
import Market from "./components/market/MarketPage";

const App: React.FC = () => {
  return (
    <ContextProvider>
      <Helmet>
        <title>5-days market</title>
        <meta
          name="description"
          content="한국의 전통 오일장"
          charSet="utf-8"
        />
      </Helmet>
        <Switch>
          <Route path="/" component={Home} exact />
        <Route path="/magazine/:id" component={Magzine} />
          <Route path="/market" component={Market} />
          <Route path="/contact" component={Home} />
          <Route path="/about" component={Home} />
        </Switch>
    </ContextProvider>
  );
}

export default App;
