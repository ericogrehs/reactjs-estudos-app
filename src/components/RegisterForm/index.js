import React, { useState } from "react";

import PersonalDataForm from "./PersonalDataForm";
import UserForm from "./UserForm";
import ShippingForm from "./ShippingForm";

function RegisterForm({ onSendForm }) {
  const [currentStep, setCurrentStep] = useState(0);

  const forms = [
    <UserForm onSendForm={next} />,
    <PersonalDataForm onSendForm={next} />,
    <ShippingForm onSendForm={onSendForm} />,
  ];

  function next() {
    setCurrentStep(currentStep + 1);
  }

  return <>{forms[currentStep]}</>;
}

export default RegisterForm;
