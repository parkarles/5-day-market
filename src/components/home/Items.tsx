import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import palette from "../../lib/styles/palette";

import { hoverGradient } from "../../static/image";

export type Item = {
    id: number;
    enTitle: string;
    title: string;
    desc: string;
    image: string;
};

export type ItemProps = {
    itemList: Array<Item>;
    itemSize: number;
};

function Items({ itemList, itemSize }: ItemProps) {
    return (
        <>
            {
                itemList.map((item) => {
                    return (
                        <Block to={`/magazine/${item.id}`} key={item.id} size={itemSize} reverse={item.id % 2 !== 0}>
                            <ImageContainer size={itemSize}>
                                <img className="gradient" src={hoverGradient} />
                                <img className="product" src={item.image} />
                            </ImageContainer>
                            <Info>
                                <Title>{item.enTitle}</Title>
                                <SubTitle>{item.title}</SubTitle>
                                <Description>{item.desc}</Description>
                            </Info>
                        </Block>
                    );
                })
            }
        </>
    )
}

const ImageContainer = styled.div<{ size: number }>`
    max-width: 50%;
    height: 100%;
    width: ${({ size }) => `${size}px`}};
    position: relative;
    overflow: hidden;
    & img.product {
        max-width: 100%; 
        height: 100%;
        width: 100%;
    }

`;

const Block = styled(Link)<{ size: number, reverse: boolean }>`
    display: flex;
    flex-direction: ${({ reverse }) => reverse ? 'row-reverse' : 'row'};
    width: ${({ size }) => `${size * 2}px`}};
    height: ${({ size }) => `${size}px`}};
    margin: 0px auto;
    // cursor: pointer;
    text-decoration: none;


    & img.gradient {
        position: absolute;
        z-index: -1;
        opacity: 0;
        max-width: 128%; width: 128%; height: 125%;
        top: 51%; left: 50%;
        transform: translateX(-50%) translateY(calc(-50% + 6rem));
        transition: transform 0.4s ease-out 0s, opacity 0.7s ease-out 0s;
    }

    &:hover img.gradient {
        opacity: 1;
        transform: translateX(-50%) translateY(-50%);
    }
`;


const Info = styled.div`
    width: 50%;
    height: 100%;
    display: inline-flex;
    align-items: start;
    flex-direction: column;
    padding: 35px 40px;
    h2, h3, p {
        color: ${palette.brown0};
    }
`;

const Title = styled.h2`
    font-size: 1.75rem;
    font-weight: 500;
    display: inline-block;
    border-bottom: 6px solid ${palette.brown0_p40};
    margin: 0px 0px 12px;
`;

const SubTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 400;
    margin: 0px;
`;

const Description = styled.p`
    font-size: 0.875rem;
    font-weight: 400;
    justify-self: flex-end;
    margin: auto auto 0px 0px;
`;

export default Items;