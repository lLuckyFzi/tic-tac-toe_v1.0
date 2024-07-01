import React from "react";

import styles from "./styles/Logs.module.css";
import Text from "../../../components/Text/Text";

function Logs(props) {
  const { gameTurns } = props;

  const isLogging = gameTurns?.length;

  return (
    <div className={styles["log-container"]}>
      <Text
        fontWeight="medium"
        style={{ fontSize: "25px", textAlign: "center" }}
      >
        Logs
      </Text>

      {isLogging ? (
        gameTurns?.map((data) => (
          <div key={`${data?.square.row}${data?.square.col}`}>
            {data.player} selected {data?.square.row}, {data?.square.col}
          </div>
        ))
      ) : (
        <Text style={{display: 'block'}}>No Logs in here</Text>
      )}
    </div>
  );
}

export default Logs;
