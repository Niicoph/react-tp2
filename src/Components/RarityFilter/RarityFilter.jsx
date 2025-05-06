import RarityButton from "./RarityButton";

const rarities = [
  { name: "All" , color: "#FFFFFF" },
  { name: "Mil-Spec Grade", color: "#4b69ff" },
  { name: "Covert", color: "#eb4b4b" },
  { name: "Restricted", color: "#8847ff" },
  { name: "Classified", color: "#d32ce6" },
];

export default function RarityFilter({ filterByRarity , rarityFilter }) {

  return (
    <ul className="flex gap-4 w-full flex-wrap text-white bg-[#151719] p-4 rounded-md ">
      {rarities.map((rarity) => (
        <li key={rarity.name}>
          <RarityButton
            isActive={rarityFilter === rarity.name}
            text={rarity.name}
            color={rarity.color}
            filterByRarity={filterByRarity}
          />
        </li>
      ))}
    </ul>
  );
}
