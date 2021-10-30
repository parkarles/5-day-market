import * as React from "react";
import { PageProps } from "gatsby";

import ContextProvider from "../../components/base/Layout";
import Contact from "../../components/Contact";

interface IProps extends PageProps {
  id: string;
}

const IndexPage = () => {
  return (
      <ContextProvider>
      <Contact />
      </ContextProvider>
  )
}

export default IndexPage;
