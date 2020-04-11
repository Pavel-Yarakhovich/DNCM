import React from "react";
import * as Styled from "./styled";
import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";

export default () => {
  return (
    <Styled.Feature>
      <Styled.Feature_Logo>
        <EmojiTransportationIcon />
      </Styled.Feature_Logo>
      <Styled.Feature_Description>
        Бесплатная доставка и примерка* по всей территории Минска.
      </Styled.Feature_Description>
      <Styled.Feature_Description>
        Доставка осуществляется в день заказа при оформлении заказа до 12.00, либо на следующий после заказ день.
      </Styled.Feature_Description>
      <Styled.Feature_Description>
        *примерка вещей осуществляется бесплатно в случае приобретения как минимум одного товара из списка заказанных для примерки.
      </Styled.Feature_Description>
    </Styled.Feature>
  );
};
