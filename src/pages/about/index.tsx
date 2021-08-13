import * as React from "react";
import { PageProps } from "gatsby";

import ContextProvider from "../../components/base/Layout";
import Home from "../../components/home/HomePage";

interface IProps extends PageProps {
  id: string;
}

const IndexPage = () => {
  return (
    <ContextProvider>
      <Home />
    </ContextProvider>
  )
}

export default IndexPage;
