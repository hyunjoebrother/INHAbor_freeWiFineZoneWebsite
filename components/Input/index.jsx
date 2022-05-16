import styled from "styled-components";

const Input = styled.input`
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  padding: 10px 12px;
  width: 220px;
  height: 36px;
  margin: auto
  box-sizing: border-box;
  outline: none;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#dfdfdf"};
  &::placeholder {
    color: #000;
    font-size: 12px;
  }
  &:focus {
    border: 1px solid #0065b3;
    box-shadow: 3px -3px 0px #d6e0ef, 3px 3px 0px #bad1f4, -3px -3px 0px #bad1f4,
      -3px 3px 0px #bad1f4;
  }
  ${(props) =>
    props.password &&
    `
    background-image: url(/login/lock-icon.svg);
    background-repeat: no-repeat;
    background-position: 20px center;
    padding: 10px 12px 10px 50px;
    `}
`;

export default Input;
