import clsx from "clsx";
import Image from "next/image";
import avatarSrc from "../header/avatar.png";

export function Profile({ avatar = avatarSrc, className, name, rating }) {
  return (
    <div
      className={clsx(
        className,
        "flex items-center gap-2 text-start text-teal-600",
      )}
    >
      <Image src={avatar} width={48} height={48} alt="avatar" />
      <div className="overflow-hidden">
        <div className=" text-lg leading-tight truncate">{name}</div>
        <div className="text-slate-400 text-xs leading-tight">
          Rating: {rating}
        </div>
      </div>
    </div>
  );
}
