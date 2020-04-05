import React from "react";
import Button from "../../../shared/Button";
import { EMAIL_TO } from "../../../config/consts";

import * as Styled from "./styled";

export default () => {
  return (
    <Styled.Container>
      <Styled.Motto h1>Остались вопросы?</Styled.Motto>
      <Styled.Motto>
        Напишите нам, и наш консультант свяжется с Вами в течение 15 минут.
      </Styled.Motto>
      <Styled.Form action={`mailto:${EMAIL_TO}`} enctype="text/plain">
        <Styled.Input type="text" placeholder="Ваше имя" />
        <Styled.Input type="text" placeholder="Ваше электронный адрес" />
        <Styled.TextArea type="text" placeholder="Ваше комментарий" />
        <Button type="submit">Отправить</Button>
      </Styled.Form>
    </Styled.Container>
  );
};
