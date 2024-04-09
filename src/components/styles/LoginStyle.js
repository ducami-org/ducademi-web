import styled from "styled-components";
import backgroundImg from "../../assets/BackgroundImg.svg";

// 로그인 화면 어떻게 할지 피드백 반영
export const Wrapper = styled.div`
  display: flex;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  background-size: cover;
`;

export const LoginWrapper = styled.div`
  width: 530px;
  height: 580px;
  margin: 0 auto;
  background-color: white;
  justify-content: center;
  align-self: center;
  box-shadow: 0px 4px 100px 10px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
`;


