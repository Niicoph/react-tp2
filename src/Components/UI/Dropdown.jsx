import { Link } from "react-router-dom";
import noResults from "../../assets/noresults.svg";
import { useTranslation } from "react-i18next";


export default function Dropdown({ skins, query }) {
  if (!query) return null;
    const { t } = useTranslation();

  return (
    <ul className="absolute z-10 mt-2 w-full bg-black-primary border border-black-secondary rounded-md shadow-lg max-h-60 overflow-y-auto">
      {skins.length === 0 ? (
        <li className="block px-4 py-2 cursor-default">
          <div className="flex items-center gap-10 border-b border-gray-200 py-2">
            <div className="w-10 h-10 flex justify-center items-center text-gray-400">
              <img
                src={noResults}
                alt="no results"
                className="object-contain w-10 h-10 flex justify-center items-center"
              />
            </div>
            <h3 className="text-sm font-bold text-gray-500">
             {t('noresults')}
            </h3>
          </div>
        </li>
      ) : (
        skins.map((skin) => (
          <li key={skin.id}>
            <Link
              to={`/skins/${skin.id}`}
              className="block px-4 py-2 hover:bg-black-secondary cursor-pointer border-b border-gray-500"
            >
              <div className="flex items-center gap-10">
                <img
                  src={skin.image}
                  alt={skin.name}
                  className="object-contain w-10 h-10 flex justify-center items-center"
                />
                <h3 className="text-sm font-bold">{skin.name}</h3>
              </div>
            </Link>
          </li>
        ))
      )}
    </ul>
  );
}
