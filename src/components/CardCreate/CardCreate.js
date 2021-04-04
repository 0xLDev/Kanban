import React from "react";
import PropTypes from "prop-types";
import firebase from "firebase/app";

import CreateForm from "../CreateForm/CreateForm";

const CardCreate = ({ onCreate, columnId }) => {
  const createBoards = (name) => {
    const db = firebase.firestore();

    return db
      .collection("cards")
      .add({ name, columnId })
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
    <CreateForm
      onSubmit={createBoards}
      placeholder="Введите название карточки"
      actionTitle="Создать карточку"
    />
  );
};

CardCreate.propTypes = {
  onCreate: PropTypes.func.isRequired,
  columnId: PropTypes.string.isRequired,
};

export default CardCreate;
