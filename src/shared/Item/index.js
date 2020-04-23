import React from "react";
import StyledButton from "../../shared/Button";
import * as Styled from "./styled";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/actionTypes";
import PopupContent from "./PopupContent";
import { withRouter } from "react-router-dom";

const Item = withRouter(({ history, src, description, size, manufacturer, showPopup }) => {
  const handleShowDetails = () => showPopup(<PopupContent src={src} text={description} size={size} manufacturer={manufacturer} />);

  return (
    <Styled.Container>
      <Styled.Wrapper>
      <Styled.Image src={src} />
      <Styled.Description>{description.substr(0, 80)} ...</Styled.Description>
      <Styled.Buttons>
        <StyledButton type="details" clicked={handleShowDetails}>
          Подробнее
        </StyledButton>
        {/* <StyledButton type="contact" clicked={() => history.push("/contacts")}>Заказать</StyledButton> */}
      </Styled.Buttons>
      </Styled.Wrapper>
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
