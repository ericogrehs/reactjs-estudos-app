import React, { useState, useContext } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import RegisterFormContext from "../../contexts/RegisterFormContext";
import useErrors from "../../hooks/useErrors";

function PersonalDataForm({ onSendForm }) {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [cpf, setCpf] = useState("");
  const [promotions, setPromotions] = useState(true);
  const [newsletter, setNewsletter] = useState(true);

  const validations = useContext(RegisterFormContext);

  const [errors, validateField, isValid] = useErrors(validations);

  const onSubmit = (e) => {
    e.preventDefault();
    if (isValid()) onSendForm({ name, lastname, cpf, promotions, newsletter });
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
        onBlur={validateField}
        value={cpf}
        error={Boolean(errors.cpf)}
        helperText={errors.cpf}
        fullWidth
        variant="outlined"
        margin="normal"
        id="cpf"
        name="cpf"
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

export default PersonalDataForm;
