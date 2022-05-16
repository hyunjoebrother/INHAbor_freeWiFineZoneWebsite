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

const StyledText = styled(Text)`
  color: ${(props) => props.color};
  font-size: 12px;
  font-weight: 400;
  margin: auto;
  text-align: center;
  line-height: 2;
`;

export default function Start() {
  return (
    <>
      <BackGround>
        <Layout backgroundColor="none">
          <Margin size="100" />
          <LoginModal />
          <Margin size="20" />
          <StyledText color="#fff">
            비밀번호를 입력하고 '연결하기'를 눌러주세요
            <br />
            화면이 넘어가지 않으면 비밀번호를 다시 확인해주세요
          </StyledText>
        </Layout>
      </BackGround>
    </>
  );
}
