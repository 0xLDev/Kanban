import React from "react";
import PropTypes from "prop-types";
import { Div } from "@vkontakte/vkui";
import firebase from "firebase/app";

import "./Column.css";
import CreateForm from "../CreateForm/CreateForm";

const ColumnCreate = ({ onCreate, boardId }) => {
  const createColumn = (name) => {
    const db = firebase.firestore();

    return db
      .collection("columns")
      .add({ name, boardId })
      .then((docRef) => docRef.get())
      .then((doc) =>
        onCreate({
          id: doc.id,
          ...doc.data(),
        })
      )
      .catch(console.error);
  };

  return (
    <Div className="Column">
      <CreateForm
        onSubmit={createColumn}
        placeholder="Введите название колонки"
        actionTitle="Создать колонку"
      />
    </Div>
  );
};

ColumnCreate.propTypes = {
  onCreate: PropTypes.func.isRequired,
  boardId: PropTypes.string.isRequired,
};

export default ColumnCreate;
