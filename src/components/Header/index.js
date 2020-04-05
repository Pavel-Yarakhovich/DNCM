import React from "react";
import Logo from "../../assets/image/logo.png";

import * as Styled from "./styled";

export default () => {
  return (
    <Styled.Header>
      <Styled.Container>
        <Styled.Logo src={Logo} />
        <Styled.Call fontSize="large" />
        <Styled.Contact href="tel:80295559280">
          +375 29 555-92-80
        </Styled.Contact>
      </Styled.Container>
    </Styled.Header>
  );
};
