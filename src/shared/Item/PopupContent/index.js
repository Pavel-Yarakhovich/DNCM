import React from "react";
import * as Styled from "./styled";
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions/actionTypes";
import CallIcon from '@material-ui/icons/Call';

const Content = ({ src, text, closePopup }) => {
  return (
    <Styled.Container>
      <Styled.Close fontSize="large" onClick={closePopup} />
      <Styled.Image src={src} />
      <Styled.Description>
        <Styled.InfoTitle>Описание товара</Styled.InfoTitle>
        <Styled.InfoContent>{text}</Styled.InfoContent>
      </Styled.Description>
      <Styled.MoreInfo>
        <Styled.InfoBlock>
          <Styled.InfoTitle>Размеры</Styled.InfoTitle>
          <Styled.InfoContent>44</Styled.InfoContent>
        </Styled.InfoBlock>
        <Styled.InfoBlock>
          <Styled.InfoTitle>Производитель</Styled.InfoTitle>
          <Styled.InfoContent>вааааа</Styled.InfoContent>
        </Styled.InfoBlock>
        <Styled.CallLink href="tel:80445421964"><CallIcon fontSize="large"/>Позвонить в магазин</Styled.CallLink>
      </Styled.MoreInfo>
    </Styled.Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    closePopup: () => dispatch({ type: actionTypes.POPUP.CLOSE }),
  };
};

export default connect(null, mapDispatchToProps)(Content);
