import styled from "styled-components";
import { themes } from "../../../../config/themes";
import { Link } from "react-router-dom";

export const Feature = styled.div`
  display: flex;
  height: 100%;
  flex: 30% 1 1;
  flex-flow: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 8px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    align-items: center;
  }
`;

export const Feature_Logo = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${themes.regular.dark_violet};
  opacity: 0.6;
  color: ${themes.regular.white};
`;

export const Feature_Description = styled.p`
  font-size: 0.9rem;
  letter-spacing: 0.02rem;
  color: ${themes.regular.black};
  margin: 5px 0;
  line-height: 1.3;
`;