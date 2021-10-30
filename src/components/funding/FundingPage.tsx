import React, { useState } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, navigate } from "gatsby";

import MainTemplate from "../main/MainTemplate";

import homeItemList, { ItemType } from "../../static/homeItemList";
import palette from "../../lib/styles/palette";

export interface IProps {
    id: string
};

function FundingPage({ id = "0" }: IProps) {
    const data = useStaticQuery(graphql`
        query {
            toss: file(name: {eq: "toss"}) {
                publicURL
            }
            npay: file(name: {eq: "npay"}) {
                publicURL
            }
        }
    `);

    const item: ItemType = homeItemList[+id];
    const [address, setAddress] = useState([]);

    if (item === undefined && typeof window !== "undefined") {
        window.alert('유효하지 않은 접근입니다.');
        navigate(-1);
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
                    <AddressInfo>
                    {/* {
                        address.map(ad => <div><p>{ad}</p></div>)
                    } */}
                    <div><p>+배송지 추가</p></div>
                    </AddressInfo>
                    <SubTitle>결제 금액</SubTitle>
                    <PaymentInfo>
                        <p>
                            프로젝트 성공시, 결제는 2022년 2월에 진행됩니다. 프로젝트가 무산되거나 중단된 경우, 예약된 결제는
                            자동으로 취소됩니다.
                        </p>
                    </PaymentInfo>
                    <OrderInfo>
                        <div>
                            <p>예상 전달일</p>
                            <p>2022년 2월 5일</p>
                        </div>
                        <div>
                            <p>배송비</p>
                            <p>무료</p>
                        </div>
                        <div>
                            <p>최종 결제 금액</p>
                            <p>27,000원</p>
                        </div>
                    </OrderInfo>
                    <SubTitle>결제 수단</SubTitle>
                    <PaymentMethod>
                        <div><p>카드 결제</p></div>
                        <div><p>무통장 입금</p></div>
                        <div><img src={data.npay.publicURL}/></div>
                        <div><img src={data.toss.publicURL}/></div>
                    </PaymentMethod>
                    <AgreeBtnWrapper>
                        <input type="checkbox" id="cb" />
                        <label htmlFor="cb">
                            <div />
                            <p>개인정보 제 3자 제공 동의</p>
                        </label>
                    </AgreeBtnWrapper>
                    <FundingButton> 후원하기 </FundingButton>
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
    margin-top: 60px;
`;

const HeadLine = styled.div`
    padding: 20px 0px 40px;
    p {
        color: ${palette.brown4};
        font-size: 1rem;
        margin: 7px 0 0;
    }
`;

const FundingButton = styled.div`
    background: linear-gradient(310.9deg, #FF7A00 0%, #FF9534 59.77%, #FFB067 103.15%), linear-gradient(137.64deg, #F2E8DF 0%, #ECE5DF 97.97%), #C4C4C4;
    box-shadow: 2px 4px 5px rgba(230, 140, 57, 0.3), -3px -3px 5px rgba(255, 148, 49, 0.25), inset 0px -2px 5px rgba(255, 234, 215, 0.4), inset 0px -2px 10px #E8740A, inset 0px 0px 10px rgba(255, 255, 255, 0.54);
    cursor: pointer;
    color: white;
    width: 100%;
    height: 50px;
    display: flex;
    justify-items: center;
    align-items: center;
    background: ${palette.orange0};
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
`;

const AgreeBtnWrapper = styled.div`
display: flex;
align-items: center;
// justify-content: center;
& button {
    width: 15px;
    height: 15px;
    margin-right: 25px;
}

    & input[id="cb"] {
        display: none;
    }
    & input[id="cb"] + label {
        display: flex;
        align-items: center;
        cursor: pointer;
        position: relative;
        & > div {
            display: inline-block;
            width: 14px;
            height: 14px;
            border: 2px solid #bcbcbc;
            border-radius: 5px;
            border: 1px solid ${palette.brown0};
            width: 16px; height: 16px;
            margin-right: 10px;
            position: relative;
            background-color: ${palette.white0};
        }
    }
    & input[type=checkbox]:checked + label > div::after {
        position: absolute;
        top: -2px;
        left: 1px;
        content: '✔';
        font-size: 14px;
        color: ${palette.brown0};
    }
`;

const PaymentMethod = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 20px;
& > div {
        flex: 1 1 49%;
        display: flex;
        
        align-items: center;
        justify-content: center;
        height: 62px;
        width: 100%;
        padding: 20px 40px;
        border-radius: 6px;
        text-align: center;
        background-color: ${palette.white0};
        border: 1px solid ${palette.brown1};
        p { 
            margin: 0;
            color: #444;
        }
    }
    & div:nth-child(1) { margin: 0 8px 8px 0;}
    & div:nth-child(3) { margin: 0 8px 0 0;}
`;

const PaymentInfo = styled.div`
        font-size: 0.825rem;
        line-height: 150%;
        color: ${palette.brown4};
`;

const AddressInfo = styled.div`
    & > div {
        cursor: pointer;
        margin-bottom: 60px;
        p {
            width: 100%;
            padding: 20px 40px;
            border-radius: 6px;
            text-align: center;
            background-color: ${palette.white0};
            border: 1px solid ${palette.brown1};

            font-family: Roboto;
            font-weight: bold;
            font-size: 0.825rem;
            line-height: 150%;
            color: ${palette.brown4};
        }
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