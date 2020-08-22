import React from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { RegisterForm } from "./components";

import "./App.css";
import "fontsource-roboto";

const App = () => {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>
      <RegisterForm />
    </Container>
  );
};

export default App;
