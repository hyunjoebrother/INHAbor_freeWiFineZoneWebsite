import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Template from "./components/Template";
import AnimationA from "./components/AnimationA";
import AnimationB from "./components/AnimationB";
import AnimationC from "./components/AnimationC";
import AnimationD from "./components/AnimationD";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${(props) => (props.visible ? "block" : "none")};
  background-color: #ffffff;
  z-index: 9999;
`;

const StyledSlider = styled(Slider)`
  &,
  .slick-track,
  .slick-slide,
  .slick-list,
  .slick-slide > div {
    height: 100%;
  }
  .slick-slide > div {
    cursor: pointer;
    margin: auto;
  }
  .slick-prev {
    color: #a1a1a1;
    width: 30px;
    height: 30px;
  }
  .slick-next {
    color: #a1a1a1;
    width: 30px;
    height: 30px;
  }
  .slick-dots {
    top: 50px;
    bottom: initial;
  }
`;

const Item = styled.div`
  height: 100%;
`;

const Tutorial = () => {
  const [visible, setVisible] = useState(true);
  const [focused, setFocused] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    afterChange: (i) => setFocused(i),
  };

  useEffect(() => {
    if (localStorage.getItem("tutorial") === "true") setVisible(false);
    else setVisible(true);
  }, []);

  return (
    <Wrapper visible={visible}>
      <StyledSlider {...settings}>
        <Item>
          <Template
            animation={<AnimationA animation={focused === 0} />}
            title={
              <>
                감사합니다!
                <br />
                학우분의 작은 관심이 인하대학교에 연결되었습니다.
              </>
            }
            subtitle="올바른 학생사회와 학교를 위하여 계속해서 노력하는 인하대학교 총대의원회가 되겠습니다."
          />
        </Item>
        <Item>
          <Template
            animation={<AnimationB animation={focused === 1} />}
            title={<>이곳은 Free Wi-Fine ZONE입니다.</>}
            subtitle="당신은 인하대학교에 만족(Fine)히신가요?"
          />
        </Item>
        <Item>
          <Template
            animation={<AnimationC animation={focused === 2} />}
            title={
              <>
                본 여론조사의 의미는,
                <br />
                학생과 학생자치기구, 그리고 학교 간의 연결과 소통
              </>
            }
            subtitle="와이파이 연결이 약하고 끊기면 답답함과 불편함을 느끼듯
            본 여론조사는 중요한 소통구입니다."
          />
        </Item>
        <Item>
          <Template
            animation={<AnimationD animation={focused === 3} />}
            title={"이곳은 Free Wi-Fine Zone입니다."}
            subtitle="자유롭게(Free) 여러분의 의견을 들려주세요."
            last
          />
        </Item>
      </StyledSlider>
    </Wrapper>
  );
};

export default Tutorial;
