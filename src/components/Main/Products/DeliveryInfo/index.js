import React from "react";
import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import * as Styled from "./styled";

export default () => {
  return (
    <Styled.Container>
      <Styled.Feature>
        <Styled.Feature_Logo>
          <EmojiTransportationIcon />
        </Styled.Feature_Logo>
        <Styled.Feature_Description>
          Бесплатная доставка и примерка* по всей территории Минска.
        </Styled.Feature_Description>
        <Styled.Details to="/delivery">подробнее</Styled.Details>
      </Styled.Feature>
      <Styled.Feature>
        <Styled.Feature_Logo>
          <AccountBalanceWalletIcon />
        </Styled.Feature_Logo>
        <Styled.Feature_Description>
          Вы можете оплатить покупки не только наличными, но и банковской
          картой. Предоплата не обязательна, вы всегда можете заказать
          понравившуюся вещь сейчас, а оплатить в момент доставки.
        </Styled.Feature_Description>
      </Styled.Feature>
      <Styled.Feature>
        <Styled.Feature_Logo>
          <VerifiedUserIcon />
        </Styled.Feature_Logo>
        <Styled.Feature_Description>
          Danceme гарантирует качество и подлинность каждой вещи, которую вы у
          нас купите. Если вещь вам не подойдет, у Вас есть 14 дней на возврат
          со 100% возмещением денег.
        </Styled.Feature_Description>
      </Styled.Feature>
    </Styled.Container>
  );
};
