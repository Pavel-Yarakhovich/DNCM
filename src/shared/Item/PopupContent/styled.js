import styled from "styled-components";
import { themes } from "../../../config/themes";
import CloseIcon from "@material-ui/icons/Close";

export const Container = styled.div`
  position: relative;
  width: 800px;
  height: 90vh;
  background: ${themes.regular.white};
  padding: 10px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 2fr 1fr;
  grid-template-areas:
    "image info"
    "description info";

  @media (max-width: 820px) {
    width: 90vw;
  }

  @media (max-width: 550px) {
    grid-template-columns: 100%;
    grid-template-rows: 1fr max-content max-content;
    grid-template-areas:
      "image"
      "description"
      "info";
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center center;
  grid-area: image;
`;

export const Description = styled.div`
  grid-area: description;
  padding: 12px;
`;

export const MoreInfo = styled.div`
  grid-area: info;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 550px) {
    flex-flow: row;
    justify-content: space-between;
  }
`;

export const Close = styled(CloseIcon)`
  color: ${themes.regular.gold};
  position: absolute;
  top: 8px;
  right: 8px;

  :hover {
    cursor: pointer;
    color: ${themes.regular.dark_violet};
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-bottom: 15px;

  @media (max-width: 550px) {
    margin: 0;
    padding: 0 5px;
  }
`;

export const InfoTitle = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${themes.regular.dark_violet};
  margin: 0;
`;

export const InfoContent = styled.p`
  font-size: 1rem;
  color: ${themes.regular.main_text};
  margin: 0;
`;

export const CallLink = styled.a`
  max-width: 100%;
  padding: 12px;
  box-sizing: border-box;
  border-radius: 12px;
  border: 0.6px solid ${themes.regular.main_text};
  color: ${themes.regular.dark_violet};
  display: flex;
  text-align: center;
  flex-flow: column;
  align-items: center;
  white-space: normal;
  text-decoration: none;

  @media (max-width: 550px) {
    padding: 5px;
    font-size: 0;
  }
`;
