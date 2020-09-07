import React, { useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";

import RegisterFormContext from "../../contexts/RegisterFormContext";

function UserForm({ onSendForm }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errors, setErrors] = useState({ senha: "" });

  const validations = useContext(RegisterFormContext);

  const validateField = (event) => {
    const { name, value } = event.target;
    setErrors({ ...errors, [name]: validations[name](value) });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (Object.values(errors).every((error) => !error))
          onSendForm({ email, senha });
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
