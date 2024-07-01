const INITIAL_BOARD_VALUE = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_BOARD_VALUE?.map((array) => [...array])];

  for (const gameTurn of gameTurns) {
    const { square, player } = gameTurn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
}

export default deriveGameBoard;
