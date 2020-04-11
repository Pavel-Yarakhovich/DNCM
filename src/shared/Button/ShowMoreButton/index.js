import React from "react";
import styled, {css} from "styled-components";
import { themes } from "../../../config/themes";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const Button = styled.button`
  height: 36px;
  padding: 0 12px;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px solid ${themes.regular.violet};
  background: ${themes.regular.white};
  font-size: 1rem;
  color: ${themes.regular.violet};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  transition: all 250ms ease;
  :focus {
    outline: none;
  }

  ${props => props.expanded && css`
    border-color: ${themes.regular.gold};
    color: ${themes.regular.gold};
  `}

  @media (min-width: 600px) {
    display: none;
  }
`;

const Arrow = styled(ArrowDropDownIcon)`
color: ${themes.regular.violet};
transition: all 250ms ease;
${props => props.expanded && css`
  transform: rotate(180deg);
  color: ${themes.regular.gold};
`}
`;

export default ({ children, expanded, clicked }) => {
  return (
    <Button onClick={clicked} expanded={expanded}>
      <Arrow fontSize="large" expanded={expanded}/>
      {children}
    </Button>
  );
};
