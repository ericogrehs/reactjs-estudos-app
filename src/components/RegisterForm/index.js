import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function RegisterForm() {
  return (
    <form>
      <TextField
        fullWidth
        variant="outlined"
        margin="normal"
        id="name"
        label="Nome"
      />
      <TextField
        fullWidth
        variant="outlined"
        margin="normal"
        id="lastname"
        label="Sobrenome"
      />
      <TextField
        fullWidth
        variant="outlined"
        margin="normal"
        id="cpf"
        label="CPF"
      />
      <FormControlLabel
        label="Promoções"
        control={<Switch name="promotions" defaultChecked color="primary" />}
      />
      <FormControlLabel
        label="Novidades"
        control={<Switch name="newsletter" defaultChecked color="primary" />}
      />

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default RegisterForm;
