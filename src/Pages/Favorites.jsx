import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { routes } from "../Routes/Routes";
import LoadingLogo from "../Components/UI/LoadingLogo/LoadingLogo";
import RarityFilter from "../Components/RarityFilter/RarityFilter";
import Card from "../Components/UI/Card";
import { useTranslation } from "react-i18next";
import Container from "../Components/UI/Container";
import ForwardIcon from "../assets/Icons/forward.svg";

export default function Favorites() {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [allSkins, setAllSkins] = useState([]);
  const [filteredFavorites, setFilteredFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [rarityFilter, setRarityFilter] = useState("All");

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
    let filtered = allSkins.filter((skin) => favorites.includes(skin.id));

    if (rarityFilter !== "All") {
      filtered = filtered.filter((skin) => {
        if (typeof skin.rarity === "string") {
          return skin.rarity === rarityFilter;
        }
        if (typeof skin.rarity === "object" && skin.rarity.name) {
          return skin.rarity.name === rarityFilter;
        }
        return false;
      });
    }

    setFilteredFavorites(filtered);
  }, [allSkins, favorites, rarityFilter]);

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

  if (loading) return <LoadingLogo />;

  if (error) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <h1 className="text-3xl font-bold">Error: {error.message}</h1>
      </div>
    );
  }

  return (
    <Container>
      <Header />
      <main className="flex flex-col items-center w-4/6 min-h-screen">
        <div className="flex flex-col flex-grow w-full pb-10 pt-5 fade-in">
          <div className="pb-5 flex flex-col text-black-primary ">
            <div className="flex items-center gap-2 pb-4">
              <Link to={routes.home}>
                <span className="flex gap-2">{t("home")}</span>
              </Link>
              <img src={ForwardIcon} alt="next" className="w-5 h-5" />
              <span> {t("favorites")} </span>
            </div>
            <RarityFilter
              filterByRarity={filterByRarity}
              rarityFilter={rarityFilter}
            />
          </div>
          {filteredFavorites.length === 0 ? (
            <div className="flex justify-start items-center w-full">
              <h1 className="text-sm font-medium">{t("noFavorites")}</h1>
            </div>
          ) : (
            <div className="flex-1 grid grid-cols-4 gap-5 p-5 rounded-md bg-black-primary">
              {filteredFavorites.map((skin) => (
                <Card
                  key={skin.id}
                  skin={skin}
                  liked={favorites.includes(skin.id)}
                  onToggleFavorite={() => toggleFavorite(skin.id)}
                />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </Container>
  );
}
