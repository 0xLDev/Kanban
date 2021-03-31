import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Card, Input, FormItem, FormLayout } from "@vkontakte/vkui";
import { Icon24Add } from "@vkontakte/icons";

const modes = {
  button: "button",
  form: "form",
};

const statuses = {
  default: "default",
  error: "error",
};

const CreateForm = ({ onSubmit, placeholder, actionTitle }) => {
  const [mode, setMode] = useState(modes.button);
  const [name, setName] = useState("");
  const [status, setStatus] = useState(statuses.default);

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

  if (mode === modes.button) {
    return (
      <Button
        size="l"
        stretched="true"
        before={<Icon24Add />}
        onClick={() => setMode(modes.form)}
      >
        {actionTitle}
      </Button>
    );
  }

  return (
    <Card mode="shadow">
      <FormLayout onSubmit={submit}>
        <FormItem status={status}>
          <Input
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={placeholder}
          />
        </FormItem>
      </FormLayout>
      <FormItem>
        <Button onClick={submit}>{actionTitle}</Button>
        <Button onClick={reset} mode="tertiary">
          Отменить
        </Button>
      </FormItem>
    </Card>
  );
};

CreateForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  actionTitle: PropTypes.string.isRequired,
};

export default CreateForm;
