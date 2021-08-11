import React from "react";
import styled from "styled-components";

import { ImageLogo, FacebookIcon, InstaIcon, TwitterIcon, YoutubeIcon } from "../../static/svg";
import palette from "../../lib/styles/palette";

const Footer = () => {
    return (
        <Block>
            <Inner>
                <ImageLogo />
                <SocialIcons>
                    <InstaIcon />
                    <FacebookIcon />
                    <TwitterIcon />
                    <YoutubeIcon />
                </SocialIcons>
                <Info>
                    <p>
                        Five day market <br/>
                        (주)Five day | ceo. 박경은 |  [사업자확인] | 제 2021-서울중구-1174호 <br />
                        상담시간. 월-금 오전10시 - 오후6시 | ruddms4760@gmail.com
                        <br /> <br />
                        Copyright © oiligang studio. All rights reserved | site by park
                    </p>
                </Info>
            </Inner>
        </Block>
    );
}

const Block = styled.div`
  background-color: ${palette.orange1};
  width: 100%;
`;

const SocialIcons = styled.div`
    display: flex;
    align-items: center;
    & img {
        max-width: 48px;
        width: 100%; height: 100%;
        margin-right: 16px;
        &:last-child {margin-right: 0px}
    }
`;

const Info = styled.div`
    p {
        color: ${palette.brown3};
        line-height: 1.7;
    }
`;

const Inner = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px;
`;

export default Footer;