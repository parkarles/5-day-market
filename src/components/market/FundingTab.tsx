import React from "react";
import styled from "styled-components";
import { ItemType } from "../../static/marketItemList";

import palette from "../../lib/styles/palette";
import { Link } from "gatsby";

type FundingTabProps = {
    item: ItemType;
    // item: ItemFunding;
}

function FundingTab({ item }: FundingTabProps) {
    // const [timeout, setTimeout] = useState(true);
    // const now = new Date();
    // const deadline = item.deadline.getTime() - now.getTime();
    // useEffect(()=> {
    //     if (now < item.deadline) setTimeout(false);
    // }, []);

    return (
        <BlockContainer>
            <Block>
                <FundingInfo>
                    <p> {item.enTitle} </p>
                    <Info>
                        <p> {item.content?.master} </p>
                    </Info>
                    <Info>
                        <p>모인금액</p>
                    </Info>
                </FundingInfo>
                {/* <FundingButton> */}
                    <p>구매하기</p>
                {/* </FundingButton> */}
            </Block>
        </BlockContainer>
    )
}


const BlockContainer = styled.div`
    position: absolute;
    left: 100%;
`;

const Block = styled.div`
    position: fixed;
    max-width: 250px;
    width: 100%;
    top: 45%;
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
    width: 100%; max-width: 230px;
    height: 42px;
    text-decoration: none;
    background: linear-gradient(123.23deg, #FFA600 10.51%, #FF4DB2 94.3%);
    border-radius: 4px;
    margin-top: 20px;
    text-align: center;
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
    display: flex;
    justify-content: space-between;
    border-top: 1px solid ${palette.brown1};
    p { 
        margin: 0;
        font-size: 0.875rem;
        b {
            font-weight: 500;
        }
        &.highlight {
            color: ${palette.orange0};
        }
    }
`;

export default FundingTab;