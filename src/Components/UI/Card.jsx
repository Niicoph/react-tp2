import { useState } from "react";
import { Link } from "react-router";
import LikeBefore from "../../assets/Icons/likeBefore.svg";
import LikeAfter from "../../assets/Icons/likeAfter.svg";

export default function Card({ skin, liked = false, onToggleFavorite }) {
  const [isLoading, setIsLoading] = useState(true);
  const rarityColor = skin.rarity.color;

  return (
    <Link
      className={`relative transition duration-200 pt-3 ease-in-out flex flex-col justify-center items-center w-full h-80 shadow-primary rounded-lg bg-black-secondary hover:border-2 hover:border-orange-primary`}
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
        <img src={liked ? LikeAfter : LikeBefore} alt="Like Icon" className=""/>
      </button>

      <div
        className="w-4/6 h-1 rounded-full"
        style={{ backgroundColor: skin.rarity.color }}
      ></div>

      <div className="w-3/4 h-3/4 flex justify-center items-center relative">
        {isLoading && (
          <div className="absolute w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
        )}
        <img
          src={skin.image}
          alt={skin.name}
          className={`object-contain w-full h-full transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          style={{ filter: `drop-shadow(0 0 5px ${rarityColor})` }}
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
        />
      </div>

      <h3 className="text-sm text-white font-bold mx-5">{skin.name}</h3>
      <p className="text-xs text-white my-3">{skin.rarity.name}</p>
    </Link>
  );
}
