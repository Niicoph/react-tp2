import { Link } from "react-router-dom";

export default function Dropdown({ skins }) {
  if (skins.length === 0) return null;

  return (
    <ul className="absolute z-10 mt-2 w-full bg-white border rounded-md shadow-lg max-h-60 overflow-y-auto">
      {skins.map((skin) => (
        <li key={skin.id}>
          <Link
            to={`/skins/${skin.id}`}
            className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            <div className="flex items-center gap-10 border-b border-gray-200 py-2">
              <img
                src={skin.image}
                alt={skin.name}
                className=" object-contain w-10 h-10 flex justify-center items-center"
              />
              <h3 className="text-sm font-bold">{skin.name}</h3>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
