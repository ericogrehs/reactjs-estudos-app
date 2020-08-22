import React, { Fragment } from "react";

import { RegisterForm } from "./components";

import "./App.css";

const App = () => {
  return (
    <Fragment>
      <h1>Formulário de Cadastro</h1>
      <RegisterForm />
    </Fragment>
  );
};

export default App;
