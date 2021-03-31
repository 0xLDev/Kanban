import React, { useEffect, useState } from "react";
import { PanelHeaderSimple, Gallery } from "@vkontakte/vkui";
import firebase from "firebase/app";

import Column from "./Column";
import "./Columns.css";
import ColumnCreate from "./ColumnCreate";

const Columns = () => {
  const [columns, setColumns] = useState([]);

  const addColumn = (cplumn) => {
    setColumns([...columns, cplumn]);
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
      <PanelHeaderSimple>Доска</PanelHeaderSimple>

      <Gallery slideWidth="100%" align="center" className="Columns__list">
        {columns.map(({ id, name }) => (
          <Column key={id} id={id} name={name} onDelete={removeColumn} />
        ))}
        <ColumnCreate onCreate={addColumn} />
      </Gallery>
    </>
  );
};

export default Columns;
