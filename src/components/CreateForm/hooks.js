import { useState } from "react";

const modes = {
  button: "button",
  form: "form",
};

const statuses = {
  default: "default",
  error: "error",
};

export const useCreateForm = ({ onSubmit }) => {
  const [mode, setMode] = useState(modes.button);
  const [name, setName] = useState("");
  const [status, setStatus] = useState(statuses.default);
  const onChangeInput = (event) => setName(event.target.value);
  const isButtonMode = mode === modes.button;
  const reset = () => {
    setMode(modes.button);
    setStatus(statuses.default);
    setName("");
  };

  const submit = (e) => {
    if (e) {
      e.preventDefault();
    }

    if (!name.trim().length) {
      setStatus(statuses.error);
      return;
    }

    onSubmit(name).then(reset);
  };

  const setFormMode = () => setMode(modes.form);
  const setButtonMode = () => setMode(modes.button);

  return {
    name,
    status,
    reset,
    submit,
    setButtonMode,
    setFormMode,
    onChangeInput,
    isButtonMode,
  };
};
