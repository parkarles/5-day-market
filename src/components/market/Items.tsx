import React from "react";
import styled from "styled-components";

import palette from "../../lib/styles/palette";

export interface Item {
    id: number;
    image: string;
    enTitle: string;
    title: string;
    price: number;
    desc: string;
};

export interface ItemProps {
    itemList: Array<Array<Item>>;
    itemSize: number;
};

function Items({ itemList, itemSize }: ItemProps) {
    return (
        <>
            {
                itemList.map((items) => {
                    return (
                        <Block key={items[0].id} size={itemSize} count={items.length === 3 ? 4 : items.length}>
                            {
                                items.length === 3 ?
                                    <ProductCell size={itemSize} /> : null
                            }
                            {items.map((item) => (
                                <ProductCell key={item.id} size={itemSize}>
                                    <Info>
                                        <h3>
                                            {item.id}
                                        </h3>
                                    </Info>
                                    <img className="product" src={item.image} />
                                    <div className="gradient">
                                        <p>
                                            {item.title} <br />
                                            ${item.price}
                                        </p>
                                    </div>
                                </ProductCell>
                            ))}
                        </Block>
                    );
                })
            }
        </>
    )
}

const ProductCell = styled.div<{ size: number }>`
    position: relative;
    max-width: 50%;
    height: 100%;
    width: ${({ size }) => `${size}px`}};
    overflow: hidden;
    & img.product {
        max-width: 100%; 
        height: 100%;
        width: 100%;
    }
    
    & .gradient {
        position: absolute;
        width: 100%; height: 100%;
        opacity: 0;
        top: 0; left: 0; z-index: -1;
        padding: 25px 18px;
        transition: opacity 0.3s ease 0s;
        p {
            margin: 0;
            font-size: 1rem;
            font-weight: 400;
            color: ${palette.white0};
        }
    }

    &:hover {
        h3 {
            opacity: 0;
        }
        .gradient {
        // background: ${palette.orange0};
        background: linear-gradient(180deg, ${palette.orange0} 0%, ${palette.orange0_p00} 100%);
        opacity: 1;
            p {
                color: ${palette.white0};
            }
        }
    }
`;

const Block = styled.div<{ size: number, count: number }>`
    display: flex;
    width: ${({ size, count }) => `${size * count}px`}};
    height: ${({ size }) => `${size}px`}};
    margin: 0px auto;
    cursor: pointer;
`;


const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: inline-flex;
    padding: 24px 18px;
    h3 {
        font-size: 1.5rem;
        font-weight: 400;
        color: ${palette.brown3};
        margin: 0;
    }
`;

export default Items;