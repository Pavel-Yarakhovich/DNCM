import React from "react";
import { BrowserRouter } from "react-router-dom";
import * as Styled from "./styled";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

function App() {
  return (
    <BrowserRouter>
      <Styled.GlobalStyle />
      <Styled.App>
        <Header />
        <Main />
        <Footer />
      </Styled.App>
    </BrowserRouter>
  );
}

export default App;
