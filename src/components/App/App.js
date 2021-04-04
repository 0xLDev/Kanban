import React, { useState } from "react";
import { View, Panel } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import Boards from "../../panels/Boards/Boards";
import Columns from "../../panels/Columns/Columns";

const panel = {
  boards: "boards",
  columns: "columns",
};

const App = () => {
  // Доски
  const { boards, addBoard, removeBoard, setBoards } = useBoardsState();
  // Колонки
  const { columns, addColumn, removeColumn, setColumns } = useColumnsState();
  // Приложение
  const { activePanel, activeBoard, goToColumns, goToBoards } = useAppState(
    boards
  );

  return (
    <View activePanel={activePanel}>
      <Panel id={panel.boards}>
        <Boards
          onChangePanel={goToColumns}
          setBoards={setBoards}
          addBoard={addBoard}
          removeBoard={removeBoard}
          boards={boards}
        />
      </Panel>

      <Panel id={panel.columns} className="Columns">
        {activeBoard && (
          <Columns
            goBack={goToBoards}
            board={activeBoard}
            addColumn={addColumn}
            columns={columns}
            removeColumn={removeColumn}
            setColumns={setColumns}
          />
        )}
      </Panel>
    </View>
  );
};

const useColumnsState = () => {
  const [columns, setColumns] = useState([]);
  const addColumn = (column) => {
    setColumns([...columns, column]);
  };
  const removeColumn = (removeId) => {
    setColumns(columns.filter(({ id }) => id !== removeId));
  };

  return { columns, addColumn, removeColumn, setColumns };
};

const useBoardsState = () => {
  const [boards, setBoards] = useState([]);
  const addBoard = (board) => setBoards([...boards, board]);
  const removeBoard = (removeId) =>
    setBoards(boards.filter(({ id }) => id !== removeId));

  return { boards, addBoard, removeBoard, setBoards };
};

const useAppState = (boards) => {
  const [activePanel, setActivePanel] = useState(panel.boards);
  const [activeBoard, setActiveBoard] = useState(null);

  const goToColumns = (boardId) => {
    setActiveBoard(boards.find(({ id }) => id === boardId));
    setActivePanel(panel.columns);
  };

  const goToBoards = () => {
    setActivePanel(panel.boards);
  };

  return { activePanel, activeBoard, goToColumns, goToBoards };
};

export default App;
