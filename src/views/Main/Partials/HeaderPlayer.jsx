import React from "react";

import styles from "./styles/HeaderPlayer.module.css";
import PlayerInfo from "./PlayerInfo";

function HeaderPlayer(props) {
  const { activeSymbol } = props;

  return (
    <div className={styles["header-player"]}>
      <div className={styles["header-player-container"]}>
        <PlayerInfo name="Player 1" symbol="X" isActive={activeSymbol === "x"} />
        <PlayerInfo name="Player 2" symbol="O" isActive={activeSymbol === "o"} />
      </div>
      <hr className={styles["hr"]} />
    </div>
  );
}

export default HeaderPlayer;
