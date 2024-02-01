import { useGameState } from "./use-game-state";
import styles from "./game.module.css";
import { GameInfo } from "./game-info";
import { GameCell } from "./game-cell";
import { ResetBtn } from "./reset-button";

export function Game() {
  const {
    cells,
    currentStep,
    winnerSequence,
    handleReset,
    handleCellClick,
    winnerSymbol,
    isDraw,
  } = useGameState();

  return (
    <div className="flex flex-col items-center w-40 mx-auto my-24 border border-black p-5">
      <GameInfo
        isDraw={isDraw}
        currentStep={currentStep}
        winnerSymbol={winnerSymbol}
      />

      <div className="grid pt-px pl-px grid-cols-[repeat(3,_30px)] grid-rows-[repeat(3,_30px)]">
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            symbol={symbol}
            isWinner={winnerSequence?.includes(index)}
            onClick={() => handleCellClick(index)}
            index={index}
          />
        ))}
      </div>
      <div>
        <ResetBtn onClick={handleReset} />
      </div>
    </div>
  );
}
