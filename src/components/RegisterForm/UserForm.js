import React, { useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";

import RegisterFormContext from "../../contexts/RegisterFormContext";
import useErrors from "../../hooks/useErrors";

function UserForm({ onSendForm }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const validations = useContext(RegisterFormContext);

  const [errors, validateField, isValid] = useErrors(validations);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (isValid()) onSendForm({ email, senha });
      }}
    >
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        name="email"
        label="email"
        type="email"
        required
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        onBlur={validateField}
        error={Boolean(errors.senha)}
        helperText={errors.senha}
        id="senha"
        name="senha"
        label="senha"
        type="password"
        required
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default UserForm;
