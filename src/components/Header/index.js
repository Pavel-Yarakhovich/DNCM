import React from "react";
import Logo from "../../assets/image/logo.png";
import InstagramIcon from "@material-ui/icons/Instagram";

import * as Styled from "./styled";

export default () => {
  return (
    <Styled.Header>
      <Styled.Container>
        <Styled.AdminLink to="/admin">
          <Styled.Logo src={Logo} />
        </Styled.AdminLink>
        <Styled.Insta
          href="https://www.instagram.com/danceme_official_minsk/"
          target="_blank"
        >
          <InstagramIcon fontSize="large" />
        </Styled.Insta>
        <Styled.Call fontSize="large" />
        <Styled.Contact href="tel:80445421964">
          +375 44 542-19-64
        </Styled.Contact>
      </Styled.Container>
    </Styled.Header>
  );
};
