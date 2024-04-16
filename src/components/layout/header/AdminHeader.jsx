import React from "react";
import * as D from "../../../pages/styles/AdminHeaderStyle";

const AdminHeader = () => {
  return (
    <D.Form>
      <D.Bar>
        <D.Container>
          <D.LogoImg />
        </D.Container>
        <D.Menu to="./c">조회</D.Menu>
        <D.AuthContainer to="./myprofile">
          <D.MemberProfile />
          <D.MemberName>admin</D.MemberName>
        </D.AuthContainer>
      </D.Bar>
    </D.Form>
  );
};

export default AdminHeader;
