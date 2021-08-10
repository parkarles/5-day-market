import React from "react";
import styled from "styled-components";
import { ItemType } from "../../static/homeItemList";

import palette from "../../lib/styles/palette";

type LayoutProps = {
    item: ItemType;
}

function DetailLayout({item}: LayoutProps) {
    // const { id } = useParams();
    return (
        <Block>
            <Title>
                <h2> { item.enTitle.toUpperCase() } </h2>
                <h4> { item.content.master }</h4>
                <p> { item.content.masterDesc }</p>
            </Title>

            <ProductInfo>
            <h3> { item.content.subTitle } </h3>
                <p> 
                    {item.content.productInfo}
                    {/* {
                        newlineText(item.content.productInfo)
                    }  */}
                </p>
            </ProductInfo>

            <Gallery>
                {
                    item.content.productImages.map((images) => {
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
            {
                item.content.caption ? <p className="caption"> { item.content.caption } </p> : null
            }
            </Gallery>
        </Block>
    )
}

const Title = styled.div`
    margin-bottom: 85px;
    h2 {
        display: inline-block;
        padding-bottom: 10px;
        margin-bottom: 33px;
        font-size: 4.375rem;
        font-weight: 500;
        border-bottom: 1px solid ${palette.black0};
    }
    h4 {
        font-size: 1.125rem;
        font-weight: 400;
        margin: 0;
    }
    p {
        font-size: 1rem;
        font-weight: 400;
        margin: 16px 0 0;
    }
`;

const ProductInfo = styled.div`
    h3 {
        color: ${palette.brown4};
    }
    p {
        white-space: pre-line;
    }
`;

const Gallery = styled.div`
    width: 100%; max-width: 650px;
    margin: 70px auto 289px;
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
    }
    .caption {
        font-size: 0.625rem;
    }
`;

const Block = styled.div`
`;

export default DetailLayout;