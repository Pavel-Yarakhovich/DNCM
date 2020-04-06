import React from "react";
import * as Styled from "./styled";
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions/actionTypes";

const Content = ({ src, text, closePopup }) => {

  return (
    <Styled.Container>
      <Styled.Close fontSize="large" onClick={closePopup} />
      <Styled.Image src={src} />
      <Styled.Text>{text}</Styled.Text>
    </Styled.Container>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    closePopup: () => dispatch({type: actionTypes.POPUP.CLOSE})
  }
}

export default connect(null, mapDispatchToProps)(Content);