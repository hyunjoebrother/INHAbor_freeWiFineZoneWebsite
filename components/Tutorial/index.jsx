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
            animation={<AnimationB animation={focused === 0} />}
            title={
              <>
                감사합니다!
                <br />
                ✨학우분의 작은 관심이 연결되었습니다✨
              </>
            }
          />
        </Item>
        <Item>
          <Template
            animation={<AnimationC animation={focused === 1} />}
            title={<>이곳은 Free Wi-Fine ZONE입니다.</>}
            subtitle="당신은 인하대학교에 만족(Fine)히신가요?"
          />
        </Item>
        <Item>
          <Template
            animation={<AnimationA animation={focused === 2} />}
            title={
              <>
                💡 학생과 학생자치기구, <br />
                그리고 학교본부와의 연결
              </>
            }
            subtitle={
              <>
                와이파이 연결이 불안정하면 불편함을 느끼는 것처럼,
                <br />본 여론조사는 <br />
                학우분들의 목소리를 대변하는 소통 창구입니다.
              </>
            }
          />
        </Item>
        <Item>
          <Template
            animation={<AnimationD />}
            title={
              <>
                이곳은 Free Wi-Fine Zone입니다🔓
                <br />
                자유롭게(Free) <br />
                여러분의 의견을 들려주세요📝
              </>
            }
            subtitle={
              <>
                올바른 학생사회와 인하대학교의 도약을 위해
                <br />
                꾸준히 정진하는 총대의원회가 되겠습니다.
              </>
            }
            last
          />
        </Item>
      </StyledSlider>
    </Wrapper>
  );
};

export default Tutorial;
