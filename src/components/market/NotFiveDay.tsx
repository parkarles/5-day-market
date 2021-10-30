import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import palette from "../../lib/styles/palette";
import MainTemplate from "../main/MainTemplate";
import { LogoNot5day } from "../../static/svg";

export interface ItemProps {
};

function Items({ }: ItemProps) {
    const data = useStaticQuery(graphql`
        query {
            tigerImage: file(name: {eq: "tiger"}) {
                publicURL
            }
            patternImage: file(name: {eq: "pattern"}) {
                publicURL
            }
        }
    `);

    return (
        <MainTemplate>
            <BackgroundPattern img={data.patternImage.publicURL} />
            <Block>
                <LogoNot5day />
                <img className="tiger" src={data.tigerImage.publicURL} />
                <p>
                    오늘은 장을 서는 날이 아니에요
                </p>

                <p>
                    Five day mark에서는 현대화된 전통제품들을 닷새에 한번 (오일장)<br />
                     마켓을 열고 있습니다. 달력을 열어 보시려면 클릭해주세요
                </p>
            </Block>
        </MainTemplate>
    )
}

const BackgroundGradient = styled.div`
    z-index: -1;
    width: 100%; height: 100%;
    position: absolute; left: 0px; top: 0px;
    background: linear-gradient(${palette.orange2_p40}, ${palette.ivory0_00});
`;

const BackgroundPattern = styled.div<{ img: string }>`
    z-index: -1;
    width: 100%; height: 100%;
    position: absolute; left: 0px; top: 0px;
    background-image: url(${({ img }) => img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
`;

const Block = styled.div`
    background-color: ${palette.ivory0};
    max-width: 720px;
    margin: auto;
    text-align: center;
    padding: 150px 0 190px;
    border-left: 1px solid ${palette.brown2};
    border-right: 1px solid ${palette.brown2};
    p {
        margin-top: 20px;
        color: ${palette.brown4};
        font-size: 1rem;
        line-height: 150%;
    }
    img.tiger {
        margin: 103px auto 50px;
        display: block;
    }

`;

export default Items;