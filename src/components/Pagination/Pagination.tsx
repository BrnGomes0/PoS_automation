import React from "react";

interface PaginationProps {
  limit: number;
  total: number;
  offset: number;
  setOffset: (offset: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ limit, total, offset, setOffset }) => {
  const MAX_ITEMS = 9; // Maximum items displayed in pagination
  const MAX_LEFT = (MAX_ITEMS - 1) / 2; // Maximum items to the left of the current item

  // Calculation of the current page
  const current = offset ? offset / limit + 1 : 1;

  // Calculation of the total number of pages
  const pages = Math.ceil(total / limit);

  // Calculation of the index of the first item to be displayed in the page
  const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1);
  const first = Math.min(Math.max(current - MAX_LEFT, 1), maxFirst);

  // Function to handle page change
  const onPageChange = (page: number) => {
    // Checks if the requested page is within the limits
    if (page >= 1 && page <= pages) {
      setOffset((page - 1) * limit);
    }
  };

  return (
    <ul className="flex items-center space-x-2">
      <div
        className={`flex items-center space-x-2 cursor-pointer ${
          current === 1 ? "text-gray-400" : "text-gray-700"
        }`}
        onClick={() => onPageChange(current - 1)}
      >
        <span
          className={`material-symbols-outlined ${
            current === 1 ? "" : "font-medium"
          }`}
        >
          arrow_left_alt
        </span>
        <li>
          <button
            className={`bg-transparent text-sm font-semibold transition-colors duration-300 ${
              current === 1 ? "text-gray-400" : "text-gray-700"
            }`}
            onClick={() => onPageChange(current - 1)}
            disabled={current === 1}
          >
            Anterior
          </button>
        </li>
      </div>

      <div className="flex items-center space-x-2">
        {Array.from(
          { length: Math.min(MAX_ITEMS, pages) },
          (_, index) => index + first
        ).map((page) => (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              className={`px-3 py-1 rounded-md transition-colors duration-300 ${
                page === current
                  ? "bg-blue-500 text-white"
                  : "bg-transparent text-gray-700"
              }`}
            >
              {page}
            </button>
          </li>
        ))}
      </div>

      <div
        className={`flex items-center space-x-2 cursor-pointer ${
          current === pages ? "text-gray-400" : "text-gray-700"
        }`}
        onClick={() => onPageChange(current + 1)}
      >
        <li>
          <button
            className={`bg-transparent text-sm font-semibold transition-colors duration-300 ${
              current === pages ? "text-gray-400" : "text-gray-700"
            }`}
            onClick={() => onPageChange(current + 1)}
            disabled={current === pages}
          >
            Próxima
          </button>
        </li>
        <span
          className={`material-symbols-outlined ${
            current === pages ? "" : "font-medium"
          }`}
        >
          arrow_right_alt
        </span>
      </div>
    </ul>
  );
};

export default Pagination;
