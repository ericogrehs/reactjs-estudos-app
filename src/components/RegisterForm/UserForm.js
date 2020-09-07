import React from "react";
import { TextField, Button } from "@material-ui/core";

function UserForm() {
  return (
    <form>
      <TextField
        id="email"
        label="email"
        type="email"
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="senha"
        label="senha"
        type="password"
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
