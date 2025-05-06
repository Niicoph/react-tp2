// src/UI/Pagination.jsx
import { useTranslation } from 'react-i18next'

export default function Pagination({ currentPage, totalPages, goToPage, nextPage, prevPage }) {
    const { t  } = useTranslation();

    return (
      <div className="flex justify-center mt-6 gap-2 text-white">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-[#1e2022] rounded disabled:opacity-50 hover:bg-[#323436]"
        >
          {t('prev')}
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            className={`px-3 py-1 rounded text-white ${
              currentPage === i + 1 ? " bg-[#151719] hover:bg-[#323436]" : " bg-[#151719] hover:bg-[#323436] "
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-[#1e2022]  rounded disabled:opacity-50 hover:bg-[#323436]"
        >
          {t('next')}
        </button>
      </div>
    );
  }
