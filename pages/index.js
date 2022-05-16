import React from "react";
import styled, { css } from "styled-components";
import Layout from "../components/Layout";
import Margin from "../components/Margin";
import LoginModal from "../components/LoginModal";
import Text from "../components/Text";

const BackGround = styled.div`
  width: 100%;
  background: linear-gradient(#6a93cb, #7ee8fa);
`;

const StyledLayout = styled(Layout)`
  min-height: 550px;
`;

const StyledText = styled(Text)`
  color: ${(props) => props.color};
  font-size: 10px;
  font-weight: 400;
  margin: auto;
  text-align: center;
  line-height: 2;
`;

export default function Start() {
  return (
    <>
      <BackGround>
        <StyledLayout backgroundColor="none" minHeight="700px">
          <Margin size="100" />
          <LoginModal />
          <Margin size="20" />
          <StyledText color="#fff">
            5월 17일부터 Free Wi-Fine Zone에 연결할 수 있습니다.
            <br />
            많은 관심 부탁드립니다.
          </StyledText>
        </StyledLayout>
      </BackGround>
    </>
  );
}
