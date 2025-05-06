export default function RarityButton({
  text,
  color,
  filterByRarity,
  isActive,
}) {
  return (
    <button
      onClick={() => filterByRarity(text)}
      className={` ${
        isActive ? "bg-[#433216] text-[#db8f21] rounded border border-[#694a19]" : ""
      } border border-black-secondary bg-[#1e2022] hover:bg-[#694a19] transition-shadow flex items-center gap-2 px-3 py-1 rounded text-xs font-medium`}
    >
      <span
        className="block w-2 h-2 rounded-full"
        style={{ backgroundColor: color }}
      />
      {text}
    </button>
  );
}