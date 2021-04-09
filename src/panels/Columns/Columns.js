import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PanelHeaderSimple, Gallery, PanelHeaderBack } from "@vkontakte/vkui";
import { useRoute } from "react-router5";
import { getColumns } from "../../api";
import { setColumns } from "../../actions/actions";

import "./Columns.css";
import Column from "../../components/Column/Column";
import ColumnCreate from "../../components/ColumnCreate/ColumnCreate";

const Columns = () => {
  const dispatch = useDispatch();
  const columns = useSelector((state) => state.columns);
  const boards = useSelector((state) => state.boards);
  const goToBoards = () => window.history.back();
  const {
    route: {
      params: { boardId },
    },
  } = useRoute();
  const board = boards.find(({ id }) => id === boardId) || {};

  // Запрос в базу данных за колонками
  useEffect(() => {
    if (board.id) {
      getColumns(board.id).then((columns) => dispatch(setColumns(columns)));
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
