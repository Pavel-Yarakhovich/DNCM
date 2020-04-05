import React from "react";
import * as Styled from "./styled";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StorefrontIcon from "@material-ui/icons/Storefront";
import EditLocationIcon from "@material-ui/icons/EditLocation";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import FooterLink from "./FooterLink";

export default () => {
  return (
    <Styled.Footer>
      <Styled.Container>
        <FooterLink type="delivery"><ShoppingCartIcon fontSize="large"/></FooterLink>
        <FooterLink type="products"><StorefrontIcon fontSize="large"/></FooterLink>
        <FooterLink type="feedbacks"><EmojiPeopleIcon fontSize="large"/></FooterLink>
        <FooterLink type="contacts"><EditLocationIcon fontSize="large"/></FooterLink>
      </Styled.Container>
    </Styled.Footer>
  );
};
