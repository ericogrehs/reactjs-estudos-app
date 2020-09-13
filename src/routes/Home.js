import React from "react";
import Typography from "@material-ui/core/Typography";

import { RegisterForm } from "../components";

import RegisterFormContext from "../contexts/RegisterFormContext";
import {
  validatePassword,
  validateCpf,
} from "../validations/RegisterFormValidations";

const Home = () => {
  return (
    <>
      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>
      <RegisterFormContext.Provider
        value={{ senha: validatePassword, cpf: validateCpf }}
      >
        <RegisterForm onSendForm={onSendForm} />
      </RegisterFormContext.Provider>
    </>
  );
};

function onSendForm(data) {
  console.log(data);
}

export default Home;
