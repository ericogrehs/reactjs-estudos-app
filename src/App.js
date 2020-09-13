import React from "react";
import Container from "@material-ui/core/Container";
import { createGlobalStyle } from "styled-components";

import Home from "./routes/Home";

import "./App.css";
import "fontsource-roboto";

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }
  button, a {
    cursor: pointer;
    &:disabled{
      cursor: not-allowed;
    }
  }
`;

const App = () => {
  return (
    <Container component="article" maxWidth="sm">
      <GlobalStyle />
      <Home />
    </Container>
  );
};

export default App;
