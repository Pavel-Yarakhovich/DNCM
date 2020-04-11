import styled from "styled-components";
import { themes } from "../../config/themes";

export const Container = styled.div`
  flex: 25% 1 0;
  height: auto;
  padding: 8px;
  box-sizing: border-box;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 2px 3px 8px ${themes.regular.shadow};
  background: ${themes.regular.white};
  border-radius: 5px;
  padding: 8px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  align-items: center;
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
  width: 100%;
  height: 180px;
  object-fit: cover;
  object-position: center center;
  margin-bottom: 15px;

  @media (max-width: 1200px) {
    height: 150px;
  }
`;

export const Description = styled.div`
  font-size: 0.8rem;
  flex-grow: 1;
  color: ${themes.regular.black};
  text-align: center;
  margin: 0 0 15px;
  // height: 125px;
`;
