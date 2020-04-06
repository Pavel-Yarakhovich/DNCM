import React from "react";
import * as Styled from "./styled";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

export default () => {
  return (
    <Styled.Feature>
      <Styled.Feature_Logo>
        <VerifiedUserIcon />
      </Styled.Feature_Logo>
      <Styled.Feature_Description>
        Danceme гарантирует качество и подлинность каждой вещи, которую вы у нас
        купите. Если вещь вам не подойдет, у Вас есть 14 дней на возврат со 100%
        возмещением денег.
      </Styled.Feature_Description>
    </Styled.Feature>
  );
};
