import React from "react";
import styled from "styled-components";
import { RouteComponentProps } from "react-router-dom";

import MainTemplate from "../main/MainTemplate";

import homeItemList from "../../static/homeItemList";
import palette from "../../lib/styles/palette";

export type MatchProps = { 
    id: string
};

function MagazinePage({ match }: RouteComponentProps<MatchProps>) {
    // const { id } = useParams();
    const id = +match.params.id;
    return (
        <MainTemplate>
            <GradientBox />
            <ItemContainer>
                <Grid>
                    <Content>
                    {
                        homeItemList[id].content
                    }
                    </Content>
                    <h3>“후원하여 체험해보세요”</h3>
                    <h3>일상을 채우던 전통 매듭, 한층 더 가까이 느껴보세요.</h3>
                    <p>
                        다양한 분들을 가르치며 생긴 노하우를 담아 처음 접해보시는 분들도 쉽게 배울 수 있도록<br />
                        과정을 준비하였습니다.
                        <br/><br/>
                        전통에 관심을,<br />
                        그중에서도 특히 매듭에 관심을 가져주셔서 감사합니다.<br />
                        감사한 마음에 보답하기 위해서 정말 차근차근 열심히 준비하였습니다.
                    </p>
                </Grid>
            </ItemContainer>
        </MainTemplate>
    );
}

const Content = styled.div`
    .title {
        margin-bottom: 85px;
        h2 {
            display: inline-block;
            padding-bottom: 15px;
            margin-bottom: 33px;
            font-size: 4.375rem;
            font-weight: 500;
            border-bottom: 1px solid ${palette.black0};
        }
        h4 {
            font-size: 1.125rem;
            font-weight: 500;
            margin: 0;
        }
        p {
            font-size: 1rem;
            font-weight: 500;
            margin: 13px 0 0;
        }
    }
    .gallery {
        margin: 70px auto 289px;
        width: 100%;
        img {
            width: 100%;
            margin-bottom: 18px;
        }
        .flx {
            max-width: 100%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            
            img {
                width: 100%;
                &:first-child {margin-right: 18px;}
            }
        }
    }
    h3 {
        color: ${palette.brown4};
    }
`;

const Grid = styled.div`
    max-width: 720px;
    width: 100%;
    padding: 80px 22px 459px;
    margin: 0 auto;
    border-left: 1px solid ${palette.brown2};
    border-right: 1px solid ${palette.brown2};
`;

const ItemContainer = styled.div`
    width: 100%; 
    padding-top: 593px;
    position: relative;
    overflow: hidden;
`;

const GradientBox = styled.div`
    width: 100%;
    height: 10px;
    background: ${palette.orange0};
    background: linear-gradient(90deg, ${palette.orange0} 0%, ${palette.orange0_p40} 100%);
`;


export default MagazinePage;