import React, { useState, useEffect } from "react";
import { Typography, Stepper, Step, StepLabel } from "@material-ui/core";

import PersonalDataForm from "./PersonalDataForm";
import UserForm from "./UserForm";
import ShippingForm from "./ShippingForm";

function RegisterForm({ onSendForm }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [dadosColetados, setDadosColetados] = useState({});

  const forms = [
    <UserForm onSendForm={coletaDados} />,
    <PersonalDataForm onSendForm={coletaDados} />,
    <ShippingForm onSendForm={coletaDados} />,
    <Typography variant="h5">Obrigado por se cadastrar</Typography>,
  ];

  useEffect(() => {
    if (currentStep === forms.length - 1) onSendForm(dadosColetados);
  }, [dadosColetados, onSendForm, currentStep, forms]);

  function next() {
    setCurrentStep(currentStep + 1);
  }

  function coletaDados(dados) {
    setDadosColetados({ ...dadosColetados, ...dados });
    next();
  }

  return (
    <>
      <Stepper activeStep={currentStep}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {forms[currentStep]}
    </>
  );
}

export default RegisterForm;
