import React from "react";
import styled from "styled-components";
import MainTemplate from "../main/MainTemplate";

import palette from "../../lib/styles/palette";

import marketItemList, { ItemType } from "../../static/marketItemList";
import FundingTab from "./FundingTab";
type LayoutProps = {
    id: string;
    item?: ItemType;
}


function Detail({ id }: LayoutProps) {
    const itemList = marketItemList.reduce(function (acc, cur) {
        return acc.concat(cur);
    });
    const item: ItemType = itemList[+id-1];

    // if (item === undefined && typeof window !== "undefined") {
    //     window.alert('유효하지 않은 접근입니다.');
    //     navigate(-1);
    // }

    return (
        <MainTemplate>
            <Container>
                <Block>
                    <Title>
                        <h2> {item.enTitle} </h2>
                        <h3> {item.title} </h3>
                        <h4> {item.content?.master}</h4>
                    </Title>
                </Block>
            </Container>
            <Container>
                <Block>
                    <Gallery>
                        {
                            item.content?.productImages.map((images) => {
                                return (
                                    <div key={images[0]} className={images.length > 1 ? "flx" : undefined}>
                                        {
                                            images.map((image) => (
                                                <div key={image}><img src={image}></img></div>
                                            ))
                                        }
                                    </div>
                                );
                            })
                        }
                    </Gallery>
                    <ProductInfo>
                        <h3> {item.content?.subEnTitle} </h3>
                        <h4> {item.content?.subTitle} </h4>
                        <p> {item.content?.productInfo} </p>
                    </ProductInfo>
                </Block>
            </Container>
                <FundingTab item={item} />
        </MainTemplate>
    )
}

const Title = styled.div`
    h2 {
        display: inline-block;
        padding-bottom: 10px;
        margin-bottom: 33px;
        font-size: 1.625rem;
        font-weight: 500;
        border-bottom: 5px solid ${palette.brown0_p40};
    }
    h3 {
        font-size: 1.2rem;
        font-weight: 400;
        margin: 0 0 165px;
        color: ${palette.brown4};
    }
    h4 {
        font-size: 1rem;
        font-weight: 400;
        margin: auto 0px 0px;
        color: ${palette.brown4};
    }
    p {
        font-size: 1rem;
        font-weight: 400;
        margin: 16px 0 0;
    }
`;

const ProductInfo = styled.div`
margin-bottom: 280px;
    h4 {
        margin: 0 0 17px;
        color: ${palette.brown4};
        font-size: 1rem;
    }
    h3 {
        display: inline-block;
        padding-bottom: 7px;
        font-size: 1.625rem;
        border-bottom: 2px solid ${palette.brown0};
        color: ${palette.brown4};
    }
    p {
        margin-top: 17px;
        color: ${palette.brown4};
        white-space: pre-line;
        font-size: 1rem;
    }
`;

const Gallery = styled.div`
    width: 100%; max-width: 650px;
    img {
        width: 100%;
        margin-bottom: 18px;
    }
    div:not(.flx) {
        & > div {width: 100%;}
    }
    .flx {
        max-width: 100%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        & > div:first-child {margin-right: 1.125rem;}
        & > div:nth-child(3) {margin-left: 1.125rem;}
    }
    .caption {
        font-size: 0.625rem;
    }
`;

const Container = styled.div`
    width: 100%; height: 100%;
    border-bottom: 1px solid ${palette.brown1};
`;

const Block = styled.div`
    padding: 40px 55px;
    max-width: 720px;
    margin: auto;
    border-left: 1px solid ${palette.brown0_p40};
    border-right: 1px solid ${palette.brown0_p40};
`;

export default Detail;