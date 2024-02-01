import { useState } from "react";
import { SYMBOL_O, SYMBOL_X } from "./constants";

const computeWinner = (cells) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return [a, b, c];
    }
  }
};

export const useGameState = () => {
  const [cells, setCells] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [currentStep, setCurrentStep] = useState(SYMBOL_O);
  const [winnerSequence, setWinnerSequence] = useState();

  const handleReset = () => {
    setCells(Array(9).fill(null));
    setCurrentStep(SYMBOL_O); // default
    setWinnerSequence(undefined);
  };

  const handleCellClick = (index) => {
    // exit from handler if cell already has value or winnerSequence is defined
    if (cells[index] || winnerSequence) {
      return;
    }

    const cellsCopy = cells.slice();
    cellsCopy[index] = currentStep;

    // check is anyone win
    const winner = computeWinner(cellsCopy);

    // update cells
    setCells(cellsCopy);
    // set another value: O or X
    setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O);
    setWinnerSequence(winner);
  };

  const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined;
  const isDraw = !winnerSequence && cells.filter((value) => value).length === 9;

  return {
    cells,
    currentStep,
    winnerSequence,
    handleReset,
    handleCellClick,
    winnerSymbol,
    isDraw,
  };
};
