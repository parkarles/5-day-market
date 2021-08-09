import React from "react";
import styled from "styled-components";

import MainTemplate from "./main/MainTemplate";
import Grid from "./main/ItemsGrid";
import { MainLogo } from "../static/svg";

import homeItemList from "../static/homeItemList";
import palette from "../lib/styles/palette";

import Items from "./Home/Items";

function MarketPage() {
    const itemSize = 358;

    return (
        <MainTemplate>
            <LogoContainer>
                <MainLogo />
            </LogoContainer>
            <ItemContainer>
                <Grid size={itemSize}>
                    <Items itemList={homeItemList} itemSize={itemSize} />
                </Grid>
            </ItemContainer>
            <GradientBox>
                <p>Subscribe Now</p>
            </GradientBox>
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

const GradientBox = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-items: center;
    align-items: center;
    background: ${palette.orange0};
    background: linear-gradient(90deg, ${palette.orange0} 0%, ${palette.orange0_p40} 100%);
    & p {
        color: ${palette.white0};
        font-size: 1.5rem;
        text-align: center;
        margin: auto;
    }
`;


export default MarketPage;