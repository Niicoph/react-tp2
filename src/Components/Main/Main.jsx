import { useState, useEffect } from "react";
import Card from "../UI/Card";
import RarityFilter from "../RarityFilter/RarityFilter";
import LoadingLogo from "../UI/LoadingLogo/LoadingLogo";

export default function Main({ inputSearch, selectedWeapon }) {
  const [allSkins, setAllSkins] = useState([]);
  const [filteredSkins, setFilteredSkins] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkins = async () => {
      try {
        setLoading(true);
        // simulando delay
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const response = await fetch(
          "https://680ff3de27f2fdac240fe0f4.mockapi.io/v1/cs2/skins"
        );
        const data = await response.json();
        setAllSkins(data);
        setFilteredSkins(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSkins();
  }, []);

  useEffect(() => {
    let filtered = allSkins;

    // Filtro por input
    if (inputSearch) {
      filtered = filtered.filter((skin) =>
        skin.name.toLowerCase().includes(inputSearch.toLowerCase())
      );
    }

    // Filtro por armas seleccionadas
    const selectedWeaponNames = Object.values(selectedWeapon).map(
      (w) => w.name
    );
    if (selectedWeaponNames.length > 0) {
      filtered = filtered.filter((skin) =>
        selectedWeaponNames.includes(skin.weapon.name)
      );
    }

    setFilteredSkins(filtered);
  }, [inputSearch, selectedWeapon, allSkins]);

  const filterByRarity = (rarity) => {
    if (!rarity || rarity === "All") {
      setFilteredSkins(allSkins);
    } else {
      const filtered = allSkins.filter((skin) => skin.rarity.name === rarity);
      setFilteredSkins(filtered);
    }
  };

  if (loading) {
    return <LoadingLogo />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <h1 className="text-3xl font-bold">Error: {error.message}</h1>
      </div>
    );
  }

  return (
    <main className="flex flex-col gap-5 flex-1 w-full pb-10 pt-5 fade-in">
      <RarityFilter filterByRarity={filterByRarity} />

      {filteredSkins.length === 0 ? (
        <div className="flex justify-start items-center w-full">
          <h1 className="text-sm font-medium">No skins found</h1>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-10">
          {filteredSkins.map((skin) => (
            <Card
              key={skin.id}
              skin={skin}
              hoveredId={hoveredId}
              onHover={() => setHoveredId(skin.id)}
              onLeave={() => setHoveredId(null)}
            />
          ))}
        </div>
      )}
    </main>
  );
}
