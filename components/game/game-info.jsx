import clsx from "clsx";
import { Profile } from "../profile";
import { GameSymbol } from "./game-symbol";
import { GAME_SYMBOLS } from "./constants";

import avatarSrc1 from "./images/avatar1.png";
import avatarSrc2 from "./images/avatar2.png";
import avatarSrc3 from "./images/avatar3.png";
import avatarSrc4 from "./images/avatar4.png";

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

export function GameInfo({ className }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 py-4 justify-between grid grid-cols-2 gap-3",
      )}
    >
      {players.map((player, index) => (
        <PlayerInfo
          playerInfo={player}
          key={player.id}
          isRight={(index + 1) % 2 === 0} // each second item has another element order
        />
      ))}
    </div>
  );
}

function PlayerInfo({ playerInfo, isRight }) {
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
      <div className="text-slate-900 text-lg font-semibold">01:08</div>
    </div>
  );
}
