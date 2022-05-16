import React from "react";
import styled, { css } from "styled-components";
import Layout from "../components/Layout";
import Margin from "../components/Margin";
import LoginModal from "../components/LoginModal";
import Text from "../components/Text";
import Head from "next/head";

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
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:url"
          content="https://inhabor-freewifinezonewebsite.pages.dev/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="인하대학교 여론조사" />
        <meta
          property="og:description"
          content="당신은 인하대학교에 만족(Fine)하시나요?"
        />
        <meta property="og:image" content="/main/posterOG.png" />
        <p>
          개발자 : 인하대학교 총대의원회 집행국 선전편집국 국장 김현조 (Mei)
        </p>
      </Head>
      <BackGround>
        <StyledLayout backgroundColor="none" minHeight="700px">
          <Margin size="100" />
          <LoginModal />
          <Margin size="20" />
          <StyledText color="#fff">
            비밀번호를 입력하고 '연결하기'를 눌러주세요
            <br />
            화면이 넘어가지 않으면 비밀번호를 다시 확인해주세요
          </StyledText>
        </StyledLayout>
      </BackGround>
    </>
  );
}
