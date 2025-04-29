import Input from "../../UI/Input";
import {useEffect , useState} from "react";


export default function Nav({ weaponCategories }) {
    const [weapons , setWeapons] = useState([]);

    useEffect( () => {
        const fetchWeapons = async () => {
            const response = await fetch("https://68114bf13ac96f7119a427d6.mockapi.io/v1/cs2/weapon");
            const data = await response.json();
            setWeapons(data);
        }
        fetchWeapons();
    }, [] )

    /**
     * Filter weapons by category
     * @param category
     * @returns filtered weapons by category
     */
    const filterWeaponsByCategory = (category) => {
        return weapons.filter( (weapon) => weapon.category === category );
    }
  return (
    <nav className="flex items-center justify-between w-full h-full px-4 ">
      <ul className="flex items-center gap-4 w-full">
        {weaponCategories.map((weaponCat) => {
          return (
            <select key={weaponCat.id} className="text-sm font-semibold">
                <option value={weaponCat.name} className="text-sm font-semibold">
                    {weaponCat.name}
                </option>
                {filterWeaponsByCategory(weaponCat.name).map((weapon) => {
                    return (
                    <option key={weapon.id} value={weapon.name} className="text-sm font-semibold">
                        {weapon.name}
                    </option>
                    );
                })}
            </select>
          );
        })}
        <Input />
      </ul>
    </nav>
  );
}
