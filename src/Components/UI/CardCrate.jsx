import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function CardCrate({ crate }) {
    const [loading, setLoading] = useState(true);
    const { t } = useTranslation();
    return(
        <div className={`relative transition duration-200 ease-in-out flex flex-col justify-center items-center w-full h-69 shadow-primary rounded-xl bg-white border border-slate-200 hover:border-2 hover:border-orange-primary`}>
            <div className="w-full h-48 flex justify-center items-center relative mb-4">
                {loading && (
                    <div className="absolute w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                )}
                <img
                    src={crate.image}
                    alt={crate.name}
                    className={`object-contain max-h-full max-w-full transition-opacity duration-300 ${
                    loading ? "opacity-0" : "opacity-100"
                    }`}
                    onLoad={() => setLoading(false)}
                    onError={() => setLoading(false)}
                />
            </div>
            <h3 className="text-sm font-bold">{crate.name}</h3>
            <p className="text-xs text-gray-500 my-3">{t('release')}: {crate.first_sale_date}</p>
        </div>
    );
}