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
  font-size: 16.6px;
  text-align: center;
  line-height: 1.3;
  letter-spacing: -2px;
  font-weight: 600;
`;

const StyledTitle = styled.div`
  width: 100%;
  font-size: 17.4px;
  color: #0065b3;
  text-align: center;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -2px;
`;

const Subtitle = styled.div`
  width: 100%;
  font-size: 12px;
  color: #686868;
  text-align: center;
  font-weight: 300;
  line-height: 1.3;
  white-space: pre-line;
`;

const StyledButton = styled(Button)`
  border-radius: 100px;
  font-size: 20px;
  font-size: 16px;
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
          <Margin size={48} />

          <Title>{title}</Title>
          <Margin size={14} />

          <Subtitle>{subtitle}</Subtitle>
        </>
      )}

      {last && (
        <>
          <StyledTitle>{title}</StyledTitle>
          <Margin size={18} />
          <Subtitle>{subtitle}</Subtitle>
          <Margin size={34} />
          <StyledButton backgroundColor="#0065b3" width="230" height="50">
            <a href="https://www.instagram.com/inhabor_13/">
              여론조사 참여하기
            </a>
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
