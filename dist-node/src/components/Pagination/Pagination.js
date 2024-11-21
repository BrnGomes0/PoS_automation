import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Pagination = ({ limit, total, offset, setOffset }) => {
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
    const onPageChange = (page) => {
        // Checks if the requested page is within the limits
        if (page >= 1 && page <= pages) {
            setOffset((page - 1) * limit);
        }
    };
    return (_jsxs("ul", { className: "flex items-center space-x-2", children: [_jsxs("div", { className: `flex items-center space-x-2 cursor-pointer ${current === 1 ? "text-gray-400" : "text-gray-700"}`, onClick: () => onPageChange(current - 1), children: [_jsx("span", { className: `material-symbols-outlined ${current === 1 ? "" : "font-medium"}`, children: "arrow_left_alt" }), _jsx("li", { children: _jsx("button", { className: `bg-transparent text-sm font-semibold transition-colors duration-300 ${current === 1 ? "text-gray-400" : "text-gray-700"}`, onClick: () => onPageChange(current - 1), disabled: current === 1, children: "Anterior" }) })] }), _jsx("div", { className: "flex items-center space-x-2", children: Array.from({ length: Math.min(MAX_ITEMS, pages) }, (_, index) => index + first).map((page) => (_jsx("li", { children: _jsx("button", { onClick: () => onPageChange(page), className: `px-3 py-1 rounded-md transition-colors duration-300 ${page === current
                            ? "bg-blue-500 text-white"
                            : "bg-transparent text-gray-700"}`, children: page }) }, page))) }), _jsxs("div", { className: `flex items-center space-x-2 cursor-pointer ${current === pages ? "text-gray-400" : "text-gray-700"}`, onClick: () => onPageChange(current + 1), children: [_jsx("li", { children: _jsx("button", { className: `bg-transparent text-sm font-semibold transition-colors duration-300 ${current === pages ? "text-gray-400" : "text-gray-700"}`, onClick: () => onPageChange(current + 1), disabled: current === pages, children: "Pr\u00F3xima" }) }), _jsx("span", { className: `material-symbols-outlined ${current === pages ? "" : "font-medium"}`, children: "arrow_right_alt" })] })] }));
};
export default Pagination;
