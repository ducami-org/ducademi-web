import styled from "styled-components";
import logoImg from "../../assets/image/logo.svg";
import { NavLink } from "react-router-dom";
import profileImg from "../../assets/image/profile.svg";

export const Form = styled.form`
  display: flex;
  z-index: 10px;
`;

export const Bar = styled.header`
  width: 100%;
  height: 75px;
  background-color: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  margin-left: 126px;
`;

export const LogoImg = styled.img.attrs({
  src: logoImg,
  alt: "logo",
})`
  display: block;
  margin-right: 87px;
  width: 188px;
`;

export const Menu = styled(NavLink)`
  font-size: 17px;
  font-weight: 700;
  color: #616161;
  margin-left: 0px;
  margin-right: 50px;
  text-decoration: none;
  $.active {
    color: #00d282;
  }
`;

export const AuthContainer = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  margin-left: auto;
`;

export const MemberProfile = styled.img.attrs({
  src: profileImg,
  alt: "profile",
})`
`;

export const MemberName = styled.div`
font-size: 15px
font-weight: 600;
margin-left: 10px;
margin-right: 50px;
`;
