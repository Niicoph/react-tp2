import { Link } from "react-router";
import LikeBefore from "../../assets/Icons/likeBefore.png";
import LikeAfter from "../../assets/Icons/likeAfter.png";

export default function Card({
  skin,
  liked = false,
  onToggleFavorite,
}) {

  return (
    <Link
      className={`relative transition duration-200 ease-in-out flex flex-col justify-center items-center w-full h-80 shadow-primary rounded-xl bg-white border border-slate-200 hover:border-2 hover:border-orange-primary`}
      to={`/skins/${skin.id}`}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          onToggleFavorite();
        }}
        className="absolute top-3 right-3 w-5 h-5 cursor-pointer"
      >
        <img src={liked ? LikeAfter : LikeBefore} alt="Like Icon" />
      </button>

      <div
        className="w-4/6 h-1 rounded-full"
        style={{ backgroundColor: skin.rarity.color }}
      ></div>

      <img
        src={skin.image}
        alt={skin.name}
        className="object-contain w-3/4 h-3/4 flex justify-center items-center"
      />
      <h3 className="text-sm font-bold">{skin.name}</h3>
      <p className="text-xs text-gray-500">{skin.rarity.name}</p>
    </Link>
  );
}
