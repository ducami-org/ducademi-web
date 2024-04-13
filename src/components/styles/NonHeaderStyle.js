import styled from "styled-components";
import logoImg from '../../assets/image/logo.svg';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

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
    color: #00D282;
  }
`;

export const AuthContainer = styled.div`
`

export const LoginText = styled(Link)`
font-size: 15px;
font-weight: 600;
color: #616161;
margin-left: 720px;
text-decoration: none;
`


export const SignupText = styled(Link)`
font-size: 15px;
font-weight: 600;
color: #616161;
margin-left: 20px;
margin-right: 10px;
text-decoration: none;
`