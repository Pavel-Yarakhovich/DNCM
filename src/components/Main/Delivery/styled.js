import styled from "styled-components";
import { themes } from "../../../config/themes";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  justify-content: space-between;
  display: flex;
  flex-flow: column;  
  font-size: 1rem;
  color: ${themes.regular.white};
`;

export const Text = styled.p`
  font-size: 1rem;
  color: ${themes.regular.dark_violet};
  margin-bottom: auto;
  padding: 0 8px;
  text-align: center;
  line-height: 2.2;
`;

export const MapContainer = styled.div`
  width: 100%;
  margin-top: 10px;
`;

export const CallLink = styled.a`
  padding: 5px 10px;
  background: ${themes.regular.gold};
  color: ${themes.regular.white};
  font-weight: 600;
  text-decoration: none;
  margin: 0 5px;

  :hover {
    cursor: pointer;
  }
`;