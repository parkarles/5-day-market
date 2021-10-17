import * as React from "react";
import { PageProps } from "gatsby";

import ContextProvider from "../../components/base/Layout";
import NotFiveDay from "../../components/market/NotFiveDay";

interface IProps extends PageProps {
}

const IndexPage = ({ }: IProps) => {
    return (
        <ContextProvider>
            <NotFiveDay />
        </ContextProvider>
    )
}

export default IndexPage;
