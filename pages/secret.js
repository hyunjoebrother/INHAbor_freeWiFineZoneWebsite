import React from "react";
import styled, { css } from "styled-components";
import Layout from "../components/Layout";
import Flex from "../components/Flex";
import Header from "../components/Header";
import Margin from "../components/Margin";
import Text from "../components/Text";
import Button from "../components/Button";
import Tutorial from "../components/Tutorial";
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

export default function Secret() {
  return (
    <Layout>
      <Flex justify="center" align="center">
        <Header />
      </Flex>
      <Margin size="24" />
      <Tutorial />
    </Layout>
  );
}
