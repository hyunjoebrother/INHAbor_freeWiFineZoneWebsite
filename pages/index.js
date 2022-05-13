import React from "react";
import styled, { css } from "styled-components";
import Layout from "../components/Layout";
import Margin from "../components/Margin";
import LoginModal from "../components/LoginModal";
import Text from "../components/Text";

const StyledText = styled(Text)`
  color: ${(props) => props.color};
  font-size: 10px;
  font-weight: 400;
  margin: auto;
`;

export default function Start() {
  return (
    <Layout backgroundColor="black">
      <Margin size="100" />
      <LoginModal />
      <Margin size="20" />
      <StyledText color="#fff">
        화면이 넘어가지 않으면 비밀번호를 다시 확인해주세요
      </StyledText>
    </Layout>
  );
}
