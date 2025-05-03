import { useEffect, useState } from "react";
import esIcon from "../../assets/Icons/es-ES.png";
import Favorites from '../../assets/Icons/LikeBefore.png'
import Nav from "./Nav/Nav";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Header({ selectedWeapon, setSelectedWeapon }) {
  const [weaponCategories, setWeaponCategories] = useState([]);

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
    <header className="w-full h-16 flex  items-center  border-b border-dotted border-slate-300 sticky top-0 z-10 bg-opacity-90 backdrop-blur-sm px-2">
      <Link to={"/"}>
        <img src={Logo} alt="logo !eco" className="w-10 h-10" />
      </Link>
      <Nav
        weaponCategories={weaponCategories}
        selectedWeapon={selectedWeapon}
        setSelectedWeapon={setSelectedWeapon}
      />
      <div className="ml-auto flex items-center">
        <span className="text-sm text-gray-500">ES</span>
        <img src={esIcon} alt="es-ES" className="w-5 h-5 ml-2" />
        <Link to={"/favorites"}>
          <img
            src={Favorites}
            alt="Favorites"
            className="w-5 h-5 ml-4 cursor-pointer"
          />
        </Link>
      </div>
    </header>
  );
}
