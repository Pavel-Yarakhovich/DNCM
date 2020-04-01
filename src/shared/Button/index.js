import React from "react";
import styled, { css } from "styled-components";
import { themes } from "../../config/themes";

const Button = styled.button`
  height: 40px;
  min-width: 120px;
  border: 2px solid transparent;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  background: none;
  white-space: nowrap;

  ${props => props.type === "details" && css`
    border-color: ${themes.regular.gold};
    color: ${themes.regular.gold};
  `}

  ${props => props.type === "contact" && css`
    border-color: ${themes.regular.violet};
    background: ${themes.regular.violet};
    color: ${themes.regular.white};
  `}
`;

export default ({ type, children, clicked }) => (
  <Button type={type} onClick={clicked}>{children}</Button>
)