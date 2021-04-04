import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { PanelHeaderSimple, Gallery, PanelHeaderBack } from "@vkontakte/vkui";
import firebase from "firebase/app";

import Column from "../../components/Column/Column";
import "./Columns.css";
import ColumnCreate from "../../components/ColumnCreate/ColumnCreate";

const Columns = ({ goBack }) => {
  const [columns, setColumns] = useState([]);

  const addColumn = (column) => {
    setColumns([...columns, column]);
  };

  const removeColumn = (removeId) => {
    setColumns(columns.filter(({ id }) => id !== removeId));
  };
  // Запрос в базу данных за колонками
  useEffect(() => {
    const db = firebase.firestore();

    db.collection("columns")
      .get()
      .then((querySnapshot) => {
        const columns = [];

        querySnapshot.forEach((doc) => {
          const { boardId, name } = doc.data();
          columns.push({
            id: doc.id,
            boardId,
            name,
          });
        });

        setColumns(columns);
      });
  }, []);

  return (
    <>
      <PanelHeaderSimple left={<PanelHeaderBack onClick={goBack} />}>
        Доска
      </PanelHeaderSimple>

      <Gallery slideWidth="100%" align="center" className="Columns__list">
        {columns.map(({ id, name }) => (
          <Column key={id} id={id} name={name} onDelete={removeColumn} />
        ))}
        <ColumnCreate onCreate={addColumn} />
      </Gallery>
    </>
  );
};

Columns.propTypes = {
  goBack: PropTypes.func.isRequired,
};

export default Columns;
