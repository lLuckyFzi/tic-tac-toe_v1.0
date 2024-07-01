import React, { useState } from "react";
import Text from "../../../components/Text/Text";

import styles from "./styles/PlayerInfo.module.css";
import { Button, Input } from "antd";
import { FaCheck } from "react-icons/fa";

function PlayerInfo(props) {
  const { onChangeName, name, symbol } = props;

  const [isEdit, setIsEdit] = useState(false);
  const [playername, setPlayername] = useState(name);

  const handleIsEdit = () => {
    setIsEdit((edit) => !edit);

    if (isEdit) {
      onChangeName(symbol, playername);
    }
  };

  return (
    <div className={styles["player-info"]}>
      {isEdit ? (
        <div className={styles["player-input-container"]}>
          <Input
            className={styles["player-input-input"]}
            placeholder="Player Name"
            value={playername}
            onChange={(e) => setPlayername(e.target.value)}
          />
          <Button
            className={styles["player-input-button"]}
            icon={<FaCheck />}
            onClick={handleIsEdit}
          />
        </div>
      ) : (
        <Button
          onClick={handleIsEdit}
          type="text"
          className={styles["player-button"]}
        >
          <Text>{playername || "Player Name"}</Text>
        </Button>
      )}
    </div>
  );
}

export default PlayerInfo;
