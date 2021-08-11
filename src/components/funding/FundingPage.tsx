import React from "react";
import styled from "styled-components";
import { RouteComponentProps, useHistory } from "gatsby";

import MainTemplate from "../main/MainTemplate";

import homeItemList, { ItemType } from "../../static/homeItemList";
import palette from "../../lib/styles/palette";

export type MatchProps = {
    id: string
};

function FundingPage({ match }: RouteComponentProps<MatchProps>) {
    const id = +match.params.id;
    const item: ItemType = homeItemList[id];
    const history = useHistory();

    if (item === undefined) {
        window.alert('유효하지 않은 접근입니다.');
        history.goBack();
    }

    return (
        <MainTemplate>
            <MainContainer>
                <Head>
                    <Grid>
                        <HeadLine>
                            <SubTitle>프로젝트 밀어주기</SubTitle>
                            <p>장인 프로젝트 밀어주기까지 한 단계만 남았어요!</p>
                        </HeadLine>
                    </Grid>
                </Head>
                <Grid>
                    <SubTitle>주문 정보</SubTitle>
                    <ProductInfo>
                        <h3> { item.enTitle } </h3>
                        <h4> { item.title } </h4>
                        <img src={item.content.productImages[1][0]}/>
                        <OrderInfo>
                            <div>
                                <p>선물구성</p>
                                <p>K - KIT</p>
                            </div>
                            <div>
                                <p>선물 금액</p>
                                <p>17,000원</p>
                            </div>
                            <div>
                                <p>추가 후원금</p>
                                <p>10,000원</p>
                            </div>
                        </OrderInfo>
                    </ProductInfo>
                    <SubTitle>후원자 정보</SubTitle>
                    <SponsorInfo>
                        <div>
                            <h4>연락처</h4>
                            <InputContainer>
                                <div>
                                    <input type="tel" placeholder="휴대번호를 입력해주세요."></input>
                                </div>
                                <div>
                                    <input type="number" placeholder="인증번호 전송"></input>
                                </div>
                            </InputContainer>
                        </div>
                        <div>
                            <h4>이메일</h4>
                            <p>five office@naver.com</p>
                        </div>
                        <p>
                            위 연락처와 이메일로 후원 관련 소식이 전달됩니다. <br/>
                            연락처 및 이메일 변경은 설정&gt;계정설정에서 가능합니다.
                        </p>
                    </SponsorInfo>
                    <SubTitle>배송 정보</SubTitle>
                    <SubTitle>결제 금액</SubTitle>
                    <div>
                        <p>
                            프로젝투 성공시, 결제는 2022년 2월에 진행됩니다. 프로젝트가 무산되거나 중단된 경우, 예약된 결제는 자동으로 취소됩니다.
                        </p>
                    </div>
                    <SubTitle>결제 수단</SubTitle>
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
const SubTitle = styled.h2`
    color: ${palette.brown4};
    font-size: 1.5rem;
    margin: 0;
`;

const HeadLine = styled.div`
    padding: 20px 0px 40px;
    p {
        color: ${palette.brown4};
        font-size: 1rem;
        margin: 7px 0 0;
    }
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    & > div {
        height: 48px;
        border: 1px solid ${palette.brown1};
        border-radius: 6px;
        &:first-child {
            margin-bottom: 8px;
        }
    }
    input {
        font-size: 0.875rem;
        border-radius: 6px;
        border: none;
        width:100%;
        height: 100%;
        padding: 8px 12px;
        font-weight: 500;
        color: ${palette.brown1};
    }
    input::placeholder {
        font-size: 0.875rem;
        font-weight: 500;
        color: ${palette.brown1};
    }
`;

const SponsorInfo = styled.div`
    margin: 16px auto 60px;
    padding: 20px;
    border: 1px solid ${palette.brown1};
    border-radius: 6px;
    & > div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
        & > * {
            width: 100%;
        }
        h4 {
            color: ${palette.brown4};
            max-width: 110px;
            margin: 15px auto;
        }
        p {
            margin: auto;
        }
    }
    p {
        color: ${palette.brown4};
        margin: 0;
        line-height: 1.6;

    }
`;

const OrderInfo = styled.div`
    margin: 35px auto 0;
    & > div {
        display: flex;
        justify-content: space-between;
        padding: 12px 0px;
        margin: 0;
        p {
            font-weight: 500;
            margin: 0;
            &:first-child {
                color: ${palette.brown5};
            }
        }
        &:nth-child(2) {
            border-top: 1px solid ${palette.brown2};
            border-bottom: 1px solid ${palette.brown2};
        }
    }
`;

const ProductInfo = styled.div`
    margin: 22px auto 60px;
    h4 {
        color: ${palette.brown4};
        font-size: 1.25rem;
        font-weight: 400;
        margin: 15px 0 20px;
    }
    h3 {
        color: ${palette.brown4};
        font-size: 1.75rem;
        font-weight: 500;
        margin: 0;
        border-bottom: 6px solid ${palette.brown0_p40};
        display: inline;
    }
    img {
        margin: 0 auto;
    }
`;

const Head = styled.div`
    border-bottom: 1px solid ${palette.brown2};
`;

const Grid = styled.div`
    position: relative;
    width: 100%; max-width: 720px;
    padding: 40px 54px;
    margin: 0 auto;
    border-left: 1px solid ${palette.brown2};
    border-right: 1px solid ${palette.brown2};
`;

export default FundingPage;