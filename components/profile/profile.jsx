import Image from "next/image";

export function Profile({ avatarSrc }) {
  return (
    <div className="flex items-center gap-2 text-start text-teal-600">
      <Image src={avatarSrc} width={48} height={48} alt="avatar" />
      <div>
        <div className=" text-lg leading-tight">DenP</div>
        <div className="text-slate-400 text-xs leading-tight">Rating: 1230</div>
      </div>
    </div>
  );
}
