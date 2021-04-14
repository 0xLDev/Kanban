import { useState, useCallback } from "react";

export const modes = {
  button: 'button',
  form: 'form',
};

const statuses = {
  default: 'default',
  error: 'error',
};

export const useCreateForm = ({ initialMode = modes.button, initialValue = '', onSubmit, onCancel }) => {
  const [mode, setMode] = useState(initialMode);
  const [name, setName] = useState(initialValue);
  const [status, setStatus] = useState(statuses.default);
  const onChangeInput = (event) => setName(event.target.value);
  const isButtonMode = mode === modes.button;
  const reset = useCallback(() => {
    onCancel && onCancel();
    setMode(modes.button);
    setStatus(statuses.default);
    setName('');
  }, [onCancel]);
  const submit = useCallback((event) => {
    if (event) {
      event.preventDefault();
    }

    if (!name.trim().length) {
      setStatus(statuses.error);
      return;
    }

    onSubmit(name).then(reset)
  }, [name, onSubmit, reset]);
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