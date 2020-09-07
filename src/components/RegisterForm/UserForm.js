import React from "react";
import { TextField, Button } from "@material-ui/core";

function UserForm({ onSendForm }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSendForm();
      }}
    >
      <TextField
        id="email"
        label="email"
        type="email"
        required
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <TextField
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
