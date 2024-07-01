import React from "react";
import { TbLetterO, TbLetterXSmall } from "react-icons/tb";

import styles from "./styles/GameBoard.module.css";

function GameBoard(props) {
  const { handleSelect, gameBoard } = props;

  const renderSymbol = (symbol) => {
    if (symbol === "x") {
      return <TbLetterXSmall style={{ width: "100px", height: "100px" }} />;
    } else if (symbol === "o") {
      return <TbLetterO style={{ width: "65px", height: "65px" }} />;
    }

    return null;
  };

  return (
    <div className={styles["game-board"]}>
      {gameBoard.map((row, rowIndex) => (
        <div key={rowIndex} className={styles["game-board-row"]}>
          {row.map((symbol, symbolIndex) => (
            <button
              key={symbolIndex}
              disabled={symbol !== null}
              className={styles["game-board-symbol"]}
              onClick={() => handleSelect(rowIndex, symbolIndex)}
            >
              {renderSymbol(symbol)}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GameBoard;
