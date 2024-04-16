import React from "react";
import * as D from "../../../pages/styles/DucamiHeaderStyle";

const DucamiHeader = () => {
  return (
    <D.Form>
      <D.Bar>
        <D.Container>
          <D.LogoImg />
        </D.Container>
        <D.Menu to="./a">강의실 관리</D.Menu>
        <D.Menu to="./b">교재실 관리</D.Menu>
        <D.AuthContainer to="./myprofile">
          <D.MemberProfile />
          <D.MemberName>ducami</D.MemberName>
        </D.AuthContainer>
      </D.Bar>
    </D.Form>
  );
};

export default DucamiHeader;
