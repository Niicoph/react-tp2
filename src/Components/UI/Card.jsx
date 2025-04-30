import { Link } from "react-router";

export default function Card({ skin, hoveredId, onHover, onLeave }) {
  const isOtherHovered = hoveredId && hoveredId !== skin.id;
  return (
    <Link
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`transition duration-200 ease-in-out ${
        isOtherHovered ? "blur-[1px] opacity-60" : ""
      } flex flex-col justify-center items-center w-full h-80 shadow-primary rounded-xl bg-white border border-slate-200 hover:border-2 hover:border-orange-primary`}
      to={`/skins/${skin.id}`}
    >
      <div
        className="w-3/4 h-1 rounded-full"
        style={{ backgroundColor: skin.rarity.color }}
      ></div>
      <img
        src={skin.image}
        alt={skin.name}
        className=" object-contain w-3/4 h-3/4 flex justify-center items-center"
      />
      <h3 className="text-sm font-bold">{skin.name}</h3>
      <p className="text-xs text-gray-500">{skin.rarity.name}</p>
    </Link>
  );
}
