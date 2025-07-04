import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import DropDown from "../../../assets/Icons/dropdown.svg";

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
    <nav className="flex items-center justify-between">
      <ul className="flex justify-between items-center gap-2 h-8">
        <div className="flex h-full justify-center items-center bg-[#1e2022] border border-[#252729] rounded-sm">
          {weaponCategories.map((weaponCat) => {
            const isSelectedCategory =
              selectedWeapon?.category === weaponCat.name;

            return (
              <li key={weaponCat.id} className="relative">
                <button
                  onClick={() => toggleDropdown(weaponCat.id)}
                  className="px-4 py-1 rounded flex items-center gap-2 cursor-pointer"
                >
                  {isSelectedCategory && selectedWeapon?.image && (
                    <img
                      src={selectedWeapon.image}
                      alt={selectedWeapon.name}
                      className="w-4 h-4"
                    />
                  )}
                  <span className="flex justify-center items-center gap-2 text-xs p-1">
                    {isSelectedCategory ? selectedWeapon.name : weaponCat.name}
                    <img src={DropDown} alt="dropdown" className="w-4 h-4" />
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
        </div>
        <Link
          to={"/"}
          onClick={resetSelections}
          className="h-full flex justify-center items-center px-2 text-sm bg-[#433216] text-[#db8f21] rounded border border-[#694a19]"
        >
          {t("clear")}
        </Link>
      </ul>
    </nav>
  );
}
