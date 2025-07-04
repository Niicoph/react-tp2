import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Card from "../UI/Card";
import RarityFilter from "../RarityFilter/RarityFilter";
import LoadingLogo from "../UI/LoadingLogo/LoadingLogo";
import Pagination from "../UI/Pagination";
import { useTranslation } from "react-i18next";
import Breadcrum from "../Breadcrum/Breadcrum";

export default function Main({ inputSearch }) {
  const [allSkins, setAllSkins] = useState([]);
  const [filteredSkins, setFilteredSkins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [rarityFilter, setRarityFilter] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);
  const skinsPerPage = 16;

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const weaponName = queryParams.get("weapon");

  const { t } = useTranslation();

  useEffect(() => {
    const fetchSkins = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = await fetch(
          "https://680ff3de27f2fdac240fe0f4.mockapi.io/v1/cs2/skins"
        );
        const data = await response.json();
        setAllSkins(data);
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

    if (inputSearch) {
      filtered = filtered.filter((skin) =>
        skin.name.toLowerCase().includes(inputSearch.toLowerCase())
      );
    }

    if (weaponName) {
      filtered = filtered.filter((skin) => skin.weapon === weaponName);
    }

    if (rarityFilter && rarityFilter !== "All") {
      filtered = filtered.filter((skin) => skin.rarity.name === rarityFilter);
    }

    setFilteredSkins(filtered);
    setCurrentPage(1);
  }, [allSkins, inputSearch, weaponName, rarityFilter]);

  const toggleFavorite = (skinId) => {
    const updatedFavorites = favorites.includes(skinId)
      ? favorites.filter((id) => id !== skinId)
      : [...favorites, skinId];

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const filterByRarity = (rarity) => {
    setRarityFilter(rarity);
  };

  const resetFilterByRarity = () => {
    setRarityFilter("All");
  };

  useEffect(() => {
    const queryParamsFilter = new URLSearchParams(location.search);
    const weaponFilter = queryParamsFilter.get("home");
    if (!weaponFilter) {
      resetFilterByRarity();
    }
  }, [location]);

  // Paginación
  const indexOfLastSkin = currentPage * skinsPerPage;
  const indexOfFirstSkin = indexOfLastSkin - skinsPerPage;
  const currentSkins = filteredSkins.slice(indexOfFirstSkin, indexOfLastSkin);
  const totalPages = Math.ceil(filteredSkins.length / skinsPerPage);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  if (loading) {
    return <LoadingLogo />;
  }

  if (error) {
    return (
      <div className="flex flex-1 justify-center items-center w-full h-full bg-black-primary">
        <h1 className="text-3xl font-bold">Error: {error.message}</h1>
      </div>
    );
  }

  return (
    <main className="flex flex-col gap-5 flex-1 w-4/6 pb-10 pt-5 fade-in">
      <Breadcrum />

      {filteredSkins.length === 0 ? (
        <div className="flex flex-1 justify-center items-center rounded-md bg-black-primary text-white w-full">
          <h1 className="text-lg font-medium">{t("noskins")}</h1>
        </div>
      ) : (
        <>
          <div className="flex-1 flex-col  gap-5 rounded-md bg-black-primary p-5">
            <RarityFilter
              filterByRarity={filterByRarity}
              rarityFilter={rarityFilter}
            />
            <div className="grid grid-cols-4 gap-5">
              {currentSkins.map((skin) => (
                <Card
                  key={skin.id}
                  skin={skin}
                  liked={favorites.includes(skin.id)}
                  onToggleFavorite={() => toggleFavorite(skin.id)}
                />
              ))}
            </div>
          </div>

          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            goToPage={goToPage}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        </>
      )}
    </main>
  );
}
