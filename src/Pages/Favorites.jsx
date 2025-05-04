import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { routes } from "../Routes/Routes";
import LoadingLogo from "../Components/UI/LoadingLogo/LoadingLogo";
import Card from "../Components/UI/Card"; // Asegúrate de importar correctamente

export default function Favorites() {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [allSkins, setAllSkins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  const toggleFavorite = (skinId) => {
    const updatedFavorites = favorites.includes(skinId)
      ? favorites.filter((id) => id !== skinId)
      : [...favorites, skinId];

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const favoriteSkins = allSkins.filter((skin) =>
    favorites.includes(skin.id)
  );


  if (loading) return <LoadingLogo />;

  if (error) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <h1 className="text-3xl font-bold">Error: {error.message}</h1>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center w-full">
      <main className="flex flex-col items-center w-4/6 min-h-screen">
        <Header />
        <div className="flex flex-col flex-grow w-full pb-10 pt-5 fade-in">
          <div className="pb-10">
            <Link to={routes.home}>
              <span>Home</span>
            </Link>
            <span> / Favorites</span>
          </div>

          {favoriteSkins.length === 0 ? (
            <div className="flex justify-start items-center w-full">
              <h1 className="text-sm font-medium">No favorites found</h1>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-10">
              {favoriteSkins.map((skin) => (
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
        <Footer />
      </main>
    </div>
  );
}
