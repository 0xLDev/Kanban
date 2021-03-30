import React, { useState } from "react";
import { Button, Card, Input, FormItem } from "@vkontakte/vkui";
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
      <FormItem>
        <Input />
      </FormItem>
      <FormItem>
        <Button>Создать доску</Button>
        <Button onClick={() => setMode(modes.button)} mode="tertiary">
          Отменить
        </Button>
      </FormItem>
    </Card>
  );
};

export default BoardsCreate;
