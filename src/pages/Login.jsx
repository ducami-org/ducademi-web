import React, { useState } from "react";
import * as D from "./styles/LoginStyle";
import axios from "axios";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const IdEventHandle = (e) => {
    setId(e.target.value);
  };

  const PwEventHandle = (e) => {
    setPw(e.target.value);
  };

  // const LoginButton = async() => {
  //   if (id === '', pw ==='') {
  //     alert('아이디 비밀번호를 입력하시오')
  //   } else {
  //     try{
  //       const response = await axios.post(`${}auth/sign-in`, {
  //         id : `${id}`,
  //         pw : `${pw}`
  //       });
  //     }catch {
  //       if()
  //     }
  //   }

  return (
    <D.Wrapper>
      <D.MainWrapper>
        <div style={{ alignSelf: "center", width: 385, height: 474, flexDirection: "colum" }}>
          <D.TitleWrapper>
            <D.Title>Log In</D.Title>
            <D.SubTitle>강의 신청과 교재 확인을 편리하게 두카데미에서</D.SubTitle>
          </D.TitleWrapper>
          <D.BoxWrapper>
            <D.LoginBox placeholder="아이디" onChange={IdEventHandle} />
            <D.PwBox placeholder="비밀번호" type="password" onChange={PwEventHandle} />
          </D.BoxWrapper>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 31, textAlign: "center" }}>
            <div>
              <input type="checkbox" style={{ width: 18, height: 18, marginRight: 7 }}></input>
              <span>로그인 유지</span>
            </div>
            <span>아이디/비밀번호 찾기</span>
          </div>
          <D.LoginButton>로그인</D.LoginButton>
          <div style={{ marginTop: 15, textAlign: "center" }}>
            <span style={{ marginRight: 3 }}>이미 계정이 있으신가요?</span>
            <span style={{ color: "#00D282", cursor: "pointer" }}>회원가입</span>
          </div>
        </div>
      </D.MainWrapper>
    </D.Wrapper>
  );
};

export default Login;
