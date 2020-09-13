import { useState } from "react";

function useErrors(validations) {
  const [errors, setErrors] = useState(initialState(validations));

  const validateField = (event) => {
    const { name, value } = event.target;
    setErrors({ ...errors, [name]: validations[name](value) });
  };

  function isValid() {
    return Object.values(errors).every((error) => !error);
  }

  return [errors, validateField, isValid];
}

function initialState(validations) {
  return Object.keys(validations).reduce(
    (acc, key) => ({ ...acc, [key]: "" }),
    {}
  );
}

export default useErrors;
