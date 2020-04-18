import React, { useState, useEffect } from "react";
import Button from "../../../shared/Button";
import { EMAIL_TO } from "../../../config/consts";
import ConnectOptions from "./ConnectOptions";
import { useMutation } from "@apollo/react-hooks";
import { addRequestMutation } from "./mutations";
import Confirmation from "./ConfirmationPopup";

import * as Styled from "./styled";

export default () => {
  const [formValues, setFormValues] = useState({ served: false });
  const [addRequest, { data }] = useMutation(addRequestMutation);
  const [showMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState("");
  const handleInputChange = (e) =>
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  const handleradioChange = (e) =>{
    setFormValues({
      ...formValues,
      connectBy: e.target.value,
    });
    setMessage(e.target.value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);
    await addRequest({
      variables: {
        name: formValues.name,
        phone: formValues.phone,
        comment: formValues.comment,
        connectBy: formValues.connectBy,
        served: false,
      },
    });
    setFormValues({ served: false });
    setShowMessage(true);
    console.log("Request is done");
  };

  const setMessage = (connectOption) => {
    console.log(connectOption === "whatsapp" );
    let message = "";
    switch (connectOption) {
      case "viber":
        message = "Скоро мы напишем Вам в Viber.";
        break;
      case "telegram":
        message = "Скоро мы напишем Вам в Telegram.";
        break;
      case "whatsapp":
        message = "Скоро мы напишем Вам в WhatsApp.";
        break;
      default:
        message = "Скоро мы позвоним Вам.";
    }
    setMessageText(message);
  };

  return (
    <>
      <Styled.Container>
        <Styled.Motto h1>Остались вопросы?</Styled.Motto>
        <Styled.Motto>
          Напишите нам, и мы свяжется с Вами в течение 15 минут.
        </Styled.Motto>
        <Styled.Form>
          <Styled.Input
            type="text"
            name="name"
            placeholder="Ваше имя"
            onChange={handleInputChange}
            value={formValues.name || ""}
          />
          <Styled.Input
            type="text"
            name="phone"
            placeholder="Ваш номер телефона"
            onChange={handleInputChange}
            value={formValues.phone || ""}
          />
          <ConnectOptions
            changedRadio={handleradioChange}
            defaultValue={"call"}
          />
          <Styled.TextArea
            type="text"
            name="comment"
            placeholder="Ваш комментарий"
            onChange={handleInputChange}
            value={formValues.comment || ""}
          />
          <Button type="submit" clicked={handleSubmit}>
            Отправить
          </Button>
        </Styled.Form>
      </Styled.Container>
      <Confirmation
        showMessage={showMessage}
        message={`Ваш комментарий принят. ${messageText}`}
      />
    </>
  );
};
