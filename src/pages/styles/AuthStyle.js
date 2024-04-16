import styled from "styled-components";
import BackgroundImg from "../../assets/img/AuthBackgroundImg.svg"

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundImg});
  background-size: cover;
  justify-content: center;
`;

export const MainWrapper = styled.div`
  display: flex;
  width: 580px;
  height: 600px;
  background-color: white;
  box-shadow: 0px 4px 250px 0px rgba(0, 0, 0, 0.1);
  align-self: center;
  border-radius: 10px;
  justify-content: center;
`;

export const Title = styled.span`
  font-size: 40px;
  font-weight: 700;
  font-family: "pretendard";
  color: #212121;
  margin-bottom: 15px;
`;

export const SubTitle = styled.span`
  font-size: 15px;
  color: #757575;
  font-family: "pretendard";
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 385px;
  height: 150px; // 이 비율 재조정 필요
`;

export const ObjectWrapper = styled.div`
  align-self: center;
  width: 385px;
  height: 474px;
  flex-direction: column;
`;
