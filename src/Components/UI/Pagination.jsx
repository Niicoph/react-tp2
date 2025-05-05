// src/UI/Pagination.jsx
import { useTranslation } from 'react-i18next'

export default function Pagination({ currentPage, totalPages, goToPage, nextPage, prevPage }) {
    const { t  } = useTranslation();

    return (
      <div className="flex justify-center mt-6 gap-2">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-orange-primary rounded disabled:opacity-50 hover:bg-orange-600"
        >
          {t('prev')}
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            className={`px-3 py-1 rounded text-white ${
              currentPage === i + 1 ? "bg-orange-primary hover:bg-orange-600" : " bg-black-secondary hover:bg-orange-600"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-orange-primary rounded disabled:opacity-50 hover:bg-orange-600"
        >
          {t('next')}
        </button>
      </div>
    );
  }
