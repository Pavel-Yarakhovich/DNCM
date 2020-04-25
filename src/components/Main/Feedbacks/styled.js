import styled from "styled-components";
import { themes } from "../../../config/themes";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 150px);
  overflow: auto;
  display: flex;
  flex-flow: column;
  font-size: 1rem;
  color: ${themes.regular.white};

  @media (max-width: 767px) {
    height: calc(100vh - 54px);
  }
`;

export const FeedBacks = styled.div`
  // flex-grow: 1;
  padding: 10px;
  box-sizing: border-box;
`;