import styled from "styled-components";
import { themes } from "../../../config/themes";

export const Container = styled.div`
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-flow: column;
  font-size: 1rem;
  color: ${themes.regular.white};
`;

export const FeedBacks = styled.div`
  // flex-grow: 1;
  padding: 10px;
  box-sizing: border-box;
`;