import React from "react";
import * as Styled from "./styled";

export default () => {

  return (
    <Styled.Container>
      <Styled.Anchor to="/delivery">
        <Styled.Delivery fontSize="large"/>
      </Styled.Anchor>
      <Styled.Anchor to="/products">
        <Styled.Products fontSize="large"/>
      </Styled.Anchor>
      <Styled.Anchor to="/feedbacks">
        <Styled.Feedbacks fontSize="large"/>
      </Styled.Anchor>
      <Styled.Anchor to="/contacts">
        <Styled.Contacts fontSize="large"/>
      </Styled.Anchor>
    </Styled.Container>
  )
}