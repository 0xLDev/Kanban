import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Input, FormItem, FormLayout } from "@vkontakte/vkui";
import { Icon24Add } from "@vkontakte/icons";
import { Icon24Dismiss } from "@vkontakte/icons";

import { useCreateForm } from "../CreateForm/hooks";

import "./CardCreateForm.css";

const CardCreateForm = ({ onSubmit }) => {
  const {
    name,
    status,
    reset,
    submit,
    setFormMode,
    onChangeInput,
    isButtonMode,
  } = useCreateForm({onSubmit});

  if (isButtonMode) {
    return (
      <Button
        size="l"
        mode="outline"
        stretched="true"
        before={<Icon24Add />}
        stretched
        onClick={setFormMode}
      >
        Добавить карточку
      </Button>
    );
  }

  return (
    <Card mode="outline">
      <FormLayout onSubmit={submit}>
        <FormItem status={status}>
          <Input
            autoFocus
            value={name}
            onChange={onChangeInput}
            placeholder="Введите название карточки"
          />
        </FormItem>
      </FormLayout>
      <FormItem>
        <div className="CardCreateForm__buttons">
          <Button onClick={submit} className="CardCreateForm__actionButton" mode='commerce'>
            Добавить
          </Button>
          <Button onClick={reset} mode="tertiary">
            <Icon24Dismiss />
          </Button>
        </div>
      </FormItem>
    </Card>
  );
};

CardCreateForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CardCreateForm;
