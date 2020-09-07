import React from "react";

import PersonalDataForm from "./PersonalDataForm";
import UserForm from "./UserForm";
import ShippingForm from "./ShippingForm";

function RegisterForm({ onSendForm }) {
  return (
    <>
      <PersonalDataForm onSendForm={onSendForm} />
      <UserForm />
      <ShippingForm />
    </>
  );
}

export default RegisterForm;
