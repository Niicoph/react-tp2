import { useEffect, useState } from "react";
import favBefore from "../../assets/Icons/LikeBefore.svg";
import favAfter from "../../assets/Icons/LikeAfter.svg";
import Nav from "./Nav/Nav";
import LanguageSelector from "./LanguageSelector/LanguageSelector";
import Logo from "../../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [weaponCategories, setWeaponCategories] = useState([]);
  const location = useLocation();
  const isFavoritesPage = location.pathname === "/favorites";

  useEffect(() => {
    const fetchWeaponsCategories = async () => {
      const response = await fetch(
        "https://68114bf13ac96f7119a427d6.mockapi.io/v1/cs2/categories"
      );
      const data = await response.json();
      setWeaponCategories(data);
    };
    fetchWeaponsCategories();
  }, []);

  return (
    <header className="w-full h-16 flex justify-center items-center bg-[#151719] border-b border-dotted border-slate-300 sticky top-0 z-10 bg-opacity-90 backdrop-blur-sm px-2 text-white">
      <div className="w-4/6 flex items-center">
        <Link to={"/"}>
          <img src={Logo} alt="logo !eco" className="w-14 h-14" />
        </Link>
        <Nav weaponCategories={weaponCategories} />
        <div className="ml-auto flex items-center">
          <LanguageSelector />

          <Link to={"/favorites"}>
            <img
              src={isFavoritesPage ? favAfter : favBefore}
              alt="Favorites"
              className="w-5 h-5 ml-4 cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
