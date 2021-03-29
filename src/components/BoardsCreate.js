import React, { useState } from "react";
import {
  Button,
  Card,
  FormLayout,
  Input,
  FormLayoutGroup,
} from "@vkontakte/vkui";
import { Icon24Add } from "@vkontakte/icons";

const modes = {
  button: "button",
  form: "form",
};

const BoardsCreate = () => {
  const [mode, setMode] = useState(modes.form);

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
      <FormLayout>
        <FormLayoutGroup>
          <Input />
        </FormLayoutGroup>

        <FormLayoutGroup style={{ padding: "12px 0" }}>
          <div>
            <Button style={{ marginRight: "12px" }}>Создать доску</Button>
            <Button
              style={{ marginRight: "12px" }}
              onClick={() => setMode(modes.button)}
              mode="tertiary"
            >
              Отменить
            </Button>
          </div>
        </FormLayoutGroup>
      </FormLayout>
    </Card>
  );
};

export default BoardsCreate;
