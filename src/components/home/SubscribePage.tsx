import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import palette from "../../lib/styles/palette";
import MainTemplate from "../main/MainTemplate";
import { LogoNot5day } from "../../static/svg";
import { Formik, Form, Field, ErrorMessage } from 'formik';

export interface ItemProps {
};

function Items({ }: ItemProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [policyCheck, setPolicyCheck] = useState(false);
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

    const checkForm = () => {
        if (policyCheck) {
            alert("개인정보수집 및 이용약관에 동의해주세요!")
            return
        }
    }

    return (
        <MainTemplate>
            <BackgroundPattern img={data.patternImage.publicURL} />
            <Block>
                <h2> K- MAGAZINE </h2>
                <p>
                    한국의 고유한 정취와 장인의 오랜시간 정성이 깃든 물건들을 5일에 한 번 전달하도록 하겠습니다.
                    <br /><br />
                    재해석된 전통제품들을 통해 새로운 문화적 트렌드로 자리를 잡아가는 시기이지만,<br />
                    아직도 선뜻 접하기 어렵게 하는 문턱이나 일부의 문화로 느껴지게 하는 장벽이 존재합니다.<br />
                    Five day market 에서는 한국 전통문화에 대한 보다 쉬운 접근과 깊이 있는 이해를 돕고자 합니다. 
                </p>
                <Info>
                    <h3> 구독정보 </h3>
                    <Formik
                        initialValues={{ name: '', email: '' }}
                        validate={values => {
                            const errors: any = {};
                            if (!values.name) {
                                errors.name = '이름을 적어주세요!';
                            }
                            if (!values.email) {
                                errors.email = '이메일을 적어주세요!';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = '이메일 형식이 올바르지 않습니다.';
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setIsSubmitting(true);
                            setTimeout(() => {
                                alert(JSON.stringify("구독 신청이 성공적으로 완료되었습니다 :)", null, 2));
                            }, 400);
                        }}
                    >
                        <Form 
                            action="https://formspree.io/f/meqvbqda"
                            method="POST">
                            <Box>
                                <Field type="name" name="name" placeholder="이름을 알려주세요"/>
                                <ErrorMessage className="error" name="name" component="div" />
                                <Field type="email" name="email" placeholder="이메일을 알려주세요"/>
                                <ErrorMessage className="error" name="email" component="div" />
                            </Box>
                            <Policy>
                                <input type="checkbox" checked={policyCheck} onChange={()=> setPolicyCheck(!policyCheck)} id="cb"/>
                                <label htmlFor="cb">
                                    <div/>
                                    <p>개인정보수집 및 이용약관에 동의합니다. I accept the Privacy Policy.</p>
                                </label>
                            </Policy>
                            <button type="submit" disabled={!policyCheck || isSubmitting}>
                                구독하기
                            </button>
                        </Form>
                    </Formik>
                </Info>
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

const Box = styled.div`
    width: 100%;
    border: 1px solid ${palette.brown1};
    padding: 23px 0px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 15px;
    & > input:nth-child(2) {
        margin-top: 8px;
    }
    & > input {
        width: 100%; max-width: 400px;
        height: 48px;
        padding: 14px 18px;
        border: 1px solid ${palette.brown1};
        border-radius: 6px;
        color: ${palette.brown1};
    }
    .error {
        font-size: 0.675rem;
        text-align: left;
        color: #f37e7e;
        margin: 5px 0;
    }
    & > input::placeholder { color: ${palette.brown1};}
`;

const Policy = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    text-align: center;
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    p {
        color: ${palette.brown1};
        margin: 0;   
        font-size: 0.875rem;
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
            border: 1px solid ${palette.brown1};
            width: 16px; height: 16px;
            margin-right: 10px;
            position: relative;
            background-color: ${palette.white0};
        }
    }
    & input[type=checkbox]:checked + label > div::after {
        position: absolute;
        top: -4px;
        left: 3px;
        content: '✔';
        font-size: 12px;
        color: ${palette.brown1};
    }
`;

const Info = styled.div`
    max-width: 610px;
    margin: 100px auto 0;
    h3 {
        font-family: Noto Sans CJK KR;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 150%;
        color: ${palette.brown4};
    }
    button:disabled {
        cursor: default;
        color: ${palette.brown0_p40};
    }
    button {
        width: 100%; max-width: 230px;
        padding: 10px 0px;
        background: linear-gradient(310.9deg, #FF7A00 0%, #FF9534 59.77%, #FFB067 103.15%), linear-gradient(137.64deg, #F2E8DF 0%, #ECE5DF 97.97%), #C4C4C4;
        box-shadow: 2px 4px 5px rgba(230, 140, 57, 0.3), -3px -3px 5px rgba(255, 148, 49, 0.25), inset 0px -2px 5px rgba(255, 234, 215, 0.4), inset 0px -2px 10px #E8740A, inset 0px 0px 10px rgba(255, 255, 255, 0.54);
        border-radius: 5px;
        border: 0;

        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 150%;
        color: ${palette.white0};
        cursor: pointer;
    }
`;

const Block = styled.div`
    background-color: ${palette.ivory0};
    max-width: 720px;
    margin: auto;
    text-align: center;
    padding: 150px 0 190px;
    border-left: 1px solid ${palette.brown2};
    border-right: 1px solid ${palette.brown2};
    h2 {
        display: inline-block;
        padding-bottom: 10px;
        margin-bottom: 60px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 150%;
        color: ${palette.brown4};
        border-bottom: 1px solid ${palette.brown4};
    }
    h3 {
        font-family: Roboto;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 150%;
        color: ${palette.brown4};
        text-align: left;
    }
    & > p {
        margin: 0px;
        color: ${palette.brown4};
        font-weight: bold;
        font-size: 0.876rem;
        line-height: 1.5rem;
    }
`;

export default Items;



