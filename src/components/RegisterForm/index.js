import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function RegisterForm({ onSendForm }) {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [cpf, setCpf] = useState("");
  const [promotions, setPromotions] = useState(true);
  const [newsletter, setNewsletter] = useState(true);
  const [errors, setErrors] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    onSendForm({ name, lastname, cpf, promotions, newsletter });
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField
        onChange={({ target: { value } }) => setName(value)}
        value={name}
        fullWidth
        variant="outlined"
        margin="normal"
        id="name"
        label="Nome"
      />
      <TextField
        onChange={({ target: { value } }) => setLastname(value)}
        value={lastname}
        fullWidth
        variant="outlined"
        margin="normal"
        id="lastname"
        label="Sobrenome"
      />
      <TextField
        onChange={({ target: { value } }) => setCpf(value)}
        onBlur={({ target: { value } }) => {
          setErrors((errors) => ({
            ...errors,
            cpf: value.length !== 11 ? "CPF inválido" : "",
          }));
        }}
        value={cpf}
        error={Boolean(errors.cpf)}
        helperText={errors.cpf}
        fullWidth
        variant="outlined"
        margin="normal"
        id="cpf"
        label="CPF"
      />
      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            onChange={({ target: { checked } }) => setPromotions(checked)}
            name="promotions"
            checked={promotions}
            color="primary"
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            onChange={({ target: { checked } }) => setNewsletter(checked)}
            name="newsletter"
            checked={newsletter}
            color="primary"
          />
        }
      />

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default RegisterForm;
