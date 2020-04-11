import styled from "styled-components";
import { themes } from "../../config/themes";

export const Container = styled.div`
  width: 100%;
  flex-grow: 1;
  background: rgba(103, 4, 100, 0.06);
`;

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  flex-grow: 1;
  display: flex;
  flex-flow: column;
  box-sizing: border-box;
  font-size: 1rem;
  color: ${themes.regular.white};
  position: relative;

  @media (min-width: 600px) {
    width: 575px;
  }
  @media (min-width: 900px) {
    width: 768px;
  }
  @media (min-width: 1200px) {
    width: 1140px;
  }
`;


