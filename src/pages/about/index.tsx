import * as React from "react";
import { PageProps } from "gatsby";

import ContextProvider from "../../components/base/Layout";
import About from "../../components/about";

interface IProps extends PageProps {
  id: string;
}

const IndexPage = () => {
  return (
    <ContextProvider>
      <About />
    </ContextProvider>
  )
}

export default IndexPage;
