export default function RarityButton({ text, color, filterByRarity }) {
    return (
      <button
        onClick={() => filterByRarity(text)}
        className="border border-[#252729] bg-[#1e2022] hover:bg-black-secondary transition-shadow flex items-center gap-2 px-3 py-1 rounded text-xs font-medium"
      >
        <span className="block w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
        {text}
      </button>
    );
  }
