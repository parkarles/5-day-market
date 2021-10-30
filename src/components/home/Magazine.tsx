import React from "react";
import styled from "styled-components";
import { navigate } from "gatsby";

import YouTube, { PlayerVars } from "react-youtube";
import MainTemplate from "../main/MainTemplate";

import homeItemList, { ItemType } from "../../static/homeItemList";
import palette from "../../lib/styles/palette";
import DetailLayout from "./DetailLayout";
import FundingTab from "./FundingTab";

interface IProp {
    id: string;
}

function MagazinePage({ id = "0" }: IProp) {
    const item: ItemType = homeItemList[+id];
    
    if (item === undefined && typeof window !== "undefined") {
        window.alert('유효하지 않은 접근입니다.');
        navigate(-1);
    }

    const vars: PlayerVars = {
        autoplay: 1,
        controls: 0,
        loop: 1,
        playlist: item.banner
    }

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: vars
    };

    return (
        <MainTemplate>
            <GradientBox />
            {
                !item.banner ? 
                    <VideoContainer /> :
                        item.bannerType === 'video' ?
                            <VideoContainer>
                                <div className="abso" />
                            <YouTube videoId={item.banner} opts={opts}/>
                            </VideoContainer>
                            :
                            <VideoContainer>
                                <img src={item.banner} />
                            </VideoContainer>

            }
            <MainContainer>
                <Grid>
                    <DetailLayout item={item} />
                    <FundingInfo>
                        <h2>“후원하여 체험해보세요”</h2>
                        <h3>일상을 채우던 전통 매듭, 한층 더 가까이 느껴보세요.</h3>
                        <p>
                            다양한 분들을 가르치며 생긴 노하우를 담아 처음 접해보시는 분들도 <br /> 쉽게 배울 수 있도록
                            과정을 준비하였습니다.
                            <br/><br/>
                            전통에 관심을,<br />
                            그중에서도 특히 {item.title}에 관심을 가져주셔서 감사합니다.<br />
                            감사한 마음에 보답하기 위해서 정말 차근차근 열심히 준비하였습니다.
                        </p>
                    </FundingInfo>
                    <FundingTab id={item.id} item={item.funding} />
                </Grid>
            </MainContainer>
        </MainTemplate>
    );
}

const MainContainer = styled.div`
    width: 100%; 
    position: relative;
    overflow: hidden;
`;

const Grid = styled.div`
    position: relative;
    max-width: 720px;
    width: 100%;
    padding: 80px 22px 459px;
    margin: 0 auto;
    border-left: 1px solid ${palette.brown2};
    border-right: 1px solid ${palette.brown2};
`;

const VideoContainer = styled.div<{src? : string}>`
    width: 100%; height: 100%;
    height: 593px;
    padding-bottom: 56.25%; /* 16:9 */;
    height: 0;
    position: relative;
    background-color: ${palette.brown2};
    & > * {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: .5;
        z-index: 0;
    }
    & div.abso {
        width: 100%; height: 100%;
        position: absolute; top: 0; left: 0;
        z-index:1;
    }
    iframe {
        z-index: 0;
        .ytp-chrome-top, .ytp-gradient-top, .ytp-show-cards-title, .ytp-share-button, ytp-chrome-bottom{
            opacity: 0 !important;
            display: none !important;
            left: 3012px !important;
        }
    }
    `;
    // ${({ src }) => src ? 
    // `
    //     background-image: url(${src});
    //     background-size: cover;
    //     background-position: center;
    //     background-repeat: no-repeat;
    // `
    // : null}

const FundingInfo = styled.div`
    text-align: center;
    h2 {
        display: inline;
        font-size: 1rem;
        color: ${palette.brown4};
        padding: 0px 15px 5px;
        border-bottom: 2px solid ${palette.brown0};
    }
    h3 {
        font-size: 1rem;
        color: ${palette.brown4};
    }
    p {
        margin: 55px auto 40px;
        font-size: 1rem;
        color: ${palette.brown4};
    }
`;

const GradientBox = styled.div`
    width: 100%;
    height: 10px;
    background: ${palette.orange0};
    background: linear-gradient(90deg, ${palette.orange0} 0%, ${palette.orange0_p40} 100%);
`;


export default MagazinePage;