import React from "react";
import Button from "../../../shared/Button";
import * as Styled from "./styled";

export default () => {

  return (
    <Styled.Container>
      <Styled.Motto>Остались вопросы? Напишите нам, и наш консультант свяжется с Вами в течение 15 минут.</Styled.Motto>
      <Styled.Input type="text" placeholder="Ваше имя" />
      <Styled.Input type="text" placeholder="Ваше электронный адрес" />
      <Styled.TextArea type="text" placeholder="Ваше комментарий" />
      <Button type="contact">Отправить</Button>
    </Styled.Container>
  )
}