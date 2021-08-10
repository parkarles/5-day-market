import React from "react";
import styled from "styled-components";

import MainTemplate from "../main/MainTemplate";
import Grid from "../main/ItemsGrid";
import { MainLogo } from "../../static/svg";

import marketItemList from "../../static/marketItemList";

import Items from "./Items";

function MarketPage() {
    const itemSize = 358;

    return (
        <MainTemplate>
            <LogoContainer>
                <MainLogo />
            </LogoContainer>
            <ItemContainer>
                <Grid size={itemSize}>
                    <Items itemList={marketItemList} itemSize={itemSize} />
                </Grid>
            </ItemContainer>
        </MainTemplate>
    );
}

const ItemContainer = styled.div`
    width: 100%; 
    position: relative;
    overflow: hidden;
`;

const LogoContainer = styled.div`
    width: 100%;
    height: 220px;
    display: flex;
    
    & svg {
        margin: auto;
    }
`;


export default MarketPage;