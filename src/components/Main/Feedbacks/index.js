import React from "react";
import PageHeader from "../../../shared/PageHeader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as Styled from "./styled";
import Feedback from "./Feedback";

export default () => {
  return (
    <Styled.Container>
      <PageHeader title="Отзывы наших клиентов" />
      <Styled.FeedBacks>
        <Slider dots={true} slidesToScroll={1} slidesToShow={3}>
          <Feedback
            name="Andrew"
            comment="Очень хорошие товары и сервис. Быстрая доставка. Супер вообще все!"
          />
          <Feedback
            name="Pavel"
            comment="Очень хорошие товары и сервис. Быстрая доставка. Супер вообще все! Очень хорошие товары и сервис. Быстрая доставка. Супер вообще все!"
          />
          <Feedback
            name="Ivan"
            comment="Очень хорошие товары и сервистрая доставка. Супер вообще все! Очень хорошие товары и сервис. Быстрая доставка. Супер вообще все!"
          />
          <Feedback
            name="Alex"
            comment="Очень хорошие товстрая доставка. Супер вообще все! Очень хорошие товары и сервис. Быстрая доставка. Супер вообще все!"
          />
          <Feedback
            name="Dima"
            comment="Очень хорошие товары и сервис. Быстрая доставка. Супер вообще все!"
          />
          <Feedback
            name="Anton"
            comment="Очень хорошие товары и сервис.  все! Очень хорошие товары и сервис. Быстрая доставка. Супер вообще все!"
          />
        </Slider>
      </Styled.FeedBacks>
    </Styled.Container>
  );
};
