import React from "react";
import * as Styled from "./styled";
import Button from "../../../shared/Button";
import PageHeader from "../../../shared/PageHeader";
import Map from "../../../shared/GoogleMapComponent";
import Terms from "./Terms";
import Payment from "./Payment";
import Warranty from "./Warranty";
import Hit from "./Hit";
import Address from "./Address";

export default () => {
  return (
    <Styled.Container>
      <PageHeader title="Доставка" />
      <Styled.Content>
        <Styled.Terms>
          <Terms />
        </Styled.Terms>
        <Styled.Payment>
          <Payment />
        </Styled.Payment>
        <Styled.Warranty>
          <Warranty />
        </Styled.Warranty>
        <Styled.Hits>
          <Hit />
        </Styled.Hits>
        <Styled.Address>
          <Address />
        </Styled.Address>
        <Styled.Map>
          <Map isMarkerShown={true} marker={{ lat: 53.91, lng: 27.518 }} />
        </Styled.Map>
      </Styled.Content>
    </Styled.Container>
  );
};
