import { GAME_SYMBOLS } from "./constants";
import { useState } from "react";
import { getNextMove, computeWinner } from "./model";

export function useGameState(playersCount) {
  /**
   * cells stores info about each cell (null if not checked or any string from GAME_SYMBOLS)
   * currentMove stores which symbol`s order to click
   * playersTimeOver shows who will skip click, because lost his move by timer
   */
  const [{ cells, currentMove, playersTimeOver }, setGameState] = useState(
    () => ({
      cells: new Array(19 * 19).fill(null),
      currentMove: GAME_SYMBOLS.CROSS,
      playersTimeOver: [],
    }),
  );

  const winnerSequence = computeWinner(cells);
  const nextMove = getNextMove(currentMove, playersCount, playersTimeOver);

  /**
   * if next move equal current move (only one user left in move array) - he winner as last gamer
   * other players can lost by time over
   */
  const winnerSymbol =
    nextMove === currentMove ? currentMove : cells[winnerSequence?.[0]];

  const handleCellClick = (index) => {
    setGameState((lastGameState) => {
      // don't change anything. cell stated already
      if (lastGameState.cells[index]) {
        return lastGameState;
      }

      return {
        ...lastGameState,
        currentMove: getNextMove(
          lastGameState.currentMove,
          playersCount,
          lastGameState.playersTimeOver,
        ),
        cells: lastGameState.cells.map((cell, i) =>
          i === index ? lastGameState.currentMove : cell,
        ),
      };
    });
  };

  const handlePlayerTimeOver = (symbol) => {
    setGameState((lastGameState) => {
      return {
        ...lastGameState,
        playersTimeOver: [...lastGameState.playersTimeOver, symbol],
        currentMove: getNextMove(
          lastGameState.currentMove,
          playersCount,
          lastGameState.playersTimeOver,
        ),
      };
    });
  };

  return {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    winnerSequence,
    handlePlayerTimeOver,
    winnerSymbol,
  };
}
