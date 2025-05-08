import { useEffect, useState } from "react";
import favBefore from "../../assets/Icons/likeBefore.svg";
import favAfter from "../../assets/Icons/likeAfter.svg";
import Nav from "./Nav/Nav";
import LanguageSelector from "./LanguageSelector/LanguageSelector";
import Logo from "../../assets/logo.svg";
import Caja from "../../assets/Icons/coce.png";
import { Link, useLocation } from "react-router-dom";
import Searchbar from "../UI/Searchbar";

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
    <header className="w-full h-16 flex justify-center items-center bg-black-primary border-b border-dotted border-slate-300 sticky top-0 z-10 bg-opacity-90 backdrop-blur-sm text-white">
      <div className="w-4/6 flex items-center justify-center px-4">
        <Link to={"/"} className="mx-2">
          <img src={Logo} alt="logo !eco" className="min-w-14 max-h-14" />
        </Link>
        <Nav weaponCategories={weaponCategories} />
        <Searchbar />
        <div className="flex items-center gap-2 mx-2">
          <LanguageSelector />

          <Link to={"/favorites"} className="mx-2">
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
