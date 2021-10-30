import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import palette from "../lib/styles/palette";
import MainTemplate from "./main/MainTemplate";
import { LogoNot5day } from "../static/svg";

export interface ItemProps {
};

function Contact({ }: ItemProps) {
    const data = useStaticQuery(graphql`
        query {
            hak: file(name: {eq: "hak"}) {
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
                <p>
                    <b> CONTACT </b>
                    <br /><br /><br />
                    다양한 분야의 브랜드와의 협업을 환영합니다.
                    <br /><br />
                    We welcome collaboration with brands in various fields. <br />
                    We would love to hear from you.
                    <br /><br />
                    fivedaymarket.office@gmail.com
                </p>
                <img className="hak" src={data.hak.publicURL} />
            </Block>
        </MainTemplate>
    )
}

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

        font-family: Roboto;
        font-style: normal;
        font-size: 18px;
        line-height: 150%;
    }
    img {
        margin: 103px auto 50px;
        display: block;
    }

`;

export default Contact;