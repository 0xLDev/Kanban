import React from "react";
import PropTypes from "prop-types";
import firebase from "firebase/app";

import CreateForm from "./CreateForm";

const CardCreate = ({ onCreate }) => {
  const createBoards = (name) => {
    const db = firebase.firestore();

    return db
      .collection("cards")
      .add({ name })
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
};

export default CardCreate;
