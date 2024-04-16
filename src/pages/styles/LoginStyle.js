import styled from "styled-components";
import BackgroundImg from "../../assets/BackgroundImg.svg";

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

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 385px;
  height: 150px;
`;

export const LoginBox = styled.input`
  width: 370px;
  height: 70px;
  border: 1px solid #212121;
  border-radius: 5px;
  margin-bottom: 12px;
  color: #616161;
  padding-left: 15px;
`;

export const PwBox = styled.input`
  width: 370px;
  height: 70px;
  border: 1px solid #212121;
  border-radius: 5px;
  color: #616161;
  padding-left: 15px;
`;

export const LoginButton = styled.button`
  width: 385px;
  height: 70px;
  background-color: #212121;
  color: white;
  font-size: 16px;
  border-radius: 5px;
  margin-top: 15px;
  font-weight: 600;
`;
