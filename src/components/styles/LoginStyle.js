import styled from "styled-components";
import BackgroundImg from "../../assets/BackgroundImg.svg";

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundImg});
  background-size: cover;
`;
