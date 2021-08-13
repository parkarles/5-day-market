import * as React from "react";
import { PageProps } from "gatsby";

import ContextProvider from "../../components/base/Layout";
import FundingPage from "../../components/funding/FundingPage";

interface IProps extends PageProps {
  id: string;
}

const IndexPage = ({ id }: IProps) => {
  return (
    <ContextProvider>
      <FundingPage id={id} />
    </ContextProvider>
  )
}

export default IndexPage;
