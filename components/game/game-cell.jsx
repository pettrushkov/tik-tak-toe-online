import { GameSymbol } from "./game-symbol";
import clsx from "clsx";

export const GameCell = ({ isWinner, onClick, symbol }) => {
  return (
    <button
      type="button"
      className={clsx(
        "border border-gray-400 -mt-px -ml-px flex items-center justify-center",
        isWinner && "bg-red-100",
      )}
      onClick={onClick}
    >
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  );
};
