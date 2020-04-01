import styled from "styled-components";
import { themes } from "../../config/themes";

export const Container = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-flow: column;
  box-sizing: border-box;
  font-size: 1rem;
  color: ${themes.regular.white};
  position: relative;
`;