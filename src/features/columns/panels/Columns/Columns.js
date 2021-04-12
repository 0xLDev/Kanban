import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PanelHeaderSimple, Gallery, PanelHeaderBack } from "@vkontakte/vkui";
import { useRoute } from "react-router5";

import "./Columns.css";
import Column from "../../components/Column/Column";
import ColumnCreate from "../../components/ColumnCreate/ColumnCreate";
import { fetchColumns } from "../../actions";
import { getColumns } from "../../selectors";
import { getBoards } from "../../../boards/selectors";

const Columns = () => {
  const dispatch = useDispatch();
  const columns = useSelector(getColumns);
  const boards = useSelector(getBoards);
  const goToBoards = () => window.history.back();
  const {
    route: {
      params: { boardId },
    },
  } = useRoute();
  const board = boards.find(({ id }) => id === boardId) || {};

  // Запрос в базу данных за колонками
  useEffect(() => {
    dispatch(fetchColumns(boardId));
  }, [dispatch, boardId]);

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
