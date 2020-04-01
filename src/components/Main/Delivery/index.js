import React from "react";
import * as Styled from "./styled";
import Button from "../../../shared/Button";
import PageHeader from "../../../shared/PageHeader";
import Map from "../../../shared/GoogleMapComponent";
import CallIcon from '@material-ui/icons/Call';

export default () => {

  return (
    <Styled.Container>
      <PageHeader title="Доставка" />
      <Styled.Text>Любой товар, из представленных в магазине Вы можете заказать с доставкой на дом, позвонив по номеру телефона 
        <Styled.CallLink href="tel:+375295559280">+375 29 555-92-80</Styled.CallLink> либо отправив нам сообщение.</Styled.Text>
      <Button type="contact">Отправить сообщение</Button>
      <Styled.MapContainer>
        <Map isMarkerShown={true} marker={{ lat: 53.910, lng: 27.518 }}/>
      </Styled.MapContainer>
    </Styled.Container>
  )
}