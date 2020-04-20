import React from "react";
import { BrowserRouter } from "react-router-dom";
import * as Styled from "./styled";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import WaveBg from "../shared/WaveBg";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:3005/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Styled.GlobalStyle />
        <Styled.App>
          <Styled.ContentWrapper>
            <Header />
            <Main />
            <Footer />
          </Styled.ContentWrapper>
          <WaveBg />
        </Styled.App>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
