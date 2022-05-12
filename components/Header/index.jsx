import React from "react";
import styled, { css } from "styled-components";
import Layout from "../Layout";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: red;
`;

export default function Header() {
  return (
    <Layout>
      <HeaderWrapper></HeaderWrapper>
    </Layout>
  );
}
