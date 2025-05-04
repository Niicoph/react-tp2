import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { routes } from "../routes/routes.js";
import LoadingLogo from "../Components/UI/LoadingLogo/LoadingLogo.jsx";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Card from "../Components/UI/Card.jsx";
import { Link } from "react-router-dom";

export default function SkinDetails() {
  const [skin, setSkin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const [description, setDescription] = useState([]);
  const [italic, setItalic] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    const fetchSkins = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://680ff3de27f2fdac240fe0f4.mockapi.io/v1/cs2/skins/${id}`
        );
        const data = await response.json();
        setSkin(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSkins();
  }, [id]);

  useEffect(() => {
    if (skin) {
      const normalized = skin.description.replace(/\\n/g, "\n");
      const noHtml = normalized.replace(/<[^>]+>/g, "");
      const italic = normalized.match(/<i>(.*?)<\/i>/);
      const cleanedItalic = italic
        ? italic[1].split("\n")
        : "No hay una descripción disponible";
      setItalic(cleanedItalic);
      const cleaned = noHtml
        ? noHtml.split("\n")[0]
        : "No hay una descripción disponible";
      setDescription(cleaned);
    }
  }, [skin]);

  const toggleFavorite = (skinId) => {
    let updatedFavorites;
    if (favorites.includes(skinId)) {
      updatedFavorites = favorites.filter((id) => id !== skinId);
    } else {
      updatedFavorites = [...favorites, skinId];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
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

  // const [selectedWeapon, setSelectedWeapon] = useState({});

  if (skin) {
    return (
      <div className="flex justify-center items-center w-full">
        <main className="flex flex-col items-center w-4/6 min-h-screen">
          <Header />
          <div className="flex flex-col flex-grow w-full pb-10 pt-5 fade-in">
            <div className="pb-10">
              <Link to={routes.home}>
                <span>Home</span>
              </Link>
              <span> / {skin.weapon}</span>
            </div>
            <div className="flex flex-row gap-10">
              <div className="basis-1/3">
                <Card
                  key={skin.id}
                  skin={skin}
                  liked={favorites.includes(skin.id)}
                  onToggleFavorite={() => toggleFavorite(skin.id)}
                />
              </div>
              <div className="basis-2/3 bg-white border border-gray-200 rounded-xl shadow-sm p-4 text-gray-800 flex flex-col">
                <div className="text-lg font-semibold">{skin.name}</div>
                <div className="flex-1">
                  <p>{description}</p>
                </div>
                <p className="italic text-gray-600 mt-auto">{italic}</p>
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    );
  }
}
