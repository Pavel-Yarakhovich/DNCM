import styled from "styled-components";
import { themes } from "../../../../../config/themes";
import CloseIcon from '@material-ui/icons/Close';

export const Container = styled.div`
  width: 90vw;
  height: 90vh;
  background: ${themes.regular.white};
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  position: relative;
`;

export const Image = styled.img`
  flex-basis: 75%;
  width: 90%;
  object-fit: contain;
  object-position: center center;
`;

export const Text = styled.p`
  font-size: 1rem;
  color: ${themes.regular.black};
  text-align: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
`;

export const Close = styled(CloseIcon)`
  color: ${themes.regular.gold};
  position: absolute;
  top: 8px;
  right: 8px;
`;