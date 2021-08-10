import React from "react";
import styled from "styled-components";

const newlineText = (text: string) => {
    return text.split('\n').map((str, idx) => <Block key={idx}> {str} </Block>);
}

const Block = styled.span`
display: block;
`;

export default newlineText;