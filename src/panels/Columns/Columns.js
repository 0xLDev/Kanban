import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { PanelHeaderSimple, Gallery, PanelHeaderBack } from "@vkontakte/vkui";
import firebase from "firebase/app";

import "./Columns.css";
import Column from "../../components/Column/Column";
import ColumnCreate from "../../components/ColumnCreate/ColumnCreate";

const Columns = ({
  goBack,
  setColumns,
  columns,
  removeColumn,
  addColumn,
  board,
}) => {
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
        Доска «{board.name}»
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
  setColumns: PropTypes.func.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      boardId: PropTypes.string.isRequired,
    })
  ).isRequired,
  removeColumn: PropTypes.func.isRequired,
  addColumn: PropTypes.func.isRequired,
  board: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Columns;
