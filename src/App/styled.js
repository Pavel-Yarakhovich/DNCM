import styled, { createGlobalStyle } from "styled-components";
import { themes } from "../config/themes";

export const App = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column;
`;

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 14px;
  }
  
  body {
    background-color: ${themes.regular.white};
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }

  a:hover {
    opacity: .7;
  }
  
  a:hover,
  a:visited,
  a:focus {
      text-decoration: none;
  }
`