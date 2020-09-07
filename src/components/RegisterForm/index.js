import React from "react";

import PersonalDataForm from "./PersonalDataForm";
import UserForm from "./UserForm";

function RegisterForm({ onSendForm }) {
  return (
    <>
      <PersonalDataForm onSendForm={onSendForm} />
      <UserForm />
    </>
  );
}

export default RegisterForm;
