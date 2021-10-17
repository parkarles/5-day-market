import React from "react";
import styled from "styled-components";
import { ItemType } from "../../static/marketItemList";

import palette from "../../lib/styles/palette";
import { Link } from "gatsby";

import { Quantity, Price } from "../../static/svg";

type FundingTabProps = {
    item: ItemType;
}

function FundingTab({ item }: FundingTabProps) {
    return (
        <BlockContainer>
            <Block>
                <FundingInfo>
                    <p> {item.enTitle} </p>
                    <Info>
                        <p style={{marginLeft: 'auto'}}> {item.content?.master} </p>
                    </Info>
                    <Info>
                        <Quantity />
                        <p>- 1 +</p>
                    </Info>
                    <Info className="price">
                        <Price />
                        <p> $120.00</p>
                    </Info>
                </FundingInfo>
                <FundingButton to={`/market/${item.id-1}`}>
                    <p>구매하기</p>
                </FundingButton>
            </Block>
        </BlockContainer>
    )
}

const BlockContainer = styled.div`
    position: absolute;
    left: calc(50% + 360px);
`;

const Block = styled.div`
    position: fixed;
    min-width: 250px; min-height: 250px;
    width: 250px;
    top: calc(50% - 157px);
    margin-left: 3.3rem;
    background-color: ${palette.ivory2};
    border-radius: 12px;
    box-shadow: 0px 4px 6px 2px rgb(0 0 0 / 20%);
    padding: 11px 10px 17px;
`;

const FundingInfo = styled.div`
    border-top: 3px solid ${palette.brown1};
    border-bottom: 3px solid ${palette.brown1};
    text-align: center;
    h2 {
        font-size: 0.875rem;
        font-weight: 500;
    }
`;
    
const FundingButton = styled(Link)`
    text-decoration: none;
    margin-top: 24px;
    min-height: 42px;
    background: linear-gradient(310.9deg, #FF7A00 0%, #FF9534 59.77%, #FFB067 103.15%), linear-gradient(137.64deg, #F2E8DF 0%, #ECE5DF 97.97%), #C4C4C4;
    box-shadow: 2px 4px 5px rgba(230, 140, 57, 0.3), -3px -3px 5px rgba(255, 148, 49, 0.25), inset 0px -2px 5px rgba(255, 234, 215, 0.4), inset 0px -2px 10px #E8740A, inset 0px 0px 10px rgba(255, 255, 255, 0.54);
    font-weight: bold;
    font-size: 0.8125rem;
    line-height: 150%;
    border-radius: 5px;
    
    display: flex;
    p {
        color: ${palette.white0};
        font-weight: 700;
        font-size: 1rem;
        margin: auto;
    }
`;

const Info = styled.div`
    padding: 12px 18px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid ${palette.brown1};
    p { 
        margin: 0;
        font-size: 0.875rem;
        text-align: right;
        b {
            font-weight: 500;
        }
        &.highlight {
            color: ${palette.orange0};
        }
    }
    &.price {
        color: ${palette.orange0};
        font-weight: bold;
    }
`;

export default FundingTab;