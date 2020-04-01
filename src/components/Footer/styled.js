import styled from "styled-components";
import { themes } from "../../config/themes";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StorefrontIcon from '@material-ui/icons/Storefront';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: ${themes.regular.violet};
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 2px solid ${themes.regular.gold};
`;

export const Anchor = styled(Link)`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Delivery = styled(ShoppingCartIcon)`
  color: ${themes.regular.white};
`;

export const Products = styled(StorefrontIcon)`
  color: ${themes.regular.white};
`;

export const Feedbacks = styled(EmojiPeopleIcon)`
  color: ${themes.regular.white};
`;

export const Contacts = styled(EditLocationIcon)`
  color: ${themes.regular.white};
`;