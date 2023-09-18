import { WINNER_COMBOS } from "../constanst";

export function checkWinnerFrom(boardToCheck) {
  for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] == boardToCheck[c]) {
          return boardToCheck[a];
      }
  }

  // Si no hay ganador
  return null
}

export function checkEndGame(newBoard) {
  return newBoard.every((square) => square != null)
}
