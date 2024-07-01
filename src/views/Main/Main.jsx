import React, { useState } from "react";
import GameBoard from "./Partials/GameBoard";
import Text from "../../components/Text/Text";
import Logs from "./Partials/Logs";
import { WINNING_COMBINATIONS } from "../data/winning-combination";

import styles from "./Main.module.css";
import GameOver from "./Partials/GameOver";
import PlayerCard from "./Partials/PlayerCard";
import deriveWinner from "../../helper/deriveWinner";
import deriveGameBoard from "../../helper/deriveGameBoard";
import deriveActivePlayer from "../../helper/deriveActivePlayer";

function Main() {
  const INITIAL_PLAYERS = {
    x: "Player 1",
    o: "Player 2",
  };

  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(INITIAL_PLAYERS);

  const activeSymbol = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);

  const handleSelect = (row, col) => {
    setGameTurns((prevTurn) => {
      const player = deriveActivePlayer(gameTurns);

      const updatedTurn = [{ square: { row, col }, player }, ...prevTurn];
      return updatedTurn;
    });
  };
  const handleReset = () => {
    setGameTurns([]);
  };

  const handlePlayerChange = (symbol, name) => {
    setPlayers((prev) => {
      return {
        ...prev,
        [symbol]: name,
      };
    });
  };

  const hasDraw = gameTurns?.length === 9 && !winner;

  return (
    <div className={styles["main-container"]}>
      <div className={styles["game-board"]}>
        <div>
          <Text
            fontWeight="bold"
            style={{
              fontSize: "40px",
              color: "white",
              display: "block",
              textAlign: "center",
            }}
          >
            Tic Tac Toe
          </Text>
          <div>
            <GameOver
              hasDraw={hasDraw}
              winner={winner}
              handleReset={handleReset}
            />
            <div className={styles["box-container"]}>
              <PlayerCard
                name="Player 1"
                symbol="x"
                activeSymbol={activeSymbol}
                onChangeName={handlePlayerChange}
              />

              <div className={styles["game-box-container"]}>
                <div className={styles.box}>
                  <GameBoard
                    gameBoard={gameBoard}
                    handleSelect={handleSelect}
                  />
                </div>
                <Logs gameTurns={gameTurns} activeSymbol={activeSymbol} />
              </div>
              <PlayerCard
                name="Player 2"
                symbol="o"
                activeSymbol={activeSymbol}
                onChangeName={handlePlayerChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
