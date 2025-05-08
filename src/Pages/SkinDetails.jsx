import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Navigate } from "react-router";
import { routes } from "../routes/routes.js";
import LoadingLogo from "../Components/UI/LoadingLogo/LoadingLogo.jsx";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Card from "../Components/UI/Card.jsx";
import { useTranslation } from "react-i18next";
import CardCrate from "../Components/UI/CardCrate.jsx";
import Container from "../Components/UI/Container.jsx";
import Tilt from "react-parallax-tilt";
import Breadcrum from "../Components/Breadcrum/Breadcrum.jsx";

export default function SkinDetails() {
  const [skin, setSkin] = useState(null);
  const [crate, setCrate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const [description, setDescription] = useState([]);
  const [italic, setItalic] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const { t } = useTranslation();

  useEffect(() => {
    const fetchSkins = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://680ff3de27f2fdac240fe0f4.mockapi.io/v1/cs2/skins/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setSkin(data);
        } else {
          throw new Error(`Skin not found (Código ${response.status})`);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSkins();
  }, [id]);

  useEffect(() => {
    if (skin && skin !== null && skin !== undefined) {
      const fetchCrates = async () => {
        try {
          setLoading(true);
          const response = await fetch(
            `https://680ff3de27f2fdac240fe0f4.mockapi.io/v1/cs2/crates/${skin.crateid}`
          );
          if (response.ok) {
            const data = await response.json();
            setCrate(data);
          } else {
            throw new Error(`Crate not found (Código ${response.status})`);
          }
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
      fetchCrates();

      const normalized = skin.description.replace(/\\n/g, "\n");
      const noHtml = normalized.replace(/<[^>]+>/g, "");
      const italic = normalized.match(/<i>(.*?)<\/i>/);
      const cleanedItalic = italic ? italic[1].split("\n") : t("nodescription");
      setItalic(cleanedItalic);
      const cleaned = noHtml ? noHtml.split("\n")[0] : t("nodescription");
      setDescription(cleaned);
    }
  }, [skin]);

  if (error?.message?.includes("404")) {
    return <Navigate to={routes.notFound} replace />;
  }

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

  if (
    skin &&
    skin !== null &&
    skin !== undefined &&
    crate &&
    crate !== null &&
    crate !== undefined
  ) {
    return (
      <Container>
        <Header />
        <main className="flex flex-1 flex-col items-center w-4/6">
          <div className="flex flex-col w-full pt-5 fade-in">
            {/* Breadcrumb */}
            <div className="w-full pb-5 flex text-black-primary items-center">
              <Breadcrum>
                <span> {skin.weapon} </span>
              </Breadcrum>
            </div>

            {/* Arma y caja en una fila */}
            <div className="flex flex-row gap-10 p-5 bg-black-primary justify-between rounded-md">
              {/* Arma (izquierda) */}
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.1}
                glareColor="#000000"
                glarePosition="all"
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                className="w-full rounded-md flex justify-center items-center transition duration-300 ease-in-out"
                style={{
                  backgroundColor: `${skin.rarity.color}40`,
                }}
              >
                <img src={skin.image} alt="" className="rounded-md shadow-lg" />
              </Tilt>

              {/* Arma (derecha) */}
              <div className="flex flex-col justify-between w-full gap-2">
                <div className="text-3xl text-white font-semibold p-2 pt-0">
                  {" "}
                  {skin.name}
                </div>
                <p className="text-gray-400 bg-[#1e2022] border border-[#252729] rounded-md p-2">
                  {description}
                </p>
                <div className="w-full text-sm font-semibold text-p-primary tracking-wide">
                  <p className="p-2"> {t("containedIn")} </p>
                  <CardCrate crate={crate} />
                </div>
                <p className="italic text-p-secondary mt-auto">{italic}</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </Container>
    );
  }
}
