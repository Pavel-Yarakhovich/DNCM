import React, { useState } from "react";
import Button from "../../../shared/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Item from "./Item";
import { ITEMS } from "../../../config/consts";
import SideFilter from "./SideFilter";
import DeliveryInfo from "./DeliveryInfo";

import * as Styled from "./styled";

export default () => {
  const [selected, setSelected] = useState(null);
  const handleFilter = e => setSelected(e.target.name);
  return (
    <Styled.Container>
      <Styled.Filter>
        <Button type="select" name="boy" clicked={handleFilter} isActive={selected === "boy"}>Мальчикам</Button>
        <Button type="select" name="girl" clicked={handleFilter} isActive={selected === "girl"}>Девочкам</Button>
        <Button type="select" name="shoes" clicked={handleFilter} isActive={selected === "shoes"}>Обувь</Button>
        <Button type="select" name="other" clicked={handleFilter} isActive={selected === "other"}>Разное</Button>
      </Styled.Filter>
      <DeliveryInfo />
     
      <Styled.Display>
          {ITEMS.map(({ desc, image }, key) => (
            <Item key={key} src={image} description={desc}/>
          ))}
      </Styled.Display>
      <SideFilter clicked={handleFilter} selected={selected}/>
    </Styled.Container>
  );
};
