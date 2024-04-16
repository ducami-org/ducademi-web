import React from "react";
import * as D from "../../../pages/styles/MemberHeaderStyle";

const MemberHeader = () => {
  return (
    <D.Form>
      <D.Bar>
        <D.Container>
          <D.LogoImg />
        </D.Container>
        <D.Menu to="./lectureroom">강의실</D.Menu>
        <D.Menu to="./textbookroom">교재실</D.Menu>
        <D.AuthContainer to="./myprofile">
          <D.MemberProfile />
          <D.MemberName>pizza</D.MemberName>
        </D.AuthContainer>
      </D.Bar>
    </D.Form>
  );
};

export default MemberHeader;
