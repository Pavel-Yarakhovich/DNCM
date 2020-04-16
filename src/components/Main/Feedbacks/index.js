import React from "react";
import PageHeader from "../../../shared/PageHeader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as Styled from "./styled";
import Feedback from "./Feedback";
import { feedbacksQuery } from "./queries";
import { useQuery } from "@apollo/react-hooks";

export default () => {
  const { loading, error, data } = useQuery(feedbacksQuery);
  console.log(error);
  console.log("loading", loading);
  console.log(data);
  return (
    <Styled.Container>
      <PageHeader title="Отзывы наших клиентов" />
      <Styled.FeedBacks>
        {loading 
        ? <p>Отзывы загружаются...</p> 
        : (
          <Slider dots={true} slidesToScroll={1} slidesToShow={3}>
            { data.feedbacks.map(({ id, name, comment }) => (
                <Feedback name={name} comment={comment} />
              ))
            }
          </Slider>
        )}
      </Styled.FeedBacks>
    </Styled.Container>
  );
};
