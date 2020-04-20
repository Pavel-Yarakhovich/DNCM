import React, { useEffect, useState } from "react";
import PageHeader from "../../../shared/PageHeader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as Styled from "./styled";
import Feedback from "./Feedback";
import { feedbacksQuery } from "./queries";
import { useQuery } from "@apollo/react-hooks";
import { useWindowWidth } from "../../../utils/useWindowWidth";
import Spinner from "../../../shared/Spinner";

export default () => {
  const [feedbacksPerPage, setFeedbacksPerPage] = useState(3);
  const { loading, error, data } = useQuery(feedbacksQuery);
  const width = useWindowWidth();
  useEffect(() => {
    if (width < 550) setFeedbacksPerPage(1);
    if (width > 900) {
      setFeedbacksPerPage(3);
    } else {
      setFeedbacksPerPage(2);
    }
  }, [width]);

  return (
    <Styled.Container>
      <PageHeader title="Отзывы наших клиентов" />
      <Styled.FeedBacks>
        {loading ? (
          <Spinner />
        ) : (
          <Slider
            dots={true}
            slidesToScroll={1}
            slidesToShow={feedbacksPerPage}
          >
            {data.feedbacks.map(({ id, name, comment }) => (
              <Feedback name={name} comment={comment} />
            ))}
          </Slider>
        )}
      </Styled.FeedBacks>
    </Styled.Container>
  );
};
