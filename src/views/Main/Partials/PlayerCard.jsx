import React from "react";
import PlayerInfo from "./PlayerInfo";

import styles from "./styles/PlayerCard.module.css";
import { TbLetterO, TbLetterXSmall } from "react-icons/tb";

function PlayerCard(props) {
  const { activeSymbol, name, symbol, onChangeName } = props;

  return (
    <div className={styles.playerCard}>
      <div className={styles.card}>
        <PlayerInfo
          name={name || "Player"}
          symbol={symbol || "x"}
          isActive={activeSymbol === "x"}
          onChangeName={onChangeName}
        />
        {symbol === "x" ? (
          <TbLetterXSmall style={{ width: "60px", height: "60px" }} />
        ) : (
          <TbLetterO
            style={{ width: "35px", height: "35px", margin: "10px" }}
          />
        )}
      </div>
    </div>
  );
}

export default PlayerCard;
