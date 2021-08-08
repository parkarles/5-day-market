import React from "react";
import { Route, Switch } from 'react-router-dom';
import "./App.css";
import ContextProvider from "./contexts/Layout";
import { Helmet } from 'react-helmet-async';

import Home from "./components/Home";
import Header from "./components/Header";

// interface AppProps {}

const App: React.FC = (props) => {
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
          <Route path="/abc" component={Home} />
        </Switch>
    </ContextProvider>
  );
}

export default App;
