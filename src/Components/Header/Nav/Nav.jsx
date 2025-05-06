import { useEffect, useState } from "react";
import Searchbar from "../../UI/Searchbar";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

export default function Nav({ weaponCategories }) {
  const [weapons, setWeapons] = useState([]);
  const [openSelect, setOpenSelect] = useState(null);
  const [selectedWeapon, setSelectedWeapon] = useState(null); // Solo una selección
  const { t } = useTranslation();

  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const weaponParam = queryParams.get("weapon");
    if (!weaponParam) {
      resetSelections();
    }
  }, [location]);

  useEffect(() => {
    const fetchWeapons = async () => {
      const response = await fetch(
        "https://68114bf13ac96f7119a427d6.mockapi.io/v1/cs2/weapon"
      );
      const data = await response.json();
      setWeapons(data);
    };
    fetchWeapons();
  }, []);

  const filterWeaponsByCategory = (category) => {
    return weapons.filter((weapon) => weapon.category === category);
  };

  const toggleDropdown = (catId) => {
    setOpenSelect((prev) => (prev === catId ? null : catId));
  };

  const selectWeapon = (weapon) => {
    setSelectedWeapon(weapon);
    setOpenSelect(null);
  };

  const resetSelections = () => {
    setSelectedWeapon(null);
  };

  return (
    <nav className="flex items-center justify-between w-full h-full px-4">
      <ul className="flex items-center gap-4 w-full">
        {weaponCategories.map((weaponCat) => {
          const isSelectedCategory =
            selectedWeapon?.category === weaponCat.name;

          return (
            <li key={weaponCat.id} className="relative">
              <button
                onClick={() => toggleDropdown(weaponCat.id)}
                className="px-3 py-1 rounded flex items-center gap-2"
              >
                {isSelectedCategory && selectedWeapon?.image && (
                  <img
                    src={selectedWeapon.image}
                    alt={selectedWeapon.name}
                    className="w-4 h-4"
                  />
                )}
                <span className="flex justify-center items-center gap-2 text-sm">
                  {isSelectedCategory ? selectedWeapon.name : weaponCat.name}
                  <img
                    src="https://img.icons8.com/material-outlined/24/expand-arrow--v1.png"
                    alt="dropdown"
                    className="w-4 h-4"
                  />
                </span>
              </button>

              {openSelect === weaponCat.id && (
                <div
                  className="absolute mt-[18px] border-2 border-black-secondary rounded shadow-xl z-10 w-48 max-h-80 overflow-auto scrollbar-hidden
                  transition-all duration-200 ease-out origin-top scale-95 opacity-0 animate-dropdown"
                >
                  {filterWeaponsByCategory(weaponCat.name).map((weapon) => (
                    <Link
                      to={`/?weapon=${weapon.name}`}
                      key={weapon.id}
                      onClick={() => selectWeapon(weapon)}
                      className="px-2 py-2 bg-black-primary hover:bg-black-secondary cursor-pointer flex items-center gap-2"
                    >
                      <img
                        src={weapon.image}
                        alt={weapon.name}
                        className="w-7 h-7"
                      />
                      <span>{weapon.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </li>
          );
        })}
        <li>
          <Link
            to={"/"}
            onClick={resetSelections}
            className="text-sm px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded"
          >
            {t("clear")}
          </Link>
        </li>
        <li className="flex items-center w-3/4">
          <Searchbar />
        </li>
      </ul>
    </nav>
  );
}
