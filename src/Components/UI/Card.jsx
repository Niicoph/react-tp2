import { useState } from "react";
import { Link } from "react-router";
import LikeBefore from "../../assets/Icons/likeBefore.svg";
import LikeAfter from "../../assets/Icons/likeAfter.svg";

export default function Card({ skin, liked = false, onToggleFavorite }) {
  const [isLoading, setIsLoading] = useState(true);
  const rarityColor = skin.rarity.color;

  return (
    <Link
      style={{
        backgroundColor: `${skin.rarity.color}40`,
      }}
      className={`relative transition duration-300 pt-3 ease-in-out flex flex-col justify-center items-center w-full h-80 rounded-md backdrop-blur-lg hover:scale-105`}
      to={`/skins/${skin.id}`}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          onToggleFavorite();
        }}
        className="absolute top-2 right-4 w-5 h-5 cursor-pointer"
      >
        <img
          src={liked ? LikeAfter : LikeBefore}
          alt="Like Icon"
          className=""
        />
      </button>

      <div
        className="w-4/6 h-1 rounded-full mt-1"
        style={{ backgroundColor: skin.rarity.color }}
      ></div>

      <div className="w-3/4 h-3/4 flex justify-center items-center relative">
        {isLoading && (
          <div className="absolute w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
        )}
        <img
          src={skin.image}
          alt={skin.name}
          className={`object-contain w-full h-full transition-opacity flex justify-center items-center duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          // style={{ filter: `drop-shadow(0 0 5px ${rarityColor})` }}
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full h-1/4 bg-[#1e2022] rounded-b-md">
        <h3 className="text-sm text-white font-bold">{skin.name}</h3>
        <p className="text-xs text-white">{skin.rarity.name}</p>
      </div>
    </Link>
  );
}
