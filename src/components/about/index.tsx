import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import palette from "../../lib/styles/palette";
import MainTemplate from "../main/MainTemplate";
import { LogoVertical } from "../../static/svg";
export interface ItemProps {
};

function Items({ }: ItemProps) {
    const data = useStaticQuery(graphql`
        query {
            cloudImage: file(name: {eq: "cloud"}) {
                publicURL
            }
            pomegranate: file(name: {eq: "pomegranate"}) {
                publicURL
            }
        }
    `);

    return (
        <MainTemplate>
            <BackgroundGradient />
            <BackgroundCloud img={data.cloudImage.publicURL} />
            <Block>
                <LogoVertical />
                <p>
                    한국의 고유한 정취와 장인의 오랜시간 정성이 깃든 물건의 스토리를 전달하며 <br />
                    5일에 한 번 재해석된 전통제품들을 통해 과거와 현재의 가치를 느껴보셨으면 합니다. <br />
                    <br />
                    Five day market은 접근하기 어려웠던 전통제품들을 온라인을 통해 <br />
                    쉽게 만나볼 수 있도록 하며 닷새에 한번 여는 오일장가 같이 새로운 제품을 <br />
                    5일에 한 번 만나볼 수 있도록 하고 있습니다.
                </p>

                <img src={data.pomegranate.publicURL} />
                <p className="caption"> *석류: 다복,높은 학식(石榴를 碩儒로 바꾸어 선비의 큰 학식을 의미함 </p>
                <p>
                    CONTACT <br />
                    <br />
                    <br />
                    다양한 분야의 브랜드와의 협업을 환영합니다. <br />
                    <br />
                    We welcome collaboration with brands in various fields. <br />
                    We would love to hear from you. <br />
                    <br />
                    fivedaymarket.office@gmail.com<br />
                </p>
            </Block>
        </MainTemplate>
    )
}

const BackgroundGradient = styled.div`
    z-index: -1;
    width: 100%; height: 100%;
    position: absolute; left: 0px; top: 0px;
    background: linear-gradient(${palette.orange2_p30}, ${palette.ivory0_00});
`;

const BackgroundCloud = styled.div<{ img: string }>`
    z-index: -1;
    width: 100%; height: 600px;
    position: absolute; left: 0px; top: 0px;
    background-image: url(${({ img }) => img});
    // background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;

`;

const Block = styled.div`
    max-width: 720px;
    margin: auto;
    text-align: center;
    padding: 40px 0 120px;
    p {
        margin-top: 60px;
        color: ${palette.brown4};
        font-size: 1rem;
        line-height: 150%;
        font-weight: bold;
    }
    p+img {
        margin-top: 74px;
    }
    p.caption {
        margin: 24px auto 80px;
        color: ${palette.brown1};
        font-size: 0.6rem;
    }
`;

export default Items;