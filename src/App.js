import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import { RegisterForm } from "./components";

import RegisterFormContext from "./contexts/RegisterFormContext";
import {
  validatePassword,
  validateCpf,
} from "./validations/RegisterFormValidations";

import "./App.css";
import "fontsource-roboto";

const App = () => {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>
      <RegisterFormContext.Provider
        value={{ senha: validatePassword, cpf: validateCpf }}
      >
        <RegisterForm onSendForm={onSendForm} />
      </RegisterFormContext.Provider>
    </Container>
  );
};

function onSendForm(data) {
  console.log(data);
}

export default App;
