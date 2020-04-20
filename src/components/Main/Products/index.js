import React, { useState, useEffect } from "react";
import Button from "../../../shared/Button";
import Item from "../../../shared/Item";
import SideFilter from "./SideFilter";
import DeliveryInfo from "./DeliveryInfo";
import { useQuery } from "@apollo/react-hooks";
import { productsQuery } from "./queries";
import NoPhoto from "../../../assets/image/no_photo.png";
import Spinner from "../../../shared/Spinner";

import * as Styled from "./styled";

export default () => {
  const [filter, setFilter] = useState("all");
  const handleFilter = (e) => setFilter(e.target.name);
  const { loading, error, data } = useQuery(productsQuery);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    !loading && setItems(data.items);
  }, [loading]);

  useEffect(() => {
    filter === "all"
      ? setFilteredItems(items)
      : setFilteredItems(items.filter(({ kind }) => kind === filter));
  }, [filter, items]);

  return (
    <Styled.Container>
      <Styled.Filter>
        <Button
          type="select"
          name="all"
          clicked={handleFilter}
          isActive={filter === "all"}
        >
          Все товары
        </Button>
        <Button
          type="select"
          name="boy"
          clicked={handleFilter}
          isActive={filter === "boy"}
        >
          Мальчикам
        </Button>
        <Button
          type="select"
          name="girl"
          clicked={handleFilter}
          isActive={filter === "girl"}
        >
          Девочкам
        </Button>
        <Button
          type="select"
          name="shoes"
          clicked={handleFilter}
          isActive={filter === "shoes"}
        >
          Обувь
        </Button>
        <Button
          type="select"
          name="other"
          clicked={handleFilter}
          isActive={filter === "other"}
        >
          Разное
        </Button>
      </Styled.Filter>
      <DeliveryInfo />

      <Styled.Display>
        {loading ? (
          <Spinner />
        ) : (
          filteredItems.map(
            ({ id, image, description, size, manufacturer }) => {
              console.log(window.atob(image));
              return(
              <Item
                key={id}
                src={image ? window.atob(image) : NoPhoto}
                description={description}
                size={size}
                manufacturer={manufacturer}
              />
              )
            }
          )
        )}
      </Styled.Display>
      <SideFilter clicked={handleFilter} selected={filter} />
    </Styled.Container>
  );
};
