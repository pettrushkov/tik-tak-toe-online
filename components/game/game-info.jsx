import clsx from "clsx";
import { Profile } from "../profile";
import { GameSymbol } from "./game-symbol";
import { GAME_SYMBOLS } from "./constants";

import avatarSrc1 from "./images/avatar1.png";
import avatarSrc2 from "./images/avatar2.png";
import avatarSrc3 from "./images/avatar3.png";
import avatarSrc4 from "./images/avatar4.png";
import { useEffect, useState } from "react";

const players = [
  {
    id: 1,
    name: "DenP1",
    rating: 1234,
    avatar: avatarSrc1,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 2,
    name: "DenP2",
    rating: 2222,
    avatar: avatarSrc2,
    symbol: GAME_SYMBOLS.ZERO,
  },
  {
    id: 3,
    name: "DenP3",
    rating: 3333,
    avatar: avatarSrc3,
    symbol: GAME_SYMBOLS.TRIANGLE,
  },
  {
    id: 4,
    name: "DenP4",
    rating: 4444,
    avatar: avatarSrc4,
    symbol: GAME_SYMBOLS.SQUARE,
  },
];

export function GameInfo({
  className,
  playersCount,
  currentMove,
  isWinner,
  onPlayerTimeOver,
}) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 py-4 justify-between grid grid-cols-2 gap-3",
      )}
    >
      {players.slice(0, playersCount).map((player, index) => (
        <PlayerInfo
          playerInfo={player}
          key={player.id}
          isRight={(index + 1) % 2 === 0} // each second item has another element order
          onTimeOver={() => onPlayerTimeOver(player.symbol)}
          isTimerRunning={currentMove === player.symbol && !isWinner}
        />
      ))}
    </div>
  );
}

function PlayerInfo({ playerInfo, isRight, isTimerRunning, onTimeOver }) {
  const SECONDS = 6;

  const [seconds, setSeconds] = useState(SECONDS);

  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");

  const isDanger = seconds < 10;

  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setSeconds((seconds) => seconds > 0 && seconds - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
        setSeconds(SECONDS);
      };
    }
  }, [isTimerRunning]);

  useEffect(() => {
    if (seconds === 0) {
      onTimeOver();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  return (
    <div
      className={clsx(
        "flex justify-between items-center",
        isRight && "flex-row-reverse",
      )}
    >
      <div className="relative">
        <Profile
          className="w-44"
          name={playerInfo.name}
          rating={playerInfo.rating}
          avatar={playerInfo.avatar}
        />
        <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
          <GameSymbol symbol={playerInfo.symbol} />
        </div>
      </div>
      <div className="h-6 w-px bg-slate-200" />
      <div
        className={clsx(
          "w-16 text-lg font-semibold",
          isTimerRunning || "text-gray-300",
          isDanger ? "text-orange-600" : "text-slate-900",
        )}
      >
        {minutesString}:{secondsString}
      </div>
    </div>
  );
}
