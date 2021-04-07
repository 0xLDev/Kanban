import React, { useEffect, useContext } from "react";
import { PanelHeaderSimple, Gallery, PanelHeaderBack } from "@vkontakte/vkui";
import { useRoute } from "react-router5";
import { getColumns } from "../../actions";
import Context from "../../components/App/context";

import "./Columns.css";
import Column from "../../components/Column/Column";
import ColumnCreate from "../../components/ColumnCreate/ColumnCreate";

const Columns = () => {
  const { goToBoards, setColumns, columns, boards } = useContext(Context);
  const {
    route: {
      params: { boardId },
    },
  } = useRoute();
  const board = boards.find(({ id }) => id === boardId) || {};

  // Запрос в базу данных за колонками
  useEffect(() => {
    if (board.id) {
      getColumns(board.id).then(setColumns);
    }
  }, []);



  return (
    <>
      <PanelHeaderSimple left={<PanelHeaderBack onClick={goToBoards} />}>
        Доска {board.name ? `«${board.name}»` : ""}
      </PanelHeaderSimple>

      <Gallery slideWidth="85%" align="left" className="Columns__list">
        {columns.map(({ id, name }) => (
          <Column key={id} id={id} name={name} />
        ))}
        <ColumnCreate />
      </Gallery>
    </>
  );
};

export default Columns;
