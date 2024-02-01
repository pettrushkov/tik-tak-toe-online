import clsx from "clsx";
import { SYMBOL_O, SYMBOL_X } from "./constants";

export const GameSymbol = ({ symbol }) => {
  const getSymbolClassName = (symbol) => {
    if (symbol === SYMBOL_O) return "text-green-500";
    if (symbol === SYMBOL_X) return "text-red-500";
    return "";
  };

  return (
    <span className={clsx("text-xl", getSymbolClassName(symbol))}>
      {symbol}
    </span>
  );
};
