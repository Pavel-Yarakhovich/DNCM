import React from "react";
import * as Styled from "./styled";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import WaveBg from "../shared/WaveBg";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { withRouter } from "react-router-dom";

const client = new ApolloClient({
  uri: "/graphql",
});

function App({ location }) {
  return (
    <ApolloProvider client={client}>
        <Styled.GlobalStyle />
        <Styled.App>
          <Styled.ContentWrapper start={ location.pathname === "/" ? true : undefined }>
            <Header />
            <Main />
            <Footer />
          </Styled.ContentWrapper>
          <WaveBg />
        </Styled.App>
    </ApolloProvider>
  );
}

export default withRouter(App);
