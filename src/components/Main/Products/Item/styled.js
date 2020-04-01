import styled from "styled-components";
import {themes} from "../../../../config/themes";

export const Container = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  box-sizing: border-box;
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  height: 90px;
  justify-content: space-between;
  align-self: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 260px;
  height: 260px;
  object-fit: cover;
  object-position: center center;
  margin-bottom: 15px;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: ${themes.regular.black};
  text-align: center;
  margin: 0 0 15px;
  height: 125px;
`;