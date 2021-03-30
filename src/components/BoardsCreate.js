import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Card, Input, FormItem, FormLayout } from "@vkontakte/vkui";
import { Icon24Add } from "@vkontakte/icons";
import firebase from "firebase/app";

const modes = {
  button: "button",
  form: "form",
};

const statuses = {
  default: "default",
  error: "error",
};

const BoardsCreate = ({ onCreate }) => {
  const [mode, setMode] = useState(modes.button);
  const [name, setName] = useState("");
  const [status, setStatus] = useState(statuses.default);

  const reset = () => {
    setMode(modes.button);
    setName("");
  };

  const createBoards = (e) => {
    if (e) {
      e.preventDefault();
    }

    if (!name.trim().length) {
      setStatus(statuses.error);
      return;
    }

    const db = firebase.firestore();

    db.collection("boards")
      .add({ name })
      .then((docRef) => docRef.get())
      .then((doc) =>
        onCreate({
          id: doc.id,
          ...doc.data(),
        })
      )
      .then(reset)
      .catch(console.error);
  };

  if (mode === modes.button) {
    return (
      <Button
        size="l"
        stretched="true"
        before={<Icon24Add />}
        onClick={() => setMode(modes.form)}
      >
        Создать доску
      </Button>
    );
  }

  return (
    <Card mode="shadow">
      <FormLayout onSubmit={createBoards}>
        <FormItem status={status}>
          <Input
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите название доски"
          />
        </FormItem>
      </FormLayout>
      <FormItem>
        <Button onClick={createBoards}>Создать доску</Button>
        <Button onClick={reset} mode="tertiary">
          Отменить
        </Button>
      </FormItem>
    </Card>
  );
};

BoardsCreate.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default BoardsCreate;
