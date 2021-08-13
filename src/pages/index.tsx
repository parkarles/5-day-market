import * as React from "react";

import ContextProvider from "../components/base/Layout";
import Home from "../components/home/HomePage";


const IndexPage = () => {
  return (
      <ContextProvider>
        <Home />
      </ContextProvider>
  )
}

export default IndexPage;
