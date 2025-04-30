import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function SkinDetails() {
  const [skin, setSkin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

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

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <h1 className="text-3xl font-bold">Loading...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <h1 className="text-3xl font-bold">Error: {error.message}</h1>
      </div>
    );
  }
  return <main className="fade-in">SkinDetails </main>;
}
