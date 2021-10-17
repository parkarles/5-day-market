import React from 'react';
import styled from "styled-components";
import palette from "../../lib/styles/palette";

export interface MainTemplateProps {
    children: React.ReactNode;
    size: number;
    gcolor?: string;
};

export interface IBlock {
    size: number;
    gcolor: string;
};

function ItemsGrid({ children, size, gcolor = palette.white0_p50 }: MainTemplateProps) {
    return (
        <>
            <Block size={size} gcolor={gcolor} />
            <>{children}</>
        </>
    );
}

const Block = styled.div<IBlock>`
    position: absolute;
    width: ${({ size }) => `calc(100% + ${size}px)`};
    left: 50%;
    transform: ${({ size }) => `translateX(calc(-50% - ${size/2}px))`};
    height: 100%;
    background-position: top center;
    background-size: ${({ size }) => `${size}px ${size}px;`}
    background-image:
    ${({ gcolor }) => `
        linear-gradient(${gcolor} .1em, transparent .1em),
        linear-gradient(90deg, ${gcolor} .1em, transparent .1em);
        `};
    background-color: transparent;
    z-index: -1;
`;

export default ItemsGrid;