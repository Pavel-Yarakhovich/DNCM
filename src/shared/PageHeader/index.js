import React from "react";
import styled from "styled-components";

const Header = styled.h1`
  padding: 0 15px;
  font-size: 1.6rem;
  color: #000;
`;

export default ({ title }) => (
  <Header>{title}</Header>
)