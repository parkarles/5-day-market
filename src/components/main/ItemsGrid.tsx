import React from 'react';
import styled from "styled-components";
import palette from "../../lib/styles/palette";

export type MainTemplateProps = {
    children: React.ReactNode;
    size: number;
};

export type BlockType = {
    size: number;
};

function ItemsGrid({ children, size }: MainTemplateProps) {
    return (
        <>
            <Block size={size} />
            <>{children}</>
        </>
    );
}

const Block = styled.div<BlockType>`
    position: absolute;
    width: ${({ size }) => `calc(100% + ${size}px)`};
    left: 50%;
    transform: ${({ size }) => `translateX(calc(-50% - ${size/2}px))`};
    height: 100%;
    background-position: top center;
    background-size: ${({ size }) => `${size}px ${size}px;`}
    background-image:
        linear-gradient(${palette.brown2} .1em, transparent .1em),
        linear-gradient(90deg, ${palette.brown2} .1em, transparent .1em);
    background-color: transparent;
    z-index: -1;
`;

export default ItemsGrid;