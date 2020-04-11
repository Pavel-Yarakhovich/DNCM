import React from "react";
import Item from "../../../../shared/Item";
import { ITEMS } from "../../../../config/consts";
import Button from "../../../../shared/Button";
import { withRouter } from "react-router-dom";
import * as Styled from "./styled";

import ThumbUpIcon from '@material-ui/icons/ThumbUp';

export default withRouter(({ history }) => {
  return (
    <Styled.Feature>
      {ITEMS.slice(0, 1).map(({ id, image, desc }) => (
        <Styled.HitItem src={image}>
          <Button type="hit-details" clicked={() => history.push("/products")}>Подробнее</Button>
        </Styled.HitItem>
      ))}
      <Styled.HitMark><ThumbUpIcon fontSize="large"/></Styled.HitMark>
    </Styled.Feature>
  );
});
