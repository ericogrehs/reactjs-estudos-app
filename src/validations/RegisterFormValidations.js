export const validatePassword = (password) =>
  password.length < 4 || password.length > 72
    ? "Senha deve ter entre 4 e 72 caracteres"
    : "";

export const validateCpf = (cpf) =>
  cpf.length !== 11 ? "CPF deve ter 11 dígitos" : "";
