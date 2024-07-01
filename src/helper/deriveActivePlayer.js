function deriveActivePlayer(gameTurns) {
  const X_SYMBOL = "x";
  const O_SYMBOL = "o";

  let player = X_SYMBOL;

  if (gameTurns?.length > 0 && gameTurns[0].player === X_SYMBOL) {
    player = O_SYMBOL;
  }

  return player;
}

export default deriveActivePlayer;
