import React, { useState } from "react";
import * as D from "./styles/LoginStyle";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CONFIG from "../config/config.json";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const IdEventHandle = (e) => {
    setId(e.target.value);
  };

  const PwEventHandle = (e) => {
    setPw(e.target.value);
  };

  const navigate = useNavigate();

  const AuthNav = () => {
    navigate("/auth");
  };

  const LoginButton = async () => {
    if ((id === "", pw === "")) {
      alert("아이디 비밀번호를 입력하시오");
    }
    try {
      const response = await axios.post(
        `${CONFIG.serverUrl}member/login`,
        {
          id: `${id}`,
          password: `${pw}`,
        },
        {
          headers: "application/x-www-form-unlencoded",
        }
      );
      if (response.status === 200) {
        navigate("/main");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <D.Wrapper>
      <D.MainWrapper>
        <D.ObjectWrapper>
          <D.TitleWrapper>
            <D.Title>Log In</D.Title>
            <D.SubTitle>강의 신청과 교재 확인을 편리하게 두카데미에서</D.SubTitle>
          </D.TitleWrapper>
          <D.BoxWrapper>
            <D.LoginBox placeholder="아이디" onChange={IdEventHandle} value={id} />
            <D.PwBox placeholder="비밀번호" type="password" onChange={PwEventHandle} value={pw} />
          </D.BoxWrapper>
          <D.LoginRemainWrapper>
            <div>
              <input type="checkbox" style={{ width: 18, height: 18, marginRight: 7 }}></input>
              <span>로그인 유지</span>
            </div>

            <span>아이디/비밀번호 찾기</span>
          </D.LoginRemainWrapper>
          <D.LoginButton onClick={LoginButton}>로그인</D.LoginButton>
          <div style={{ marginTop: 15, textAlign: "center" }}>
            <span style={{ marginRight: 3 }}>이미 계정이 있으신가요?</span>
            <span style={{ color: "#00D282", cursor: "pointer" }} onClick={AuthNav}>
              회원가입
            </span>
          </div>
        </D.ObjectWrapper>
      </D.MainWrapper>
    </D.Wrapper>
  );
};

export default Login;
