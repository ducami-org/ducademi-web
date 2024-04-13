import React from "react";
// import { Link } from "react-router-dom";
import * as D from '../../../components/styles/NonHeaderStyle';



const NonHeader = () => {
    return (
        <D.Form>
            <D.Bar>
                <D.Container>
                    <D.LogoImg />
                </D.Container>
                <D.Menu to="./lectureroom">강의실</D.Menu>
                <D.Menu to="./textbookroom">교재실</D.Menu>
                <D.AuthContainer>
                    <D.LoginText to="./login">로그인</D.LoginText>
                    <D.SignupText to="./signup">회원가입</D.SignupText>
                </D.AuthContainer>
            </D.Bar>
        </D.Form>
    );
}

export default NonHeader;