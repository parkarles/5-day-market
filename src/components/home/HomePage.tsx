import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, navigate } from "gatsby";

import MainTemplate from "../main/MainTemplate";
import Grid from "../main/ItemsGrid";

import homeItemList from "../../static/homeItemList";
import palette from "../../lib/styles/palette";
import { HomeLogo } from "../../static/svg";
import Items from "./Items";

function HomePage() {
    const itemSize = 358;
    const data = useStaticQuery(graphql`
        query {
            logoImage: file(name: {eq: "home_image"}) {
                publicURL
            }
        }
    `);

    return (
        <MainTemplate>
                <GradientBackground />
            <InfoWrapper>
                <InfoContainer img={data.logoImage.publicURL}>
                    <div style={{marginLeft: '60px'}}>
                        <HomeLogo />
                        <h3>
                            Meet traditional products with Korea's unique atmosphere and a long time of craftsmen.
                        </h3>
                        <h4>
                            한국의 고유한 정취와 장인의 오랜시간 정성이 깃든 전통제품들을 만나보세요.
                        </h4>
                        {/* <Button>Get Start</Button> */}
                    </div>
                </InfoContainer>
            </InfoWrapper>
            <ItemContainer>
                <Grid size={itemSize}>
                    <Items itemList={homeItemList} itemSize={itemSize} />
                </Grid>
            </ItemContainer>
            <GradientBox onClick={()=>{navigate('/subscribe')}}> 
                <p> 구독하기 </p>
            </GradientBox>
        </MainTemplate>
    );
}

const Button = styled.div`
    display: inline-block;
    padding: 12px 40px;
    border: 2px solid ${palette.brown3};
    font-size: 1.625rem;
    color: ${palette.brown3};
    cursor: pointer;
    &:hover {
        opacity: 1;
        background-color: #ffffff20;
    }
`;

const GradientBackground = styled.div`
    z-index: -1;
    width: 100%; height: 100%;
    position: absolute; left: 0px; top: 0px;
    background: linear-gradient(${palette.orange2_p40}, ${palette.ivory0_00});
`;

const InfoWrapper = styled.div`
    padding: 140px 0px;
    background-size: 100px 100px;
    background-image: linear-gradient(#FFFFFF44 .1em,transparent .1em),linear-gradient(90deg,#FFFFFF44 .1em,transparent .1em);
`;

const InfoContainer = styled.div<{ img: string}>`
    max-width: 1200px;
    margin: auto;
    background-image: url(${({ img }) => img});
    background-position: right;
    background-size: contain;
    background-repeat: no-repeat;
    padding: 77px 0px;
    h3, h4 {
        max-width: 380px;
        white-space: break-spaces;
        margin-bottom: 28px;
    }
    h3 {
        font-weight: bold;
        font-size: 1.875rem;
        color: ${palette.brown3};
    }
    h4 {
        font-weight: normal;
        font-size: 1.125rem;
        line-height: 2.5;
        color: ${palette.brown3};
    }
`;

const ItemContainer = styled.div`
    width: 100%; 
    position: relative;
    overflow: hidden;
`;

const GradientBox = styled.div`
    cursor: pointer;
    width: 100%;
    height: 50px;
    display: flex;
    justify-items: center;
    align-items: center;
    background: ${palette.orange0};
    background: linear-gradient(90deg, ${palette.orange0} 0%, ${palette.orange0_p40} 100%);
    & p {
        color: ${palette.white0};
        font-size: 1.3rem;
        text-align: center;
        margin: auto;
    }
`;


export default HomePage;