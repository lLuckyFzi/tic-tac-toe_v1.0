import { Button, Modal } from "antd";
import React from "react";
import Text from "../../../components/Text/Text";

import styles from "./styles/GameOver.module.css";

function GameOver(props) {
  const { winner, hasDraw, handleReset } = props;

  return (
    <Modal
      open={winner || hasDraw}
      centered
      footer={false}
      onClose={handleReset}
      destroyOnClose
    >
      <div className={styles["game-over"]}>
        <Text style={{ fontSize: "40px" }} fontWeight="bold">
          Game Over
        </Text>
        {winner ? (
          <Text style={{ fontSize: "20px" }}>You Won {winner}!</Text>
        ) : (
          <Text>Draw!</Text>
        )}
        <Button type="primary" className={styles["game-over-button"]} onClick={handleReset}>Rematch</Button>
      </div>
    </Modal>
  );
}

export default GameOver;
