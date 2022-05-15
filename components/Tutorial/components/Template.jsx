import { useRouter } from "next/router";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../../Button";
import Layout from "../../Layout";
import Margin from "../../Margin";

const Animation = styled.div`
  width: 100%;
`;

const Title = styled.div`
  width: 100%;
  font-size: 20px;
  text-align: center;
  line-height: 1.3;
  letter-spacing: -2px;
`;

const StyledTitle = styled.div`
  width: 100%;
  font-size: 22px;
  color: #0065b3;
  text-align: center;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -2px;
`;

const Subtitle = styled.div`
  width: 100%;
  font-size: 14px;
  color: #686868;
  text-align: center;
  font-weight: 300;
  line-height: 1.3;
  white-space: pre-line;
`;

const StyledButton = styled(Button)`
  border-radius: 100px;
  font-size: 20px;
  border: none;
  cursor: pointer;
  color: white;
`;

export default function Template({ animation, title, subtitle, last }) {
  const router = useRouter();
  return (
    <Layout>
      <Animation>{animation}</Animation>
      {!last && (
        <>
          <Margin size={60} />

          <Title>{title}</Title>
          <Margin size={18} />

          <Subtitle>{subtitle}</Subtitle>
        </>
      )}

      {last && (
        <>
          <StyledTitle>{title}</StyledTitle>
          <Margin size={18} />
          <Subtitle>{subtitle}</Subtitle>
          <Margin size={40} />
          <StyledButton
            backgroundColor="#0065b3"
            width="230"
            height="50"
            onClick={() => router.push("/login")}
          >
            여론조사 참여하기
          </StyledButton>
        </>
      )}
    </Layout>
  );
}
Template.propTypes = {
  animation: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  last: PropTypes.bool.isRequired,
};
