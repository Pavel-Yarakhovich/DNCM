import React from "react";
import StyledButton from "../../../../shared/Button";
import * as Styled from "./styled";
import { connect } from "react-redux";
import * as actionTypes from "../../../../store/actions/actionTypes";
import PopupContent from "./PopupContent";
import { withRouter } from "react-router-dom"

const Item = withRouter(({ history, src, description, showPopup }) => {
  const handleShowDetails = () => showPopup(<PopupContent src={src} text={description}/>);

  return (
    <Styled.Container>
      <Styled.Image src={src} />
      <Styled.Description>{description}</Styled.Description>
      <Styled.Buttons>
        <StyledButton type="details" clicked={handleShowDetails}>
          Show details
        </StyledButton>
        <StyledButton type="contact" clicked={() => history.push("/contacts")}>Contact us</StyledButton>
      </Styled.Buttons>
    </Styled.Container>
  );
});

const mapDispatchToProps = dispatch => {
  return {
    showPopup: content =>
      dispatch({ type: actionTypes.POPUP.SHOW, payload: content })
  };
};

export default connect(null, mapDispatchToProps)(Item);
