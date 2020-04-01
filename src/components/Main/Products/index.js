import React from "react";
import Button from "@material-ui/core/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Item from "./Item";
import { ITEMS } from "../../../config/consts";

import * as Styled from "./styled";

export default () => {

  return (
    <Styled.Container>
      <Styled.Filter color="secondary">
        <Button>Boys</Button>
        <Button>Girls</Button>
        <Button>Shoes</Button>
        <Button>Other</Button>
      </Styled.Filter>

      <Styled.Display>
        <Slider 
          dots={false}
          slidesToScroll={1}
          slidesToShow={1}
        >
          {ITEMS.map(({ desc, image }, key) => (
            <Item key={key} src={image} description={desc}/>
          ))}
        </Slider>
      </Styled.Display>


    </Styled.Container>
  );
};
