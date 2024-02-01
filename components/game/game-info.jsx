import { GameSymbol } from "./game-symbol";

export const GameInfo = ({
  isDraw,
  winnerSequence,
  currentStep,
  renderSymbol,
  winnerSymbol,
}) => {
  if (isDraw) {
    return <div className="mb-3">Draw</div>;
  }

  if (winnerSymbol) {
    return (
      <div className="mb-3">
        Winner: <GameSymbol symbol={winnerSymbol} />
      </div>
    );
  }

  return (
    <div className="mb-3">
      Move: <GameSymbol symbol={currentStep} />
    </div>
  );
};
