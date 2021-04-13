import React, { memo } from "react";
import PropTypes from "prop-types";
import { Button, Card, Input, FormItem, FormLayout } from "@vkontakte/vkui";
import { Icon24Add } from "@vkontakte/icons";

import { useCreateForm } from "./hooks";

const CreateForm = ({ onSubmit, placeholder, actionTitle }) => {
  const {
    name,
    status,
    reset,
    submit,
    setFormMode,
    onChangeInput,
    isButtonMode,
  } = useCreateForm({ onSubmit });

  if (isButtonMode) {
    return (
      <Button
        size="l"
        mode="outline"
        stretched="true"
        before={<Icon24Add />}
        onClick={setFormMode}
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
            onChange={onChangeInput}
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

export default memo(CreateForm);
