import React from "react";
import * as Styled from "./styled";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";

export default () => {
  return (
    <Styled.Feature>
      <Styled.Feature_Logo>
        <AccountBalanceWalletIcon />
      </Styled.Feature_Logo>
      <Styled.Feature_Description>
        Вы можете оплатить покупки не только наличными, но и банковской картой.
        Предоплата не обязательна, вы всегда можете заказать понравившуюся вещь
        сейчас, а оплатить в момент доставки.
      </Styled.Feature_Description>
    </Styled.Feature>
  );
};
