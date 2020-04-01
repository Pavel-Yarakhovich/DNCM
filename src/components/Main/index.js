import React from "react";
import * as Styled from "./styled";
import Delivery from "./Delivery";
import Products from "./Products";
import Feedbacks from "./Feedbacks";
import Contacts from "./Contacts";
import { Switch, Route } from "react-router-dom";
import PopupContainer from "../../shared/PopUpContainer";

export default () => {

  return (
    <Styled.Container>
      <Switch>
        <Route path="/delivery" component={Delivery} />
        <Route path="/products" component={Products} />
        <Route path="/feedbacks" component={Feedbacks} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
      <PopupContainer />
    </Styled.Container>
  )
}