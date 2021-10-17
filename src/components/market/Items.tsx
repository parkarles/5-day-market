import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, navigate } from "gatsby";
import palette from "../../lib/styles/palette";
import Img from "gatsby-image";

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
    const data = useStaticQuery(graphql`
        query {
            items: allFile(filter: {relativeDirectory: {eq: "marketItem"}}) {
                nodes {
                    name
                    childImageSharp {
                        fixed {
                            base64
                            tracedSVG
                            aspectRatio
                            srcWebp
                            srcSetWebp
                            originalName
                        }
                    }
                }
            }
        }
    `);



    return (
        <>
            {
                itemList.map((items) => {
                    return (
                        <BlockWrapper key={items[0].id} size={itemSize}>
                            <Block size={itemSize} count={2}>
                                {/* {
                                    items.length === 3 ?
                                        <ProductCell to={`/market/`} size={itemSize} /> : null
                                } */}
                                {
                                items.map((item) => {
                                    if (item.id == 100) return <ProductCell key={item.id} onClick={() => { navigate(`/market/no`) }} size={itemSize} />
                                    const image = data.items.nodes.find((node: any) => { return (node.name === item.image)});
                                    return (
                                    <ProductCell onClick={() => { navigate(`/market/${item.id}`)}} key={item.id} size={itemSize}>
                                        <Info>
                                            <h3>
                                                {item.id}
                                            </h3>
                                        </Info>
                                            <Img style={{ width: `${itemSize}px`, height: `${itemSize}px`}} className="product" fixed={image?.childImageSharp.fixed} />
                                            <div className="gradient">
                                            <p>
                                                {item.title} <br />
                                                ${item.price}
                                            </p>
                                        </div>
                                    </ProductCell>
                                )})}
                            </Block>
                        </BlockWrapper>
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

const BlockWrapper = styled.div<{ size: number}>`
    width: 100%;
    position: relative;
    padding-bottom: ${({ size }) => `${size}px`}};
`;

const Block = styled.div<{ size: number, count: number }>`
    display: flex;
    width: ${({ size, count }) => `${size * count}px`}};
    height: ${({ size }) => `${size}px`}};
    margin: 0px auto;
    cursor: pointer;
    position: absolute;
    top: 0; left: 50%;
    transform: translateX(-50%);
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