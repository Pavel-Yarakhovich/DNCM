import styled from "styled-components";
import { themes } from "../../../config/themes";
import Slider from "react-slick";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 150px);
  background: ${themes.regular.white};
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 150px 1fr;
  grid-template-areas: 
    "filter delivery "
    "filter gallery";

  @media (max-width: 1200px) {
    grid-gap: 10px;
    grid-template-columns: 100%;
    grid-template-rows: 50px 1fr;
    grid-template-areas: 
      "filter"
      "gallery";
  }

  @media (max-width: 900px) {
    grid-gap: 0;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    grid-template-areas: 
      "gallery";
  }

  @media (max-width: 767px) {
    height: calc(100vh - 104px);
  }
`;

export const Filter = styled.div`
  align-self: flex-end;
  grid-area: filter;
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100%;
  width: 100%;

  @media (max-width: 1200px) {
    flex-flow: row;
  }

  @media (max-width: 900px) {
    display: none;
`;

export const Display = styled.div`
  height: 100%;
  align-self: center;
  flex-grow: 1;
  grid-area: gallery;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;

`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  height: 90px;
  justify-content: space-between;
  margin-top: 10px;
  align-self: center;
  align-items: center;
`;

export const Test = styled.div`
  width: 100%;
  height: 100%;
  background: salmon;
  border: 1px solid red;
`;

export const SliderContainer = styled(Slider)`
  height: 100%;
`;