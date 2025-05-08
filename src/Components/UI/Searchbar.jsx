import Input from "./Input";
import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";

export default function Searchbar() {
  const [allSkins, setAllSkins] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredSkins, setFilteredSkins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://680ff3de27f2fdac240fe0f4.mockapi.io/v1/cs2/skins"
        );
        const data = await res.json();
        setAllSkins(data);
      } catch (err) {
        //console.error("Error fetching skins:", err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const results = allSkins.filter((skin) =>
      skin.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSkins(results);
  }, [query, allSkins]);


  return (
    <div className="relative mx-10 min-w-1/3 w-full max-w-1/3">
      <Input value={query} onChange={(e) => setQuery(e.target.value)} />
      <Dropdown skins={filteredSkins} query={query} />
    </div>
  );
}
