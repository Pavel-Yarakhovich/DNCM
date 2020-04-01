import styled from "styled-components";
import { themes } from "../../../config/themes";

import ButtonGroup from "@material-ui/core/ButtonGroup";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  background: ${themes.regular.white};
  padding: 8px;
  box-sizing: border-box;
`;

export const Filter = styled(ButtonGroup)`
  align-self: flex-end;
  margin-bottom: 20px;
`;

export const Display = styled.div`
  width: 90%;
  align-self: center;
  flex-grow: 1;
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