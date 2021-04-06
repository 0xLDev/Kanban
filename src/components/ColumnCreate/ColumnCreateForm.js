import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Input, FormItem, FormLayout } from "@vkontakte/vkui";
import { Icon24Add } from "@vkontakte/icons";

import { useCreateForm } from "../CreateForm/hooks";

const ColumnCreateForm = ({ onSubmit }) => {
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
        mode="overlay_secondary"
        stretched="true"
        before={<Icon24Add />}
        onClick={setFormMode}
      >
        Добавьте еще колонку
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
            placeholder="Введите название колонки"
          />
        </FormItem>
      </FormLayout>
      <FormItem>
        <Button onClick={submit}>Добавить</Button>
        <Button onClick={reset} mode="tertiary">
          Отменить
        </Button>
      </FormItem>
    </Card>
  );
};

ColumnCreateForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ColumnCreateForm;
