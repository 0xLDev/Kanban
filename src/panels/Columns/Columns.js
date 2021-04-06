import React, { useEffect, useContext } from "react";
import { PanelHeaderSimple, Gallery, PanelHeaderBack } from "@vkontakte/vkui";
import { getColumns } from "../../actions";
import Context from "../../components/App/context";

import "./Columns.css";
import Column from "../../components/Column/Column";
import ColumnCreate from "../../components/ColumnCreate/ColumnCreate";

const Columns = () => {
  const { goToBoards, setColumns, columns, activeBoard } = useContext(Context);
  // Запрос в базу данных за колонками
  useEffect(() => {
    getColumns(activeBoard.id).then(setColumns);
  }, []);

  return (
    <>
      <PanelHeaderSimple left={<PanelHeaderBack onClick={goToBoards} />}>
        Доска «{activeBoard.name}»
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
