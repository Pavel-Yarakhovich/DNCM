import styled from "styled-components";
import { themes } from "../../../../config/themes";
import { Link } from "react-router-dom";

export const Details = styled(Link)`
font-size: 0.7rem;
letter-spacing: 0.08rem;
color: ${themes.regular.violet};
margin: 0.8rem 0;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Feature = styled.div`
  display: flex;
  flex: 30% 1 1;
  flex-flow: column;
  padding: 8px;
  box-sizing: border-box;
`;

export const Feature_Logo = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${themes.regular.dark_violet};
  opacity: 0.6;
  color: ${themes.regular.white};
`;

export const Feature_Description = styled.p`
  font-size: 0.7rem;
  letter-spacing: 0.08rem;
  color: #aaa;
  margin: 0;
`;