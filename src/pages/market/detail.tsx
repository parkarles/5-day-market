import * as React from "react";
import { PageProps } from "gatsby";

import ContextProvider from "../../components/base/Layout";
import Detail from "../../components/market/Detail";
import NotFiveDay from "../../components/market/NotFiveDay";

interface IProps extends PageProps {
    id: string;
}

const IndexPage = ({ id }: IProps) => {
    return (
        <ContextProvider>
            {
                !isNaN(+id) ?
                    <Detail id={id} />:
                    <NotFiveDay />
            }
        </ContextProvider>
    )
}


export default IndexPage;
