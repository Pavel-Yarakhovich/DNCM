import React from "react";
import * as Styled from "./styled";
import PopupContainer from "../../shared/PopUpContainer";
import Routing from "../Routing";

export default () => {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Routing />
        <PopupContainer />
      </Styled.Wrapper>
    </Styled.Container>
  );
};
