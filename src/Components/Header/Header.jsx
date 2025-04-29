import { useEffect , useState } from "react";
import Nav from "./Nav/Nav";

export default function Header() {
    const [weaponCategories, setWeaponCategories] = useState([]);

    useEffect( () => {
        const fetchWeaponsCategories = async () => {
            const response = await fetch("https://68114bf13ac96f7119a427d6.mockapi.io/v1/cs2/categories");
            const data = await response.json();
            setWeaponCategories(data);
        }
        fetchWeaponsCategories();
    }, [] )

  return (
   <header className="w-full h-16 flex  items-center  border-b border-orange-primary">
    <h1>Logo</h1>
    <Nav weaponCategories={weaponCategories} />
    <h1>Idioma</h1>
   </header>
  )
}
