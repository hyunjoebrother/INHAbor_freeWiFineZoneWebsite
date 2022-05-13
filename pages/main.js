import React from "react";
import styled, { css } from "styled-components";
import Layout from "../components/Layout";
import Flex from "../components/Flex";
import Header from "../components/Header";
import Margin from "../components/Margin";
import Text from "../components/Text";
import Button from "../components/Button";
import Link from "next/link";

const StyledText = styled(Text)`
  color: ${(props) => props.color};
  top: 0;
  font-weight: 500;
  text-align: center;
  line-height: 2.2;
`;

const StyledLogo = styled.img`
  height: 160px;
  width: 160px;
`;

export default function Main() {
  return (
    <Layout>
      <Flex justify="center" align="center">
        <Header />
      </Flex>
      <Margin size="50" />
      <StyledText size="12">
        감사합니다.
        <br />
        학우분의 작은 관심이 인하대학교에 연결되었습니다.
        <br />
        올바른 학생사회와 학교를 위하여 계속해서 노력하는
        <br />
        <strong>인하대학교 총대의원회</strong>가 되겠습니다.
      </StyledText>
      <Margin size="20" />
      <StyledLogo src="/start/whiteBG.png" />
      <Margin size="20" />
      <StyledText size="12">
        여기는 <strong>Free Wi-Fine Zone</strong>입니다.
        <br />
        당신은 인하대학교에 <strong>만족(Fine)</strong>하신가요?
        <br />
        본 여론조사는 본교의 여러 사안에 대한
        <br />
        재학생의 의견을 수렴하고
        <br />
        목소리를 전달하고자 시행됩니다.
        <br />
        <strong>자유롭게(Free)</strong> 여러분의 의견을 들려주세요.
      </StyledText>
      <Margin size="50" />
      <Button>여론조사 안내 카드뉴스 확인하기</Button>
      <Margin size="12" />
      <Button>인하대학교 여론조사 참여하기</Button>
      <Margin size="50" />
      <StyledText size="12">
        올해 2022년,
        <br />
        <strong>인하대학교 제42대 총대의원회</strong>는
        <br />
        인스타그램에 총회 개최 공고와 감사 공고 및
        <br />
        월별 활동 보고를 안내하는 카드뉴스 등이 업로드됩니다.
        <br />
        <strong>학생사회와 총대의원회</strong>에 대해서 많은 관심 부탁드리며
        <br />
        5월 17일부터 5월 25일까지 진행하는
        <br />
        <strong>SNS 이벤트</strong>도 많은 참여 부탁드립니다.
      </StyledText>
      <Margin size="50" />
      <StyledLogo src="/start/whiteBG.png" />
      <Margin size="30" />
      <Button>
        <a href="https://www.instagram.com/inhabor_13/">
          SNS 이벤트 안내 카드뉴스 확인하기
        </a>
      </Button>
    </Layout>
  );
}
