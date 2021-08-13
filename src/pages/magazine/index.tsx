import * as React from "react";
import { PageProps } from "gatsby";

import ContextProvider from "../../components/base/Layout";
import Magazine from "../../components/home/Magazine";

interface IProps extends PageProps {
  id: string;
}

const IndexPage = ({ id }: IProps) => {
  return (
      <ContextProvider>
        <Magazine id={id} />
      </ContextProvider>
  )
}

export default IndexPage;
