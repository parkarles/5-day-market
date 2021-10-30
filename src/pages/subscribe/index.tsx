import * as React from "react";
import { PageProps } from "gatsby";

import ContextProvider from "../../components/base/Layout";
import Subscribe from "../../components/home/SubscribePage";

interface IProps extends PageProps {
    id: string;
}

const IndexPage = ({ id }: IProps) => {
    return (
        <ContextProvider>
            <Subscribe id={id} />
        </ContextProvider>
    )
}


export default IndexPage;
