import styled, { css } from "styled-components";
import { themes } from "../../../../config/themes";
import { Link } from "react-router-dom";

export const Feature = styled.div`
  // height: 100%;
  display: flex;
  flex: 30% 1 1;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-bottom: 1px solid ${themes.regular.gold};

  @media (min-width: 600px) {
    border-color: transparent;
  }
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 15px;
  overflow: hidden;

  @media (max-width: 600px) {
    justify-content: space-between;
  }
`;

export const Feature_Logo = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${themes.regular.dark_violet};
  opacity: 0.6;
  color: ${themes.regular.white};
  transition: all 250ms ease;

  ${(props) =>
    props.expanded &&
    css`
      background: ${themes.regular.gold};
      opacity: 0.9;
      // color: ${themes.regular.black};
    `}
`;

export const Feature_Description = styled.p`
  font-size: 0.9rem;
  letter-spacing: 0.02rem;
  line-height: 1.3;
  color: ${themes.regular.black};
  align-self: flex-start;
  margin: 5px 0;
`;

export const DescriptionBlock = styled.div`
  display: flex;
  flex-flow: column;
  flex-grow: 1;

`;
