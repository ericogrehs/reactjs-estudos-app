import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function UserForm({ onSendForm }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSendForm({ email, senha });
      }}
    >
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="email"
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
        id="senha"
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
