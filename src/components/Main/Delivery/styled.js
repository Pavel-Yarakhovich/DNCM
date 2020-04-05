import styled from "styled-components";
import { themes } from "../../../config/themes";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;  
  font-size: 1rem;
  color: ${themes.regular.black};
`;

export const Content = styled.div`
  width: 100%;
  flex-grow: 1;
  display: grid;
  grid-template-rows: 1fr 300px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  grid-template-areas: 
    "terms payment warranty hits"
    "address address map map";

  @media (max-width: 1200px) {
    grid-template-rows: 1fr 1fr 300px;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    grid-template-areas: 
      "terms payment"
      "warranty hits"
      "address map";
  }
`;

export const Terms  = styled.div`
  grid-area: terms;
  border-radius: 8px;
  border: 1px solid red;
`;

export const Payment  = styled.div`
  grid-area: payment;
  border-radius: 8px;
  border: 1px solid red;
`;

export const Warranty  = styled.div`
  grid-area: warranty;
  border-radius: 8px;
  border: 1px solid red;
`;

export const Hits  = styled.div`
  grid-area: hits;
  border-radius: 8px;
  border: 1px solid red;
`;

export const Address  = styled.div`
  grid-area: address;
  border-radius: 8px;
  border: 1px solid red;
`;

export const Map  = styled.div`
  grid-area: map;
  border-radius: 8px;
  border: 1px solid red;
`;
