import { useEffect, useState } from "react";
import Input from "../../UI/Input";

export default function Nav({
  weaponCategories,
  setInputSearch,
  selectedWeapon,
  setSelectedWeapon,
}) {
  const [weapons, setWeapons] = useState([]);
  const [openSelect, setOpenSelect] = useState(null);

  // estructura
  // console.log("selectedWeapon", selectedWeapon[1]?.name);

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

  // filtramos arma por categoria
  const filterWeaponsByCategory = (category) => {
    return weapons.filter((weapon) => weapon.category === category);
  };

  // drpdown por categoria
  const toggleDropdown = (catId) => {
    setOpenSelect((prev) => (prev === catId ? null : catId));
  };

  // seleccionamos el arma y cerramos el dropdown
  const selectWeapon = (catId, weapon) => {
    setSelectedWeapon((prev) => ({ ...prev, [catId]: weapon }));
    setOpenSelect(null);
  };
  // reset selections
  const resetSelections = () => {
    setSelectedWeapon({});
  };

  return (
    <nav className="flex items-center justify-between w-full h-full px-4">
      <ul className="flex items-center gap-4 w-full">
        {weaponCategories.map((weaponCat) => {
          const selected = selectedWeapon[weaponCat.id];

          return (
            <li key={weaponCat.id} className="relative">
              <button
                onClick={() => toggleDropdown(weaponCat.id)}
                className="px-3 py-1 rounded flex items-center gap-2"
              >
                {selected?.image && (
                  <img
                    src={selected.image}
                    alt={selected.name}
                    className="w-4 h-4"
                  />
                )}
                <span className="flex justify-center items-center gap-2 text-sm">
                  {selected?.name || weaponCat.name}
                  <img
                    src="https://img.icons8.com/material-outlined/24/expand-arrow--v1.png"
                    alt="dropdown"
                    className="w-4 h-4"
                  />
                </span>
              </button>

              {openSelect === weaponCat.id && (
                <div
                  className="absolute mt-[18px] border-t border-t-orange-primary bg-slate-100 border-2 border-slate-100 rounded shadow-xl z-10 w-48 max-h-80 overflow-auto scrollbar-hidden
    transition-all duration-200 ease-out origin-top scale-95 opacity-0 animate-dropdown"
                >
                  {filterWeaponsByCategory(weaponCat.name).map((weapon) => (
                    <div
                      key={weapon.id}
                      onClick={() => selectWeapon(weaponCat.id, weapon)}
                      className="px-2 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                    >
                      <img
                        src={weapon.image}
                        alt={weapon.name}
                        className="w-7 h-7"
                      />
                      <span>{weapon.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </li>
          );
        })}
        <li>
          <button
            onClick={resetSelections}
            className="text-sm px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded"
          >
            Clear
          </button>
        </li>
        <li>
          <Input onChange={(e) => setInputSearch(e.target.value)} />
        </li>
      </ul>
    </nav>
  );
}
