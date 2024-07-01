import { WINNING_COMBINATIONS } from "../views/data/winning-combination";

function deriveWinner(gameBoard, players) {
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstComb = gameBoard[combination[0].row][combination[0].column];
    const secondComb = gameBoard[combination[1].row][combination[1].column];
    const thirdComb = gameBoard[combination[2].row][combination[2].column];

    if (firstComb && firstComb === secondComb && firstComb === thirdComb) {
      winner = players[firstComb];
    }
  }

  return winner;
}

export default deriveWinner;
